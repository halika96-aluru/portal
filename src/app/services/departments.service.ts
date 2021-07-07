import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

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

   getDepartments(): Observable<any>{
    return this.http.get<any>( this.baseApiUrl + "getDepartments");
   }

}
