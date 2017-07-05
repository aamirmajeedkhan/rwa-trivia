import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { QuestionActions } from "../actions/question.actions";
import { QuestionService } from "../../services/question.service";
import { Question } from "../../model";

@Injectable()
export class QuestionEffects {

    constructor (private actions$:Actions,
                private questionActions:QuestionActions,
                private questionService:QuestionService){}
    
    @Effect()
    loadQuestions$ = this.actions$
                      .ofType(QuestionActions.LOAD_QUESTIONS)
                      .switchMap( () => this.questionService.getQuestions())
                      .map( (questions:Question[]) => 
                                this.questionActions.loadQuestionsSuccess(questions)
                           )
    
    @Effect()
    addQuestion$ = this.actions$
                    .ofType(QuestionActions.ADD_QUESTION)
                    .do( (action) => this.questionService
                                     .postQuestion(action.payload))
                    .filter(() => false);

    @Effect() 
    loadUnpublishedQuestions$ = this.actions$
        .ofType(QuestionActions.LOAD_UNPUBLISHED_QUESTIONS)
        .switchMap(() => this.questionService.getUnpublishedQuestions())
        .map((questions: Question[]) => this.questionActions.loadUnpublishedQuestionsSuccess(questions));

    @Effect() 
    loadUserQuestions$ = this.actions$
        .ofType(QuestionActions.LOAD_USER_QUESTIONS)
        .switchMap((action) => this.questionService.getUserQuestions(action.payload))
        .map((questions: Question[]) => this.questionActions.loadUserQuestionsSuccess(questions));

    @Effect() 
    loadSampleQuestions$ = this.actions$
        .ofType(QuestionActions.LOAD_SAMPLE_QUESTIONS)
        .switchMap(() => this.questionService.getSampleQuestions())
        .map((questions: Question[]) => this.questionActions.loadSampleQuestionsSuccess(questions));

    @Effect() 
    approveQuestion$ = this.actions$
        .ofType(QuestionActions.APPROVE_QUESTION)
        .do((action) => this.questionService.approveQuestion(action.payload))
        .filter(() => false);
 }   