import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminRoutes } from './admin.route';

@NgModule({
    imports: [ RouterModule.forChild(AdminRoutes) ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}