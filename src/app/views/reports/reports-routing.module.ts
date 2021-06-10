import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmbeddedReportComponent } from '../embedded-report/embedded-report.component';
import { ReportsListComponent } from '../reports-list/reports-list.component';
import { DisplayReportComponent } from './display-report/display-report.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path: '', 
    data: {title: 'Reports'},
    component: ReportsComponent,

    children: [
      {
        path: 'list',
        data: {title: 'List'},
        component: ReportsListComponent,        
      },
      {
        path: 'details/:id',
        data: {title: 'details'},
        component: DisplayReportComponent,
      },
      {
        path: '', 
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '', 
    redirectTo: '/reports',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
