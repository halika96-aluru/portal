import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { ApiService } from '../src/app/services/api.service'; 
import { AuthenticationService } from './app/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(
    private _apiService : ApiService,
    private _router : Router,
    private authService: AuthenticationService
 ){}

  canActivate() : boolean{
    if(this._apiService.LoggedIn()){
      return true
    }
    else{
      this.authService.login();
      return false;
    }
  }
}
