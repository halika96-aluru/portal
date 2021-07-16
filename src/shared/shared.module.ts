import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { ConfirmDialogComponent } from '../app/shared/confirm-dialog/confirm-dialog.component';
import { EmbeddedReportComponent } from '../app/views/embedded-report/embedded-report.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MdePopoverModule } from '@material-extended/mde';
import { MatDialogModule, MatListModule, MatButtonModule, MatIconModule, MatPaginatorModule, MatSnackBarModule, MatOptionModule, MatSelectModule, MatCheckboxModule, MatSortModule, MatCardModule, MatButtonToggleModule, MatTableModule, MatTabsModule, MatCommonModule, MatInputModule, MatCard, MatSlideToggleModule, MatDividerModule } from '@angular/material';
//import { MatDatepickerModule,MatNativeDateModule,MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [JwPaginationComponent, ConfirmDialogComponent, EmbeddedReportComponent],
  imports: [
    CommonModule,
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
    MatCheckboxModule,
    MatSnackBarModule,
    MatListModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatDividerModule,
    MdePopoverModule
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatFormFieldModule,
    // MatInputModule
  ],
  exports: [
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
    MatCheckboxModule,
    MatSnackBarModule,
    MatListModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatDividerModule,
    MdePopoverModule
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatFormFieldModule,
    // MatInputModule    
  ],
  entryComponents: [ConfirmDialogComponent]
})
export class SharedModule { }
