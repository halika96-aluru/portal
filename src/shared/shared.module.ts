import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JwPaginationComponent} from 'jw-angular-pagination';
import { ConfirmDialogComponent } from '../app/shared/confirm-dialog/confirm-dialog.component';
import { EmbeddedReportComponent } from '../app/views/embedded-report/embedded-report.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MatButtonModule, MatIconModule, MatPaginatorModule, MatOptionModule, MatSelectModule, MatSortModule,  MatCardModule, MatButtonToggleModule, MatTableModule, MatTabsModule, MatCommonModule, MatInputModule, MatCard } from '@angular/material';
//import { MatDatepickerModule,MatNativeDateModule,MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [JwPaginationComponent, ConfirmDialogComponent, EmbeddedReportComponent],
  imports: [
    CommonModule,   
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatFormFieldModule,
    // MatInputModule
  ],
  exports:[
    JwPaginationComponent,
    ConfirmDialogComponent,
    EmbeddedReportComponent,
    MatInputModule,
    MatCommonModule,
    MatTableModule,
    MatTabsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule, 
    MatSortModule,
    MatOptionModule, 
    MatSelectModule, 
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatFormFieldModule,
    // MatInputModule    
  ],
  entryComponents:[ConfirmDialogComponent]
})
export class SharedModule { }
