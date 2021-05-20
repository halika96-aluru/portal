import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsListComponent } from '../reports-list/reports-list.component';
import { ReportsComponent } from './reports/reports.component';


@NgModule({
  declarations: [ReportsListComponent, ReportsComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ],
  exports: [ReportsListComponent]
})
export class ReportsModule { }
