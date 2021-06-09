import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

   }

   getRequests(): Observable<any>{
    return this.http.get<any>("https://quj8scqmf4.execute-api.us-west-2.amazonaws.com/Dev/getrequets",
    {});
   }

   getRequestDetails(_Id){
    return this.http.post<any>("https://quj8scqmf4.execute-api.us-west-2.amazonaws.com/Dev/getrequestdetailscarwash",
    {OrderID:_Id});
  }
}
