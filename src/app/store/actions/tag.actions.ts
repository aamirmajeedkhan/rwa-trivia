import { Action } from "@ngrx/store";

export const ActionTypes = {
    LOAD_TAGS : 'LOAD_TAG',
    LOAD_TAGS_SUCCESS : 'LOAD_TAGS_SUCCESS',
}

export function loadTags():Action{
        return {
            type: ActionTypes.LOAD_TAGS
        };
    }
export function loadTagsSuccess(tags:string[]):Action{
        return{
            type: ActionTypes.LOAD_TAGS_SUCCESS,
            payload: tags
        };
    }
// export class TagActions {

//     static LOAD_TAGS = 'LOAD_TAG';
//     loadTags():Action{
//         return {
//             type: TagActions.LOAD_TAGS
//         }
//     }

//     static LOAD_TAGS_SUCCESS = 'LOAD_TAGS_SUCCESS';
//     loadTagsSuccess(tags:string[]):Action{
//         return{
//             type: TagActions.LOAD_TAGS_SUCCESS,
//             payload: tags
//         }
//     }
// }

