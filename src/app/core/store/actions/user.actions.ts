import { Action } from '@ngrx/store';
import { User } from '../../model';

export class UserActions {
static LOGOFF = 'LOGOFF';
  logoff(): Action {
    return {
      type: UserActions.LOGOFF,
      payload: null
    };
  }
static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  loginSuccess(user: User): Action {
    return {
      type: UserActions.LOGIN_SUCCESS,
      payload: user
    };
  }
static ATTACH_USER_ROLES = 'ATTACH_USER_ROLES';
  attachUserRoles(user:User):Action{
    return {
      type: UserActions.ATTACH_USER_ROLES,
      payload: user
    };
  }
}