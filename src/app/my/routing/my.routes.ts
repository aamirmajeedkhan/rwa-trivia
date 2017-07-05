import { RouterModule, Routes } from '@angular/router';
import { QnaUpsertComponent } from "../qna/qna-upsert.component";
import { MyQuestionsComponent } from "../qna/my-questions.component";
import { AuthGuard } from "../../core/services/auth.guard";

export const routes: Routes = [
    {
    path: '', component: MyQuestionsComponent, canActivate: [AuthGuard]
    },
    { path: 'add', component: QnaUpsertComponent, canActivate: [AuthGuard] },
];
