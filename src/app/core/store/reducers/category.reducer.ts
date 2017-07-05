import { Injectable } from '@angular/core';
import { Action } from "@ngrx/store";
import { Category } from "../../model";
import { CategoryActions } from "../actions/category.actions";

export const categories =(state:any=[], action:Action): Category[] => {
    switch(action.type) {
        case CategoryActions.LOAD_CATEGORIES_SUCCESS:
            return action.payload;
        default :
            return state;
    }  

}

export const categoryDictionary=(state:any={},action:Action): {[key:number]                                     :Category} => {
    switch(action.type) { 
        case CategoryActions.LOAD_CATEGORIES_SUCCESS:
            let categories:Category[]=action.payload;
            let categoryDictionary : {[key:number]:Category}={};
            for ( let value of categories) {
                categoryDictionary[value.id]= value;
            }
            return categoryDictionary;
        default :
        return state;
    }
}