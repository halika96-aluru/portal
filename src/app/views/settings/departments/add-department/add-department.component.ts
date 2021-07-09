import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { DepartmentsService } from '../../../../services/departments.service';
import { Department } from '../models/department';

const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9\.\, \( \) \-]+/;
const ALPHA_NUMERIC_VALIDATION_ERROR = { alphaNumericError: 'only alpha numeric values are allowed' }
@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {

  model: Department = <Department>{};
  departmentForm: FormGroup;
  isValid = false;
  constructor(private router: Router, private departmentService: DepartmentsService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.createForm();
    this.departmentForm.valueChanges.subscribe(c => {

    })    
  }

  createForm():void {    
    this.departmentForm = new FormGroup({
      departmentId: new FormControl(''),
      departmentPrefix: new FormControl('', [Validators.required,  Validators.minLength(3), this.alphaNumericValidator]),
      departmentName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9\.\, \-\']+'), this.alphaNumericValidator]),
      departmentDescription: new FormControl(''),      
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    console.log(this.departmentForm.get(controlName));
    return this.departmentForm.get(controlName).hasError(errorName);
  }

  addDepartment() {    
    if(this.departmentForm.invalid){
      return;
    }
    this.departmentService.addDepartment(this.departmentForm.value).subscribe(res => {
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
    this.router.navigate(['/settings/departments']);
  }



alphaNumericValidator(control: FormControl): ValidationErrors | null {
    return ALPHA_NUMERIC_REGEX.test(control.value) ? null : ALPHA_NUMERIC_VALIDATION_ERROR;
}

}
