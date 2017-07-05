import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppStore } from "../../core/store/app.store";
import { CategoryActions } from "../../core/store/actions/category.actions";
import { loadTags } from "../../core/store/actions/tag.actions";
import { QuestionActions } from "../../core/store/actions/question.actions";
import { MdSnackBar } from "@angular/material";
import { Subscription } from "rxjs/Subscription";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "../../core/model";
import { AuthService } from "../../core/services/auth.service";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'trivia!';
  private statusSubscription:Subscription;
  private userSubscription:Subscription;
  user:User;
  isQuestionList:boolean=false;

  constructor (private store:Store<AppStore>,
               private router:Router,
              private categoryActions:CategoryActions,
              private questionActions:QuestionActions,
              private snackBar:MdSnackBar,
              private authService:AuthService,
              private af:AngularFireAuth){}

  ngOnInit(){
    this.store.dispatch(this.categoryActions.loadCategories());
    this.store.dispatch(loadTags());
    this.store.dispatch(this.questionActions.loadQuestions());

    this.statusSubscription = this.store.select( s => s.appStatus)
                                   .subscribe( status => {
                                     if (status ==  "SUCCESS")
                                        this.snackBar.open("Question saved!", "", {duration: 2000});
                                    else if (status == "IN PROGRESS")
                                        this.router.navigate(['/questions']);
                                    else if (status == 'LOGIN SUCCESS')
                                        this.snackBar.open("Welcome !", "", {duration: 2000});
                                    else if (status == 'LOGOFF')
                                        this.snackBar.open("Logoff              successfully!", "", {duration: 2000});
                                    });
    //this.user=this.af.auth.currentUser;
     //this.user = this.store.select(s => s.user);
     this.userSubscription = this.store.select(s => s.user).subscribe(user => {
        this.user=user;
        if(user){
          let url: string;
        this.store.take(1).subscribe(s => url = s.loginRedirectUrl);
        if (url)
          this.router.navigate([url]);
        }
     });
     this.authService.quesSubject.subscribe((data:boolean) => this.isQuestionList = data);
  }
    login() {
    this.authService.ensureLogin();
  }

  logout() {
    this.authService.logout();
  }
  ngOnDestroy(): void {
    if(this.statusSubscription)
      this.statusSubscription.unsubscribe();
    if (this.userSubscription)
      this.userSubscription.unsubscribe();
    
  }
}
