import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';

const routes: Routes = [
  {path:'',  data: {title: 'Feedback'}, component: FeedbackComponent, children: [
    {
      path: 'list',
      data: {title: 'List'},
      component: FeedbacksComponent,
    },
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }
