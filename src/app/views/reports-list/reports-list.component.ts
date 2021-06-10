import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportService } from '../../services/reportService';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportsListComponent implements OnInit {
  reports: any = [];
  constructor(private reportService: ReportService, private router: Router) { }

  ngOnInit(): void {
    this.getReprots();
  }

  getReprots() {
    this.reportService.getReportss().subscribe( res => {
      if(res && res.length){
        this.reports = res;
      }
    })
  }

  loadReport(reportId){
    this.router.navigate(['/reports/details', reportId])
  }


}
