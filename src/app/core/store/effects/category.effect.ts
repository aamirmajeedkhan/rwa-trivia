import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { CategoryActions } from '../actions/category.actions';
import { CategoryService } from "../../services/category.service";
import { Category } from "../../model";

@Injectable()
export class CategoryEffects {
    
    constructor(private actions$:Actions,
                private categoryActions:CategoryActions,
                private categoryService:CategoryService) { }

    @Effect()
    loadCategories$ = this.actions$
        .ofType(CategoryActions.LOAD_CATEGORIES)
        .switchMap( () => this.categoryService.getCategories())
        .map( (categories:Category[]) => this.categoryActions                                            .loadCategoriesSuccess(categories))

}