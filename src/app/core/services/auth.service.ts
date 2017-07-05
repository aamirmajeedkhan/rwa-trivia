import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Store } from "@ngrx/store";
import 'rxjs/add/operator/take';
import { MdDialog } from "@angular/material";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';

import { LoginComponent } from "../components/login/login.component";
import { User } from "../../core/model";
import { AppStore } from "../store/app.store";
import { UserActions } from "../store/actions/user.actions";
import { UIStateActions } from "../store/actions/ui-state.actions";

import { Subject } from "rxjs/Subject";

import { Observable } from "rxjs/Observable";
import { FirebaseObjectObservable, AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class AuthService implements OnInit,OnDestroy {
   quesSubject:Subject<boolean>=new Subject<boolean>();

    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }

    constructor(private store:Store<AppStore>,
                private dialog: MdDialog,
                private af: AngularFireAuth,
                private afDB:AngularFireDatabase,
                private userActions: UserActions,
                private uiStateActions:UIStateActions
                ) { }

    ngOnInit() {
        // this.af.authState.subscribe((fbUser:firebase.User) => {
        //   console.log('here subscribe for the new user');
        //     if (fbUser){
        //         console.log(fbUser);
        //         this.store.dispatch(this.userActions.loginSuccess(new User(fbUser)));
        //     }
        //     else{
        //       this.store.dispatch(this.userActions.logoff());
        //     }
        // });      
    }

    showLogin = (url?:string) => {
      this.store.dispatch(this.uiStateActions.setLoginRedirectUrl(url));
      let dialogRef = this.dialog.open(LoginComponent, {
        disableClose: false
      });
  };
  ensureLogin = () => {
    if (!this.isAuthenticated)
      this.showLogin();
  };

  logout = () => {
    this.af.auth.signOut();  
    this.store.dispatch(this.userActions.logoff());  
  };

  get isAuthenticated () : boolean {
    let user: User;
    this.store.take(1).subscribe(s => user = s.user)
    if (user)
      return true;

    return false;
  };
  get user () : User {
    let user: User;
    this.store.take(1).subscribe(s => user = s.user)
    return user;
  };
  googleLogin(){
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
                .then((success)=>{
                  console.log(this.af.auth.currentUser);
                  this.store.dispatch(this.userActions.loginSuccess(new User(this.af.auth.currentUser))); 
                },
                      (reject) => {console.error(reject)}
                ).catch((err) => console.error(err));
  }

  getUserRoles(user:User):Observable<User>{
    console.log(user.userId);
    return this.afDB.object('/users/' + user.userId + "/roles")
             .take(1)
             .map(roles => {
             user.roles = roles;
             console.log(roles.admin); 
             return user;
            });  
  }
}