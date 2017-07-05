import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { MdDialogRef,MD_DIALOG_DATA } from "@angular/material";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Store } from "@ngrx/store";
import { AppStore } from "../../store/app.store";
import { UserActions } from "../../store/actions/user.actions";
import { User } from "../../model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(//private authService: AuthService,
              private store:Store<AppStore>,
              private userActions: UserActions,
              private af: AngularFireAuth,
              public dialogRef: MdDialogRef<LoginComponent>,
              @Inject(MD_DIALOG_DATA) public disableClose: boolean) { }

  ngOnInit() {
  }
  popupGoogleLogin(){
    //this.authService.googleLogin();
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
                .then((success)=>{                  
                  this.store.dispatch(this.userActions.loginSuccess(new User(this.af.auth.currentUser))); 
                },
                      (reject) => {console.error(reject)}
                ).catch((err) => console.error(err));
    
  }

}
