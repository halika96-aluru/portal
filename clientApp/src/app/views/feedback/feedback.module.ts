import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  declarations: [
    FeedbacksComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule
  ]
})
export class FeedbackModule { }
