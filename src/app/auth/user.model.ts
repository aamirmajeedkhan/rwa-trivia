import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";

export class User {
    userId:string;
    displayName:string;
    email:string;
    //roles:any[];
    roles:any;
    user: Observable<firebase.User>;

    constructor(private fbUser:firebase.User){
        this.userId=fbUser.uid;
        this.email=fbUser.email; 
        this.displayName=(fbUser.displayName ? fbUser.displayName : 
                          this.email);
        
    }
}

