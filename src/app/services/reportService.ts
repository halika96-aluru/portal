import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  baseUri:string = `${environment.baseApiUrl}reports/`;
  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

   }

   getReports(): Observable<any>{
    return this.http.get<any>( this.baseUri + "getReports");
   }

   getUserReports(username): Observable<any>{
    return this.http.get<any>( this.baseUri + "getUserReports/"+ username);
   }
}
