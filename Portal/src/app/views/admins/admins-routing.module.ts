import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminsModule } from './admins.module';
import { DepartmentsComponent } from './departments/departments.component';

const routes: Routes = [

  {path: 'departments', component: DepartmentsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsRoutingModule { }
