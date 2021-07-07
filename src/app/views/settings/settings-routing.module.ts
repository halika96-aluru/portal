import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'departments',  data: {title: 'Departments'}, component: DepartmentsComponent },
  { path: '', redirectTo: 'departments', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
