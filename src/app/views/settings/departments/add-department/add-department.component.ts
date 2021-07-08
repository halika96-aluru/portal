import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { DepartmentsService } from '../../../../services/departments.service';
import { Department } from '../models/department';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {

  model: Department = <Department>{};
  departmentForm: FormGroup;
  isValid = false;
  constructor(private departmentService: DepartmentsService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.createForm();
    this.departmentForm.valueChanges.subscribe(c => {

    })
  }

  createForm():void {    
    this.departmentForm = new FormGroup({
      departmentId: new FormControl(''),
      departmentPrefix: new FormControl('', [Validators.required,  Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9\.\, \-\']+')]),
      departmentName: new FormControl('', [Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9\.\, \-\']+')]),
      departmentDescription: new FormControl(''),      
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.departmentForm.get(controlName).hasError(errorName);
  }

  addDepartment() {
    if(this.departmentForm.invalid){
      return;
    }
    this.departmentService.addDepartment(this.model).subscribe(res => {
      this._snackBar.open('Department added successfully', '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3000,
      });
    },
      err => {
        this._snackBar.open('Error in saving department', '', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 3000,
        });
      }
    );
  }

  cancel(){
    
  }

}
