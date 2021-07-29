import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { DepartmentsListComponent } from '../departments/departments-list/departments-list.component';
import { SharedModule } from '../../../../shared/shared.module';

import { ReactiveFormsModule } from '@angular/forms';
import { UserRolesComponent } from '../user-roles/user-roles.component';
import { AddUserrolesComponent } from '../add-userroles/add-userroles.component';
import { RolesAndPermissionsComponent } from '../roles-and-permissions/roles-and-permissions.component';
import { AdminUserRoleTypesComponent } from '../admin-user-role-types/admin-user-role-types.component';
import { ReportAccessLevelComponent } from '../report-access-level/report-access-level.component';
import { SettingsComponent } from './settings.component';
import { UserRoleSettingsComponent } from './user-role-settings/user-role-settings.component';
import {RolesPermissionsDetailsComponent  } from '../roles-permissions-details/roles-permissions-details.component';



@NgModule({

  declarations: [
    SettingsComponent,    
    UserRolesComponent,
    AddUserrolesComponent,   
    UserRolesComponent,
    AddUserrolesComponent,
    RolesAndPermissionsComponent,
    AdminUserRoleTypesComponent,
    ReportAccessLevelComponent,
    UserRoleSettingsComponent,
    RolesPermissionsDetailsComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    SettingsRoutingModule
  ],
  entryComponents: [UserRoleSettingsComponent]
})
export class SettingsModule { }
