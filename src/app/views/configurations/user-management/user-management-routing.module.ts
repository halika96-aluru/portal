import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from '../departments/add-department/add-department.component';
import { DepartmentSettingsComponent } from '../departments/department-settings/department-settings.component';
import { DepartmentsComponent } from '../departments/departments.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
 
  {
    path: '', data: { title: 'Settings' }, component: UserManagementComponent,
    children: [     
      { path: 'departments', data: { title: 'Departments' }, component: DepartmentsComponent, 
        children: [         
          { path: 'adddepartment', data: { title: 'Add Department' }, component: AddDepartmentComponent },       
          { path: '', data: { title: 'Department' }, component: DepartmentSettingsComponent },
        ]
      },    
      { path: '', redirectTo:'departments', pathMatch: 'full' },       
    ]
  },  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
