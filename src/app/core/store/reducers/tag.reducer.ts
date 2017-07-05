import { Action } from "@ngrx/store";
import { ActionTypes } from "../actions/tag.actions";

// export const tags = (state: any = [], action: Action): string[] => {
//     switch(action.type){
//         case TagActions.LOAD_TAGS_SUCCESS:
//             return action.payload;
//         default :
//             return state;
            
//     }
// }

export function reducer(state:any=[],action:Action){
    switch(action.type){
        case ActionTypes.LOAD_TAGS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}