import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './routing/admin-routing.module';
import { SharedModule } from "../shared/shared.module";
import { TagListComponent } from "./tag/tag-list.component";
import { CategoryListComponent } from "./category/category-list.component";
import { AdminQuestionsComponent } from "./qna/admin-questions.component";
import { AdminDashboardComponent } from "./dashboard/dashboard.component";
import { AdminComponent } from "./admin.component";

@NgModule({
    imports: [ AdminRoutingModule, SharedModule, ],
    declarations: [ AdminDashboardComponent, AdminComponent,
                    CategoryListComponent, TagListComponent, AdminQuestionsComponent],
})
export class AdminModule { }