import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, AbstractControl } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";

import { CategoryService } from "../../category/category.service";
import { Question, QuestionStatus } from "../question.model";
import { QuestionService } from "../question.service";
import { TagService } from "../../tag/tag.service";
import { Category } from "../../category/category.model";
import { Answer } from "../Answer.model";
import { AppStore } from "../../store/app.store";
import { QuestionActions } from "../../store/actions/question.actions";

@Component({
  selector: 'qna-upsert',
  templateUrl: './qna-upsert.component.html',
  styleUrls: ['./qna-upsert.component.css']
})
export class QnaUpsertComponent implements OnInit,OnDestroy {
  private qnaForm:FormGroup;
  private questionChangeSubscription:Subscription;
  private answerChangeSubscription:Subscription;
  private categorySubscription:Subscription;
  private tagSubscription:Subscription;
  private userSubscription:Subscription;
  private categories:Category[];
  private tags:string[];
  private autoTags: string[] = [];
  private enteredTags: string[]=[];
  
  get tagArray(): FormArray { 
    return this.qnaForm.get('tagArray') as FormArray; 
  }

  constructor(private fb:FormBuilder,
              private router:Router,
              private questionAction:QuestionActions,              
              //private questionService:QuestionService,              
              private store:Store<AppStore>) { }

  get answerArray(): FormArray { 
    return this.qnaForm.get('answerArray') as FormArray; 
  }

  ngOnInit() {
    let question = new Question();
    this.initForm(question);
    let questionControl = this.qnaForm.get('questionText');
    this.questionChangeSubscription = questionControl.valueChanges
                                      .debounceTime(500).subscribe(
                                        v => this.computeAutoTags());
    this.answerChangeSubscription = this.answerArray.valueChanges
                                    .debounceTime(500)
                                    .subscribe(v => this.computeAutoTags());
    //update to ngrx     
    const categoriesObservable = this.store.select( s => s.categories);                         
    this.categorySubscription = categoriesObservable
                                .subscribe(categories => this.categories = categories);
    const tagObservable = this.store.select( s => s.tags);
    this.tagSubscription = tagObservable
                            .subscribe(tags => this.tags = tags);
    this.userSubscription = this.store.select(s => s.user).subscribe(user => {
      if (!user)
        this.router.navigate(['/']);
    });

  }  

  ngOnDestroy(){
    if (this.answerChangeSubscription)
      this.answerChangeSubscription.unsubscribe();
    if (this.questionChangeSubscription)
      this.questionChangeSubscription.unsubscribe();
    if (this.categorySubscription)
      this.categorySubscription.unsubscribe();
    if (this.tagSubscription)
      this.tagSubscription.unsubscribe();
  }

  addTag() {
    let tag = this.qnaForm.get('tags').value;
    if (tag) {
      if (this.enteredTags.indexOf(tag) < 0)
        this.enteredTags.push(tag);
      this.qnaForm.get('tags').setValue('');
    }
    this.setTagsArray();
  }

  removeEnteredTag(tag) {
    this.enteredTags = this.enteredTags.filter(t => t !== tag); 
    this.setTagsArray();
  }

  setTagsArray() {
    this.tagArray.controls = [];
    [...this.autoTags, ...this.enteredTags].forEach(tag => this.tagArray.push(new FormControl(tag)));
  }
  
  onSubmit(){
      //validations      
      if (this.qnaForm.invalid)
        return;
      
      let question: Question = this.getQuestionFromFormValue(this.qnaForm.value);
      question.status=QuestionStatus.SUBMITTED;
      this.store.take(1).subscribe(s => question.createdBy = s.user.userId);
      //call saveQuestion
      
      this.saveQuestion(question);
    }  

  getQuestionFromFormValue(formValue: any): Question {
    let question: Question;
    question = new Question();
    question.questionText = formValue.questionText;
    //console.log(formValue.answerArray);
    question.answers = formValue.answerArray;
    question.categoryIds = [formValue.category];
    question.tags = [...this.autoTags, ...this.enteredTags];
    question.ordered = formValue.ordered;
    question.explanation = formValue.explanation;
    //console.log(JSON.stringify(question));
    return question;
  } 

  private saveQuestion(question:Question) {
    this.store.dispatch(this.questionAction.addQuestion(question));
      // this.questionService.postQuestion(question).subscribe( 
      //   response => {
      //     this.router.navigate(['/questions']);
      //   }
      // );
  }

  computeAutoTags() {
      let formValue = this.qnaForm.value;      
      let allTextValues: string[] = [formValue.questionText];
      formValue.answerArray.forEach(answer => allTextValues.push(answer.answerText));
      let wordString: string = allTextValues.join(" ");
      let matchingTags: string[] = [];
      this.tags.forEach(tag => {
        let patt = new RegExp('\\b(' + tag.replace("+", "\\+") + ')\\b', "ig");
        if (wordString.match(patt))
          matchingTags.push(tag);
      });
      this.autoTags = matchingTags;
   }

 private initForm(question:Question){
  
  let answers = this.fb.array([]);
  if (question['answers']) {
    for (let answer of question.answers){
      answers.push(this.fb.group({
          'answerText':[answer.answerText,Validators.required],
          'correct':[answer.correct]
        }));
    //   if(answer.answerText){
    //     answers.push(this.fb.group({
    //       'answerText':[answer.answerText,Validators.required],
    //       'correct':[answer.correct]
    //     }));
    // }
    // else{
    //     answers.push(this.fb.group({
    //       'answerText':['',Validators.required],
    //       'correct':[false]
    //     }));
    //   }
    }
  }
  answers.setValidators(this.OnlyOneCorrectAnswerValidator);
  let tags = this.fb.array([]);
  if (question['answers']) {
    for (let tag of question.tags){
      tags.push(new FormControl(tag));
    }
  }else{
    tags.push(new FormControl(''));
  }
  this.qnaForm = this.fb.group({
    'category':[question.categories.length > 0 ? question.categories[0]:'',
                Validators.required],
    'questionText':[question.questionText, Validators.required],
    'tags':'',
    'tagArray':tags,
    'answerArray':answers,
    'ordered': [question.ordered],
    'explanation': [question.explanation]
      }, {validator: this.questionFormValidator}
    );
 }

  OnlyOneCorrectAnswerValidator = (control:AbstractControl) => {
    
    let answers: Answer[] = control.value;
    if (answers.filter(answer => answer.correct).length != 1)
      return {'correctAnswerCountInvalid': true}
  };

  TagCountValidator = (control:AbstractControl) => {
      let tags: string[] = control.get('tagArray').value;
   if (tags.length  < 3)
    return {'tagCountInvalid': true}

   return null;
  };  

questionFormValidator = (control:AbstractControl) => {
  //    let answers: Answer[] = control.get('answerArray').value;
  //  if (answers.filter(answer => answer.correct).length != 1)
  //   return {'correctAnswerCountInvalid': true}
   
   let tags: string[] = control.get('tagArray').value;
   if (tags.length  < 3)
    return {'tagCountInvalid': true}

   return null;
  
};

 
}
