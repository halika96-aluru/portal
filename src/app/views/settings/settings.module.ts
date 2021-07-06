import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { DepartmentStatsComponent } from './department-stats/department-stats.component';
import { SettingsComponent } from './settings/settings.component';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    DepartmentStatsComponent,
    SettingsComponent,
    DepartmentsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
