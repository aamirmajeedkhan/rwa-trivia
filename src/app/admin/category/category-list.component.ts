import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { AppStore } from "../../core/store/app.store";

import { Category } from '../../core/model';
import { CategoryService } from '../../core/services/category.service';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit,OnDestroy {
  //private categories: Category[];
  categories:Observable<Category[]>;
  private subscription:Subscription;

  //constructor(private categoryService:CategoryService) { }
  constructor(private store:Store<AppStore>) { 
    this.categories = store.select(s => s.categories);
  }
  ngOnInit() {
    // this.subscription=this.categoryService.getCategories()
    //     .subscribe( categories => this.categories=categories);
    
  }

  ngOnDestroy(){
    if (this.subscription)
      this.subscription.unsubscribe();
  }

}
