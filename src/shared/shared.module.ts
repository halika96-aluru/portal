import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JwPaginationComponent} from 'jw-angular-pagination';
import { ConfirmDialogComponent } from '../app/shared/confirm-dialog/confirm-dialog.component';
import { EmbeddedReportComponent } from '../app/views/embedded-report/embedded-report.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MatButtonModule, MatIconModule, MatCardModule, MatButtonToggleModule, MatTableModule, MatTabsModule, MatOptionModule,
  MatSelectModule,MatCommonModule, MatInputModule, MatCheckboxModule,MatSlideToggleModule,MatSnackBarModule, MatDividerModule} from '@angular/material';
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
    MatOptionModule,
   MatSelectModule,
   MatCheckboxModule,
   MatSlideToggleModule,
   MatSnackBarModule,
   MatDividerModule,
       // MatDatepickerModule,
    // MatNativeDateModule,
    // MatFormFieldModule,
    // MatInputModule    
  ],
  entryComponents:[ConfirmDialogComponent]
})
export class SharedModule { }
