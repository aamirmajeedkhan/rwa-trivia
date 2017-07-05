import { User } from '../../model';
import {UserActions} from '../actions/user.actions';
import { Action } from "@ngrx/store";

export const user = (state: any = null, action: Action): User => {
  switch (action.type) {
    case UserActions.LOGIN_SUCCESS:
      return action.payload;
    case UserActions.ATTACH_USER_ROLES:
      return action.payload;
    case UserActions.LOGOFF:
      return null;
    default:
      return state;
  }
};