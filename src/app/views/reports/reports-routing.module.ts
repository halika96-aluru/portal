import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsListComponent } from '../reports-list/reports-list.component';
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
