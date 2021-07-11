import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DepartmentsService } from '../../../../services/departments.service';
import { Department } from '../models/department';


@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.scss']
})
export class DepartmentsListComponent implements OnInit {


  displayedColumns: string[] = ['departmentId', 'departmentPrefix', 'departmentName', 'departmentDescription', 'admins', 'createdDate', 'action'];
  departments: Department[] = [];
  // dataSource = new MatTableDataSource(this.departments);
  dataSource: MatTableDataSource<Department> = new MatTableDataSource(this.departments);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private departmentsService: DepartmentsService) { }


  ngOnInit(): void {
    this.departmentsService.getDepartments().subscribe(res => {
      if (res.length) {
        this.departments = res;
        this.dataSource = new MatTableDataSource(this.departments);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  }

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addDepartment() {
    this.router.navigate(['/settings/departments/adddepartment']);
  }

  editDepartment(department: Department){
    this.router.navigateByUrl('/settings/departments/adddepartment', { state: department });
  }

  deleteDepartment(department: Department){


    
    this.router.navigateByUrl('/settings/departments/adddepartment', { state: department });
  }

  truncateAdminsDisplay(adminsStr: string) {

    if (adminsStr) {

      var adminusers = adminsStr.split(',');

      if (adminusers.length === 1) {
        return adminusers[0];
      } else {
        return adminusers[0] + ' +' + (adminusers.length - 1);
      }
    }
  }
}
