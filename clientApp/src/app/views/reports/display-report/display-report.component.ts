import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { report } from 'process';

@Component({
  selector: 'app-display-report',
  templateUrl: './display-report.component.html',
  styleUrls: ['./display-report.component.scss']
})
export class DisplayReportComponent implements OnInit {

  reportId = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reportId = <any>(this.route.snapshot.paramMap.get('id'));
  }

}
