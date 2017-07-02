import { AppStore } from "../../store/app.store";
import { User } from "../../auth/user.model";
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";


@Component({
    selector: 'admin-dashboard',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit,OnDestroy {
    user:User;
    userSubscription:Subscription;
    constructor(private store:Store<AppStore>,
                private router:Router) { }

    ngOnInit() {
        this.userSubscription = this.store.select(s => s.user)
                                .subscribe(user => {
                                    console.log('user admin ' + user.roles.admin);
                                    if(!user || !user.roles.admin)
                                        this.router.navigate(['/']);
                                    this.user=user;
                                });
    }

    ngOnDestroy(): void {
        if(this.userSubscription)
            this.userSubscription.unsubscribe();
    }

}