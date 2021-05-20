import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  element: any;
  getRandRList() {
    throw new Error('Method not implemented.');
  }

  //baseUri:string = 'http://localhost:8080/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }


  createUser(user): Observable<any>{
    console.log("radha");
    let url = `${environment.mockApiUrl}addinterneluser`;
    console.log(url);
    return this.http.post(url, user)
    .pipe(
      catchError(this.errorMgmt)
    )
  }

  getUsers(){
    console.log("getting");
    let url = `${environment.mockApiUrl}getinternelusers`;
    console.log(url);
    return this.http.get(url)
    .pipe(
      catchError(this.errorMgmt)
    )
  }


  getUsersById(userID):Observable<any>{
    console.log("getting");
   // console.log(UserID);
    let url = `${environment.mockApiUrl}getuserdetailsbyid`;
    
    return this.http.post<any>(url,
        {UserID:userID})
        .pipe(catchError(this.errorMgmt));
  }


  createroles(data): Observable<any>{
    console.log("krishna");
    let url = `${environment.mockApiUrl}addwebroles`;
    console.log(url);
    return this.http.post(url,data)
    .pipe(
      catchError(this.errorMgmt)
    )
  }

  getroles(){
    console.log("getwebroles");
    let url = `${environment.mockApiUrl}getwebroles`;
    console.log(url);
    return this.http.post(url,null)
    .pipe(
      catchError(this.errorMgmt)
    )
  }

  getRolesByTeamAndDepartment(obj: any){
    console.log("getwebrolesbyteamanddepartment");
    let url = `${environment.mockApiUrl}getwebrolesbyteamanddepartment`;
    console.log(url);
    return this.http.post(url,obj)
    .pipe(
      catchError(this.errorMgmt)
    )
  }

  getTeamsByDepartment(obj:any){
    console.log("Getting Teams By DepartmentID");
    let url = `${environment.mockApiUrl}getteamsbydepartment`;
    console.log(url);
    return this.http.post(url,obj)
    .pipe(
      catchError(this.errorMgmt)
    )
  }

  adddepartments(data): Observable<any>{
    console.log("krishna");
    let url = `${environment.mockApiUrl}adddepartments`;
    console.log(url);
    return this.http.post(url,data)
    .pipe(
      catchError(this.errorMgmt)
    )
    
  }
  

  getdepartments(){
    console.log("getdepartments");
    let url = `${environment.mockApiUrl}getdepartments`;
    console.log(url);
    return this.http.get(url);  
  }

  addteams(data): Observable<any>{
    console.log("krishna");
    let url = `${environment.mockApiUrl}addteams`;
    console.log(url);
    return this.http.post(url,data)
    .pipe(
      catchError(this.errorMgmt)
    )
  }

  getteams(){
    console.log("getteams service");
    let url = `${environment.mockApiUrl}getteams`;
    console.log(url);
    return this.http.post(url,null)
    .pipe(
      catchError(this.errorMgmt)
    )
  }

  LoggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  
  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


  getRiders(){
    console.log("getriders");
    let url = `${environment.mockApiUrl}webgetriders`;
    console.log(url);
    return this.http.post(url,null)
    .pipe(
      catchError(this.errorMgmt)
    )
  }

  getcustomers(){
    console.log("getting Customers");
    let url= `${environment.mockApiUrl}webgetriders/webusers`;
    console.log(url);
    return this.http.post(url,null)
    .pipe(
      catchError(this.errorMgmt)
    )
  }  
}
