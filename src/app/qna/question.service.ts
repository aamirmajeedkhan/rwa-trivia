import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/observable/fromPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from "angularfire2/database";

import { Question, QuestionStatus } from "./question.model";
import { Category } from "../category/category.model";
import { CategoryService } from "../category/category.service";
import { Store } from "@ngrx/store";
import { AppStore } from "../store/app.store";
import { QuestionActions } from "../store/actions/question.actions";
import { User } from "../auth/user.model";

@Injectable()
export class QuestionService {
    private serviceUrl='http://localhost:3000/questions';
    
    constructor(private categoryService:CategoryService,
              private db:AngularFireDatabase,
              private questionActions: QuestionActions,
              private store: Store<AppStore> ){}
    // constructor(private http:Http,private categoryService:CategoryService) { }

    getSampleQuestions():Observable<Question[]>{
        return this.db.list('/questions/published',{
            query: {
                limitToLast : 4,
            }
        });
    }

    getUserQuestions(user:User):Observable<Question[]>{
        return this.db.list('/users/' + user.userId + '/questions').map((qids: any[]) => {
                 let questions: Question[] = [];
                 qids.forEach(qid => {
                    this.db.object('/questions/' + qid['$value'] + '/' + qid['$key']).take(1)
                    .subscribe(q => {
                      console.log(q);
                      questions.push(q)
                    });
                 });
                 return questions;
              });
    }

    getQuestions():Observable<Question[]>{
        return this.db.list('/questions/published');
    }
    getUnpublishedQuestions(): Observable<Question[]> {
    return this.db.list('/questions/unpublished');
  }
    postQuestion(question:Question) {
        console.log('created by' + question.createdBy);
    //     this.db.list('/questions/unpublished').push(question).then(
    //   (result) => {  //success
    //     if (result.key)
    //       this.db.object('/users/' + question.createdBy + '/questions').update({[result.key]: "unpublished"});
    //     this.store.dispatch(this.questionActions.addQuestionSuccess());
    //   },
    //   (error: Error) => {//error
    //     console.error(error);
    //   }
    // );
        Observable.fromPromise(this.db.list('/questions/unpublished').push(question)).subscribe((result) => {
        if (result.key)
            this.db.object('/users/' + question.createdBy + '/questions').update({[result.key]: "unpublished"});
        this.store.dispatch(this.questionActions.addQuestionSuccess());},
        (error) => console.error(error));
        
    }

   approveQuestion(question:Question){
       let key: string = question["$key"];
    question.status = QuestionStatus.APPROVED;
    this.db.object('/questions/published').update({[key]: question}).then(
      (result) => {  //success
        this.db.object('/users/' + question.createdBy + '/questions').update({[key]: "published"});
        this.db.object('/questions/unpublished/' + key).remove();
      },
      (error: Error) => {//error
        console.error(error);
      }
    );
   }
   

}   