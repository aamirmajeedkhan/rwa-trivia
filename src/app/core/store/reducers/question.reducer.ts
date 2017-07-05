import { Action } from "@ngrx/store";
import { Question } from "../../model";
import { QuestionActions } from "../actions/question.actions";

export const questions = (state: any=[], action: Action): Question[] => {
    switch(action.type){
        // case QuestionActions.LOAD_QUESTIONS:
        //     return action.payload;
        case QuestionActions.LOAD_QUESTIONS_SUCCESS :
            //return [...state,...action.payload];
            return action.payload;
        default :
            return state;
    }
};

export const unpublishedQuestions = (state: any=[], action: Action): Question[] => {
    switch(action.type){
        case QuestionActions.LOAD_UNPUBLISHED_QUESTIONS:
            return state;
        case QuestionActions.LOAD_UNPUBLISHED_QUESTIONS_SUCCESS:
            return action.payload;
        default :
            return state;
    }
};

export const userQuestions = (state: any=[], action: Action): Question[] => {
    switch(action.type){
        case QuestionActions.LOAD_USER_QUESTIONS_SUCCESS:
            return action.payload;
        default :
            return state;
    }
};

export const sampleQuestions = (state: any=[], action: Action): Question[] => {
    switch(action.type){
        case QuestionActions.LOAD_SAMPLE_QUESTIONS_SUCCESS:
            return action.payload;
        default :
            return state;
    }
};

export const questionAddStatus = (state: any = "NONE", action: Action): string => {
  switch (action.type) {
    case QuestionActions.ADD_QUESTION:
      return "IN PROGRESS";
    case QuestionActions.ADD_QUESTION_SUCCESS:
      return "SUCCESS";
    default:
      return state;
  }
};
// export const questionPersistenceStatus = (state:any='NONE',
//                                         action:Action):string => {
//     switch(action.type){
//         case QuestionActions.ADD_QUESTION:
//             return 'IN PROGRESS';
//         case QuestionActions.ADD_QUESTION_SUCCESS:
//             return 'SUCCESS';
//         default:
//             return state;
//     }

// }