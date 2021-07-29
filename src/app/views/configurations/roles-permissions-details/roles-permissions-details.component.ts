import { Component, OnInit } from '@angular/core';
import {AfterViewInit,  ViewChild} from '@angular/core';
import { MatDialog, MatDialogRef, MatPaginator, MatSnackBar } from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { Router } from '@angular/router';

import { userRoles } from '../departments/models/userRoles';

@Component({
  selector: 'app-roles-permissions-details',
  templateUrl: './roles-permissions-details.component.html',
  styleUrls: ['./roles-permissions-details.component.scss']
})
export class RolesPermissionsDetailsComponent implements OnInit {
  displayedColumns: string[] = ['adminRoleId','adminRoleName'];
  userRoles: userRoles[] = [];
  dataSource: MatTableDataSource<userRoles> = new MatTableDataSource(this.userRoles);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

 constructor(private router: Router, private _snackBar: MatSnackBar) { 
  }


  ngOnInit(): void {
  }

}
