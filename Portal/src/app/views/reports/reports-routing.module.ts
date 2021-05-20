import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsListComponent } from '../reports-list/reports-list.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path: '', 
    data: {title: 'Reports'},

    children: [
      {
        path: 'list',
        component: ReportsListComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
