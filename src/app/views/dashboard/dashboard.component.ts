import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  DCBT : Number;
  DCBH : Number;
  VRT : Number;
  EVC : Number;
  AEIS : Number;
  AMTC : Number;
  TVHW : Number;
  TVTS : Number;
 
  constructor() { }

  ngOnInit() {
    this.LoadValues();
  }

  LoadValues(){
    this.DCBT = 120;
    this.DCBH = 100;
    this.VRT = 90;
    this.EVC = 65;
    this.AEIS = 23;
    this.AMTC = 45;
    this.TVHW = 90;
    this.TVTS = 29;
  }

}
