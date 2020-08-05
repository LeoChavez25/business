import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  apiURL = 'https://y2nzd9wkr8.execute-api.us-west-2.amazonaws.com/alpha/';
  localURL='https://localhost:4444/';
  
  httpOptions ={
    headers: new HttpHeaders({
      'Content-type':'application/json'
     }),
   }
  
     constructor(private http:HttpClient) { }
  
     getUsers(): Observable<User>{
       return this.http.get<User>(this.apiURL + 'users')
       .pipe(retry(1), catchError(this.errorHandler)
       );
     }
  
     getUser(id): Observable<User>{
       return this.http.get<User>(this.apiURL + 'user/' + id)
       .pipe(retry(1), catchError(this.errorHandler));
     }

     postUser(jsonData): Observable<User>{
       return this.http.post<User>(this.apiURL + 'user', jsonData, this.httpOptions)
       .pipe(retry(1), catchError(this.errorHandler));
     }

     putUser(id, jsonData): Observable<User>{
      return this.http.put<User>(this.localURL + 'user/' + id + '/edit', jsonData, this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandler));
    }

    deleteUser(id): Observable<User>{
      return this.http.delete<User>(this.apiURL + 'user'+id+'/delete')
      .pipe(retry(1), catchError(this.errorHandler));
    }
  
     errorHandler(error){
       let errorMessage = '';
  
       if (error.error instanceof ErrorEvent){
         //Error-client
         errorMessage = error.error.message;
       }
       else{
         //Error-server
         errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
       }
       console.log(errorMessage);
       return throwError(errorMessage);
     }
  
   }


