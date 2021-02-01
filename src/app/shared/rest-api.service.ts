import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Enquiry } from './enquiry';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  // Define API
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch enquirys list
  getEnquirys(): Observable<Enquiry> {
    return this.http.get<Enquiry>(this.apiURL + '/enquirys')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch enquiry
  getEnquiry(id): Observable<Enquiry> {
    return this.http.get<Enquiry>(this.apiURL + '/enquirys/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create enquiry
  createEnquiry(enquiry): Observable<Enquiry> {
    return this.http.post<Enquiry>(this.apiURL + '/enquirys', JSON.stringify(enquiry), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update enquiry
  updateEnquiry(id, enquiry): Observable<Enquiry> {
    return this.http.put<Enquiry>(this.apiURL + '/enquirys/' + id, JSON.stringify(enquiry), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete enquiry
  deleteEnquiry(id){
    return this.http.delete<Enquiry>(this.apiURL + '/enquirys/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}