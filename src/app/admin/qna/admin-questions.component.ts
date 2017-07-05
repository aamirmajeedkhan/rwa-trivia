import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { AppStore } from "../../core/store/app.store";
import { QuestionActions } from "../../core/store/actions/question.actions";
import { User, Question, Category } from "../../core/model";

@Component({
    selector: 'admin-questions',
  templateUrl: './admin-questions.component.html',
  styleUrls: ['./admin-questions.component.css']
})
export class AdminQuestionsComponent implements OnInit {
    questions:Observable<Question[]>;
    unpublishedQuestions:Observable<Question[]>;
    categoryDict:Observable<{[key:number]:Category}>;

    constructor(private store:Store<AppStore>,
                private questionActions:QuestionActions) { 
        this.questions = store.select(s => s.questions);
        this.unpublishedQuestions = store.select( s => s.unpublishedQuestions);
        this.categoryDict = store.select(s => s.categoryDictionary);
    }

    ngOnInit() { 
        this.store.dispatch(this.questionActions
                                .loadUnpublishedQuestions());
    }

    approveQuestion(question:Question){
        let user:User;
        this.store.take(1).subscribe(s => user=s.user);
        console.log(question);
        question.approvedBy = user.userId;

        this.store.dispatch(this.questionActions.approveQuestion(question));
    }

}