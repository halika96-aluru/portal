import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsListComponent } from '../reports-list/reports-list.component';
import { ReportsComponent } from './reports/reports.component';
import { SharedModule } from '../../../shared/shared.module';
import { DisplayReportComponent } from './display-report/display-report.component';


@NgModule({
  declarations: [ReportsListComponent, ReportsComponent, DisplayReportComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReportsRoutingModule
  ],
  exports: [ReportsListComponent]
})
export class ReportsModule { }
