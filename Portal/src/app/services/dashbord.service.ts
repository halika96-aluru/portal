import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashbordService {

  //baseUri:string = 'http://localhost:8080/api/dashboard';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getDieselConsumptionReportByHourly(){
    let url = `${environment.mockApiUrl}dashboard/getDieselConsumptionReportByHourly`;
    console.log(url);
    return this.http.get(`${url}`);
  }
  
}
