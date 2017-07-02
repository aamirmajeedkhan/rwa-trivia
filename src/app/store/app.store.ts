import { combineReducers } from "@ngrx/store";
import { compose } from "@ngrx/core/compose";
import { categories, categoryDictionary } from "./reducers/category.reducer";
import { Category } from "../category/category.model";
import { reducer as tagReducer } from "./reducers/tag.reducer";
import { Question } from "../qna/question.model";
import { questions, unpublishedQuestions, userQuestions, sampleQuestions, questionAddStatus } from "./reducers/question.reducer";
import { User } from "../auth/user.model";
import { user } from "./reducers/user.reducer";
import { appStatus } from "./reducers/status.reducer";
import { loginRedirectUrl } from "./reducers/ui-state.reducer";

export interface AppStore {
    user: User;
    categories:Category[];
    categoryDictionary:{[key:number]:Category},
    tags : string[];
    questions : Question[]
    appStatus : string;
    loginRedirectUrl : string;
    unpublishedQuestions: Question[];
    userQuestions: Question[];
    sampleQuestions : Question[];
    questionAddStatus: string;
}

export default compose(combineReducers)({
    categories: categories,
    categoryDictionary: categoryDictionary,
    tags : tagReducer,
    questions: questions,
    user:user,
    appStatus : appStatus,
    LoginRedirectUrl : loginRedirectUrl,
    unpublishedQuestions : unpublishedQuestions,
    userQuestions : userQuestions,
    sampleQuestions : sampleQuestions,
    questionAddStatus:questionAddStatus,
}); 