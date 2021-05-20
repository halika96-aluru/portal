import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsRoutingModule } from './admins-routing.module';
import { AdminComponent } from './admin/admin.component';
import { DepartmentsComponent } from './departments/departments.component';


@NgModule({
  declarations: [
    AdminComponent,
    DepartmentsComponent
  ],
  imports: [
    CommonModule,
    AdminsRoutingModule
  ]
})
export class AdminsModule { }
