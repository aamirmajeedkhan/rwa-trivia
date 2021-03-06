import { Action } from "@ngrx/store";
import { UIStateActions } from "../actions/ui-state.actions";

export const loginRedirectUrl = (state: any=null, action: Action): string => {
    switch(action.type){
        case UIStateActions.LOGIN_REDIRECT_URL:
        return action.payload;
        default:
            return state;
    }
}