import { Action } from "@ngrx/store";

export class UIStateActions {
    static LOGIN_REDIRECT_URL='LOGIN_REDIRECT_URL';
    setLoginRedirectUrl(url:string):Action{
        return{
            type:UIStateActions.LOGIN_REDIRECT_URL,
            payload:url
        }
    }
}
