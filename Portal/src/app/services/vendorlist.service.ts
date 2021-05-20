import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendorlistService {

  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

   }

   vendorlist(categoryId): Observable<any>{
   return this.http.post<any>("https://quj8scqmf4.execute-api.us-west-2.amazonaws.com/Dev/getvendors", 
         {categoryID:categoryId});
  }

  getVendorDetails(_id){
    return this.http.post<any>("https://quj8scqmf4.execute-api.us-west-2.amazonaws.com/Dev/vendordetails",
        {vendorID:_id});
  }

  // getRequestDetails(RequestId): Observable<any>{
  //   return this.http.post<any>(" https://quj8scqmf4.execute-api.us-west-2.amazonaws.com/Dev/getrequestdetailscarwash",
  //       {RequestID:RequestId});
  // }

  getRecentOrder(UserId,RequestStatus): Observable<any>{
    return this.http.post<any>("https://quj8scqmf4.execute-api.us-west-2.amazonaws.com/Dev/getrecentorders",
       {UserID:UserId,Requeststatus:RequestStatus});
  }

  getPastOrder(UserId,RequestStatus): Observable<any>{
    return this.http.post<any>("https://quj8scqmf4.execute-api.us-west-2.amazonaws.com/Dev/getpastorders",
    {UserID:UserId,PastRequests:RequestStatus});
  }
  
  getStates(){
    console.log("getstates");
    let url = `${environment.mockApiUrl}getstates`;
    console.log(url);
    return this.http.get(url);
  }
}
