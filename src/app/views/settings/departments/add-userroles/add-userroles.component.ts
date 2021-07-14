import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog,MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { UserRolesService } from '../../../../services/userRoles.service';
import { userRoles } from '../models/userRoles';


const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9\.\, \( \) \-]+/;
const ALPHA_NUMERIC_VALIDATION_ERROR = { alphaNumericError: 'only alpha numeric values are allowed' }
@Component({
  selector: 'app-add-userroles',
  templateUrl: './add-userroles.component.html',
  styleUrls: ['./add-userroles.component.scss']
})
export class AddUserrolesComponent implements OnInit {

  model: userRoles=<userRoles>{};
  userRolesForm: FormGroup;
  isValid = false;
  constructor(private router: Router, private userRolesService: UserRolesService, private dialog: MatDialog,  private _snackBar: MatSnackBar) {     
    if(this.router.getCurrentNavigation().extras.state) {
      this.model = <userRoles>this.router.getCurrentNavigation().extras.state;
    }
  }

  ngOnInit(): void {
    this.createForm();           
  }

  createForm():void {    
    this.userRolesForm = new FormGroup({
      accessLevelId: new FormControl(''),
      accessLevelName: new FormControl('', [Validators.required,  Validators.minLength(2), Validators.pattern('^[a-zA-Z0-9\.\, \-\']+'),this.alphaNumericValidator]),
      description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9\.\, \-\']+'), this.alphaNumericValidator]),
      isActive: new FormControl(''),  
      canView:new FormControl(''),
      canApprove:new FormControl(''),
      canShare:new FormControl(''),
      canSubscribe:new FormControl('')
    });
    if(this.model.accessLevelId){
      this.userRolesForm.patchValue(this.model);
    }
  }

  public hasError = (controlName: string, errorName: string) => {    
    return this.userRolesForm.get(controlName).hasError(errorName);
  }

  addUserRole() {    
    if(this.userRolesForm.invalid){
      return;
    }
    this.userRolesService.addUserRole(this.userRolesForm.value).subscribe(res => {
      this.router.navigate(['/settings/departments']);
      this._snackBar.open('User Roles added successfully', '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3000,
      });
    },
      err => {
        this._snackBar.open('Error in saving User Roles', '', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 3000,
        });
      }
    );
  }

  updateUserRole() {    
    if(this.userRolesForm.invalid){
      return;
    }
    this.userRolesService.updateUserRole(this.userRolesForm.value).subscribe(res => {
      this.router.navigate(['/settings/departments']);
      this._snackBar.open('User Roles updated successfully', '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3000,
      });
    },
      err => {
        this._snackBar.open('Error in updated User Roles', '', {
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
