import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from '../departments/add-department/add-department.component';
import { AddUserrolesComponent } from '../add-userroles/add-userroles.component';
import { SettingsComponent } from './settings.component';
import { UserRoleSettingsComponent } from './user-role-settings/user-role-settings.component';
import { AdminUserRoleTypesComponent } from '../admin-user-role-types/admin-user-role-types.component';
import { RolesPermissionsDetailsComponent } from '../roles-permissions-details/roles-permissions-details.component';


const routes: Routes = [

  {
    path: '', data: { title: 'Settings' }, component: SettingsComponent,
    children: [
      { path: 'manageuserroles', data: { title: 'User Role Types' }, component: AdminUserRoleTypesComponent },
      { path: 'adduserroles', data: { title: 'Add UserRoles' }, component: AddUserrolesComponent },     
      { path: '', data: { title: 'Roles and Permissions' }, component: UserRoleSettingsComponent },
      { path: 'rolespermissiondetails', component: RolesPermissionsDetailsComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
