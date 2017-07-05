import { Routes } from "@angular/router/router";
import { DashboardComponent } from "../components";
import { AuthGuard } from "../core/services/auth.guard";

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },    
    { path: 'dashboard', component: DashboardComponent },
    {
    path: 'my',
    loadChildren: 'app/my/my.module#MyModule',
    //data: { roles: ["admin"] },
    canActivate: [AuthGuard],
    },
    {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad : [AuthGuard],
    //data: { roles: ["admin"] },
    canActivate: [AuthGuard],    
  }
];