import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { Question,Category } from "../../core/model";
import { AppStore } from "../../core/store/app.store";
import { QuestionActions } from "../../core/store/actions/question.actions";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  categories: Observable<Category[]>;
  categoryDict: Observable<{[key: number] :Category}>;
  tags:Observable<string[]>;
  questions: Observable<Question[]>;
  sampleQuestions: Observable<Question[]>;


  constructor(private store:Store<AppStore>,
              private quesActions:QuestionActions) { }

  ngOnInit() {
    this.categories = this.store.select(s => s.categories);
    this.categoryDict = this.store.select(s => s.categoryDictionary);
    this.tags = this.store.select(s => s.tags);
    this.questions = this.store.select(s => s.questions);
    this.sampleQuestions = this.store.select(s => s.sampleQuestions);
    this.store.dispatch(this.quesActions.loadSampleQuestions());
  }

}
