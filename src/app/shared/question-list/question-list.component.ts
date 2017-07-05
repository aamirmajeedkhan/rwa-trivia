import { Component, OnInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import { Question, QuestionStatus, Category } from "../../core/model";

//import { CategoryService } from 'app/category/category.service';


@Component({
  selector: 'question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit,OnDestroy {
  @Input() questions: Question[]
  @Input() categoryDict: {[key: number]: Category};
  @Input() showApproveButton:boolean;
  @Output() approved =new EventEmitter<Question>();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
  getDisplayStatus(status: number): string {
    return QuestionStatus[status];
  }
  approve(question: Question ) {
    this.approved.emit(question)
  }
//   private categoryDictSubscription:Subscription;
//   private questions:Observable<Question[]>;
//   private categoryDict: {[key: number]: Category};
  
//   constructor(private store:Store<AppStore>,
//               private authService:AuthService) { }

//   ngOnInit() {
//     this.questions = this.store.select( s => s.questions);
//     this.categoryDictSubscription = this.store.select( s =>                                                     s.categoryDictionary)                                                      .subscribe( data => this.categoryDict=data);
//     this.authService.quesSubject.next(true);
//   }
 
//  ngOnDestroy(){
//     this.authService.quesSubject.next(false); 
//     if (this.categoryDictSubscription)  
//       this.categoryDictSubscription.unsubscribe();
//  }

 
}
