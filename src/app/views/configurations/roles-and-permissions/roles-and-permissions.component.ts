import { Component, OnInit } from '@angular/core';
import {AfterViewInit,  ViewChild} from '@angular/core';
import { MatDialog, MatDialogRef, MatPaginator, MatSnackBar } from '@angular/material';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { Router } from '@angular/router';
import { UserRolesService } from '../../../services/userRoles.service';
import { userRoles } from '../departments/models/userRoles';

@Component({
  selector: 'app-roles-and-permissions',
  templateUrl: './roles-and-permissions.component.html',
  styleUrls: ['./roles-and-permissions.component.scss']
})
export class RolesAndPermissionsComponent implements OnInit {

  displayedColumns: string[] = ['adminRoleId','adminRoleName', 'adminRoleDescription', 'roleType', 'assignedUsers'];
  userRoles: userRoles[] = [];
  dataSource: MatTableDataSource<userRoles> = new MatTableDataSource(this.userRoles);



  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private userRolesService: UserRolesService,private _snackBar: MatSnackBar) { 
  }

  

  ngOnInit(): void {

    this.loadUserRoles();

  }
    loadUserRoles(){
      this.userRolesService.getAdminRoles().subscribe(res => {
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
     this.router.navigate(['/settings/adduserroles']);
  }

  manageUserRoles(){
    this.router.navigate(['/settings/manageuserroles']);
 }

  editUserRoles(userRoles: userRoles){
    this.router.navigateByUrl('/settings/adduserroles', { state: userRoles });
  }
  rolePermissions(userRoles: userRoles){
    this.router.navigateByUrl('/settings/RolesPermissionsDetailsComponent', { state: userRoles });
  }
 


}
