import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplaintslistComponent } from './complaintslist.component';
import { ViewComponent } from './view.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'complaints'
    },
    children: [
      {
        path: 'complaintslist',
        component: ComplaintslistComponent,
      },
      {    
        path: 'complaintslist/:id',
        component: ViewComponent ,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintsRoutingModule {}
