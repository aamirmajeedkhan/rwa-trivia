import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryListComponent } from "./category/category-list/category-list.component";
import { QuestionListComponent } from "./qna/question-list/question-list.component";
import { TagListComponent } from "./tag/tag-list/tag-list.component";
import { QnaUpsertComponent } from "./qna/qna-upsert/qna-upsert.component";
import { AuthGuard } from "./auth/auth.guard";
import { AdminComponent } from "./auth/admin/admin.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MyQuestionsComponent } from "./qna/my/my-questions.component";
import { AdminQuestionsComponent } from "./admin/admin-questions.component";

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },    
    { path: 'dashboard', component: DashboardComponent },
    {
    path: 'questions', component: MyQuestionsComponent, canActivate: [AuthGuard]
    },
    { path: 'question/add', component: QnaUpsertComponent, canActivate: [AuthGuard] },
    {
    path: 'admin',
    component: AdminComponent,
    //data: { roles: ["admin"] },
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DashboardComponent
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
]
  }
    //{ path: 'categories', component: CategoryListComponent },
    //{ path: 'tags', component: TagListComponent },
    //{ path: 'questions', component: QuestionListComponent },
    //{ path: '**', pathMatch:'full', redirectTo: '/categories' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }