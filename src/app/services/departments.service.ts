import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Department } from '../views/settings/departments/models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  baseApiUrl:string = `${environment.baseApiUrl}departments/`;
  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

   }

   getDepartments(): Observable<Department[]>{
    return this.http.get<Department[]>( this.baseApiUrl + "getDepartments");
   }

   addDepartment(model: Department): Observable<any>{
    return this.http.post<any>( this.baseApiUrl + "addDepartment", model);
   }

}
