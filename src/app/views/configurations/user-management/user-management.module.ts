import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { DepartmentStatsComponent } from '../departments/department-stats/department-stats.component';
import { DepartmentsComponent } from '../departments/departments.component';
import { DepartmentsListComponent } from '../departments/departments-list/departments-list.component';
import { AddDepartmentComponent } from '../departments/add-department/add-department.component';
import { DepartmentSettingsComponent } from '../departments/department-settings/department-settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { UserManagementComponent } from './user-management/user-management.component';


@NgModule({
  declarations: [
    DepartmentStatsComponent,    
    DepartmentsListComponent,
    DepartmentsComponent,
    AddDepartmentComponent,
    DepartmentSettingsComponent,        
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    UserManagementRoutingModule
  ],
  entryComponents: [DepartmentsListComponent] 
})
export class UserManagementModule { }
