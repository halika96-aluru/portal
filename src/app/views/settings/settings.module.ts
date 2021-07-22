import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';

import { SettingsComponent } from './settings/settings.component';
import { DepartmentsListComponent } from './departments/departments-list/departments-list.component';
import { SharedModule } from '../../../shared/shared.module';
import { DepartmentsComponent } from './departments/departments.component';
import { AddDepartmentComponent } from './departments/add-department/add-department.component';
import { DepartmentStatsComponent } from './departments/department-stats/department-stats.component';
import { DepartmentSettingsComponent } from './departments/department-settings/department-settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRolesComponent } from './departments/user-roles/user-roles.component';
import { AddUserrolesComponent } from './departments/add-userroles/add-userroles.component';



@NgModule({
  declarations: [
    DepartmentStatsComponent,
    SettingsComponent,
    DepartmentsListComponent,
    DepartmentsComponent,
    AddDepartmentComponent,
    DepartmentSettingsComponent,
    UserRolesComponent,
    AddUserrolesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    SettingsRoutingModule
  ],
  entryComponents: [DepartmentsListComponent]
})
export class SettingsModule { }
