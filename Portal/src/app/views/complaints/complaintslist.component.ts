import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  tokenID: number;
  requestID: number;
  _id: string;
  riderdetails: string;
  Category: any;
  Complaint: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {tokenID: 11122, _id: 'kalyan', requestID: 89085, riderdetails:'raju', Category: 'randr', Complaint:'pending' },
  {tokenID: 16342, _id: 'phanny', requestID: 36570, riderdetails:'karthik', Category: 'wooz', Complaint:'pending' },
  {tokenID: 53423, _id: 'rajji', requestID: 57465, riderdetails:'naveen', Category: 'wooz', Complaint:'completed' },
  {tokenID: 74867, _id: 'ramu', requestID: 11343, riderdetails:'geevan', Category: 'randr', Complaint:'pending' },
  
  
];

@Component({
  selector: 'app-complaintslist',
  templateUrl: './complaintslist.component.html',
  styleUrls: ['./complaintslist.component.scss']
})
export class ComplaintslistComponent implements OnInit {

  displayedColumns: string[] = ['tokenID', 'requestID', '_id','riderdetails', 'Category', 'Complaint', 'view'];
  Complaints = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit() {
  }

}
