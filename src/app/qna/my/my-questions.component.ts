import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Question } from "../question.model";
import { Category } from "../../category/category.model";
import { User } from "../../auth/user.model";
import { Store } from "@ngrx/store";
import { AppStore } from "../../store/app.store";
import { QuestionActions } from "../../store/actions/question.actions";

@Component({
    selector: 'my-questions',
    templateUrl: './my-questions.component.html',
  styleUrls: ['./my-questions.component.css']
})
export class MyQuestionsComponent implements OnInit {
    questions: Observable<Question[]>;
    categoryDict: Observable<{[key:number]:Category}>;
    user:User;
    
    constructor(private store:Store<AppStore>,
                private questionActions: QuestionActions) { 
        this.questions = store.select(s => s.userQuestions);
        this.categoryDict = store.select(s => s.categoryDictionary);
    }

    ngOnInit() { 
        this.store.take(1).subscribe(s => this.user= s.user);
        this.store.dispatch(this.questionActions.loadUserQuestions(this.user));
    }

}