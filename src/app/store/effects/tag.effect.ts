import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { ActionTypes,loadTagsSuccess } from "../actions/tag.actions";
import { TagService } from "../../tag/tag.service";

@Injectable()
export class TagEffects{
    constructor(private actions$:Actions,
                private tagService:TagService){}
    
    @Effect()
    loadTags$ = this.actions$
        .ofType(ActionTypes.LOAD_TAGS)
        .switchMap( () => 
            this.tagService.getTags())
        .map( (tags:string[]) => 
            loadTagsSuccess(tags))
}