import { Action } from "@ngrx/store";
import { QuestionActions } from "../actions/question.actions";
import { UserActions } from "../actions/user.actions";

export const appStatus = (state: any = 'NONE',
                                        action:Action):string => {
    switch(action.type){
        case QuestionActions.ADD_QUESTION:
            return 'IN PROGRESS';
        case QuestionActions.ADD_QUESTION_SUCCESS:
            return 'SUCCESS';
        case UserActions.LOGIN_SUCCESS:
            return 'LOGIN SUCCESS';
        case UserActions.LOGOFF:
            return 'LOGOFF';
        default:
            return state;
    }

}