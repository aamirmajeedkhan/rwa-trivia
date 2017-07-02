import { Component, OnInit, OnDestroy } from '@angular/core';
import { TagService } from '../tag.service';
import { Subscription } from "rxjs/Subscription";
import { Store } from "@ngrx/store";
import { AppStore } from "../../store/app.store";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit, OnDestroy {
   private tagSubscription:Subscription;
   private tags:Observable<string[]>;
   //constructor(private tagService:TagService) { }
   constructor(private store:Store<AppStore>){}
  ngOnInit() {
    // this.tagSubscription = this.tagService.getTags()
    //     .subscribe( tags=> this.tags=tags);
    this.tags=this.store.select( s => s.tags);
  }
  ngOnDestroy(): void {
    if (this.tagSubscription)
      this.tagSubscription.unsubscribe();
  }
}
