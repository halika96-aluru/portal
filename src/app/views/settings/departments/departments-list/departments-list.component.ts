import { Component, OnInit } from '@angular/core';
import {AfterViewInit,  ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

export interface Departments {
  departmentPrefix:string,
  departmentName:string,
  description: string,
  admin: string,
  createdOn: string,
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: any[] = [
  { departmentName: 'abx', position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  { departmentName: 'abx', position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  { departmentName: 'abx', position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  { departmentName: 'abx', position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  { departmentName: 'abx', position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  { departmentName: 'abx', position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  { departmentName: 'abx', position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  { departmentName: 'abx', position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  { departmentName: 'abx', position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  { departmentName: 'abx', position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.scss']
})
export class DepartmentsListComponent implements OnInit {


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  constructor(private router: Router) { }
 

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  
}
