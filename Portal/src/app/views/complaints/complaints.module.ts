import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplaintsRoutingModule } from './complaints-routing.module';
import { ViewComponent } from './view.component';
import { SharedModule } from '../../../shared/shared.module';
import { ComplaintslistComponent } from './complaintslist.component';
import { MatCardModule, MatFormFieldModule, MatGridListModule, MatLabel, MatTabGroup, MatTableModule, MatTabsModule } from '@angular/material';



@NgModule({
  declarations: [ViewComponent, ComplaintslistComponent, ],
  imports: [
    CommonModule,
    ComplaintsRoutingModule,
    SharedModule,
    MatTableModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule
  ]
})
export class ComplaintsModule { }
