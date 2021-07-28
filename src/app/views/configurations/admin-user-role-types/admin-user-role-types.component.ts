import { Component, OnInit } from '@angular/core';
import {AfterViewInit,  ViewChild} from '@angular/core';
import { MatDialog, MatDialogRef, MatPaginator, MatSnackBar } from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { Router } from '@angular/router';
import { UserRolesService } from '../../../services/userRoles.service';
import { userRoles } from '../departments/models/userRoles';

export interface UserRoles {
 
}

@Component({
  selector: 'app-admin-user-role-types',
  templateUrl: './admin-user-role-types.component.html',
  styleUrls: ['./admin-user-role-types.component.scss']
})
export class AdminUserRoleTypesComponent implements OnInit {

  displayedColumns: string[] = ['adminRoleTypeId' , 'adminRoleTypeName', 'entity','action'];
  userRoles: userRoles[] = [];
  dataSource: MatTableDataSource<userRoles> = new MatTableDataSource(this.userRoles);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private userRolesService: UserRolesService,private _snackBar: MatSnackBar) { 
  }

  

  ngOnInit(): void {

    this.loadAdminRoleTypes();

  }
    loadAdminRoleTypes(){
      this.userRolesService.getAdminRoleTypess().subscribe(res => {
        if (res.length) {
          this.userRoles = res;
          this.dataSource = new MatTableDataSource(this.userRoles);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      })
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  addUserRoles(){
     this.router.navigate(['/settings/departments/adduserroles']);
  }

  editUserRoles(userRoles: userRoles){
    this.router.navigateByUrl('/settings/departments/adduserroles', { state: userRoles });
  }

}
