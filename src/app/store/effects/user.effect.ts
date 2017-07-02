import { Injectable } from '@angular/core';
import { Actions, Effect } from "@ngrx/effects";
import { UserActions } from "../actions/user.actions";
import { AuthService } from "../../auth/auth.service";
import { User } from "../../auth/user.model";

@Injectable()
export class UserEffects {
    
    constructor(private actions$: Actions,
        private userActions: UserActions,
        private autService: AuthService) { }
    
    @Effect() 
    loadUserRoles$ = this.actions$
        .ofType(UserActions.LOGIN_SUCCESS)
        .map((action) => action.payload)
        .switchMap((user: User) => this.autService.getUserRoles(user))
        .map((user: User) => this.userActions.attachUserRoles(user));
}