import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { userRoles } from '../views/configurations/departments/models/userRoles';


@Injectable({
  providedIn: 'root'
})
export class UserRolesService {

  baseApiUrl: string = `${environment.baseApiUrl}userRoles/`;
  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

  }

  getUserRoles(): Observable<userRoles[]> {
    return this.http.get<userRoles[]>(this.baseApiUrl + "getUserRoles");
  }

  getAdminRoleTypess(): Observable<userRoles[]> {
    return this.http.get<userRoles[]>(this.baseApiUrl + "getAdminRoleTypes");
  }
  

  addUserRole(model: userRoles): Observable<any> {
    return this.http.post<any>(this.baseApiUrl + "addUserRole", model);
  }

  updateUserRole(model: userRoles): Observable<any> {
    return this.http.put<any>(this.baseApiUrl + "updateUserRole", model);
  }

  deleteUserRole(model: userRoles): Observable<any> {
    return this.http.delete<any>(this.baseApiUrl + `deleteUserRole/ ${model.accessLevelId}`);
  }

}