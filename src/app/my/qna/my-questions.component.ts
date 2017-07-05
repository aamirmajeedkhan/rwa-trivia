import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Question, Category, User } from "../../core/model";
import { AppStore } from "../../core/store/app.store";
import { QuestionActions } from "../../core/store/actions/question.actions";
import { Store } from "@ngrx/store";

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