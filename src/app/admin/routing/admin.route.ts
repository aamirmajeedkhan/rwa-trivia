import { Routes } from "@angular/router/router";
import { AdminComponent } from "../admin.component";
import { AuthGuard } from "../../core/services/auth.guard";
import { AdminDashboardComponent } from "../dashboard/dashboard.component";
import { CategoryListComponent } from "../category/category-list.component";
import { TagListComponent } from "../tag/tag-list.component";
import { AdminQuestionsComponent } from "../qna/admin-questions.component";

export const AdminRoutes: Routes = [
 {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AdminDashboardComponent
      },
      {
        path: 'categories',
        component: CategoryListComponent
      },
      {
        path: 'tags',
        component: TagListComponent
      },
      {
        path: 'questions',
        component: AdminQuestionsComponent
      }
]}
];
  