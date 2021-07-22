import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './departments/add-department/add-department.component';
import { AddUserrolesComponent } from './departments/add-userroles/add-userroles.component';
import { DepartmentSettingsComponent } from './departments/department-settings/department-settings.component';
import { DepartmentsComponent } from './departments/departments.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
 
  {
    path: '', data: { title: 'Settings' }, component: SettingsComponent,
    children: [     
      { path: 'departments', data: { title: 'Departments' }, component: DepartmentsComponent, 
        children: [         
          { path: 'adddepartment', data: { title: 'Add Department' }, component: AddDepartmentComponent },
          { path: 'adduserroles', data: { title: 'Add UserRoles' }, component: AddUserrolesComponent },
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
export class SettingsRoutingModule { }
