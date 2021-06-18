import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { ReportService } from '../../services/reportService';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportsListComponent implements OnInit {
  reports: any = [];
  constructor(private reportService: ReportService, private router: Router, private authService: AuthenticationService,) { }

  ngOnInit(): void {
    this.getReprots();
  }

  getReprots() {
    this.reportService.getUserReports(this.authService.user.username).subscribe( res => {
      if(res && res.length){
        this.reports = res;
      }
    },
    err => {
      console.log("err", err);
    })
  }

  loadReport(reportId){
    this.router.navigate(['/reports/details', reportId])
  }


}
