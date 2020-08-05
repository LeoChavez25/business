// import { Injectable } from '@angular/core';
// import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { retry, catchError } from 'rxjs/operators';
// import { User } from '../models/users';
// import { Employee } from '../models/employees';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiserviceService {

//   apiURL = 'https://y2nzd9wkr8.execute-api.us-west-2.amazonaws.com/alpha/';
//   localURL='https://localhost:4444/';
  
//   httpOptions ={
//     headers: new HttpHeaders({
//       'Content-type':'application/json'
//      }),
//    }
  
//      constructor(private http:HttpClient) { }
  
//      getEmployees(): Observable<Employee>{
//        return this.http.get<Employee>(this.apiURL + 'employees')import { Injectable } from '@angular/core';
// import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { retry, catchError } from 'rxjs/operators';
// import { User } from '../models/users';
// import { Employee } from '../models/employees';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiserviceService {

//   apiURL = 'https://y2nzd9wkr8.execute-api.us-west-2.amazonaws.com/alpha/';
//   localURL='https://localhost:4444/';
  
//   httpOptions ={
//     headers: new HttpHeaders({
//       'Content-type':'application/json'
//      }),
//    }
  
//      constructor(private http:HttpClient) { }
  
//      getEmployees(): Observable<Employee>{
//        return this.http.get<Employee>(this.apiURL + 'employees')
//        .pipe(retry(1), catchError(this.errorHandler)
//        );
//      }
  
//      getEmployee(id): Observable<Employee>{
//        return this.http.get<Employee>(this.apiURL + 'employee/' + id)
//        .pipe(retry(1), catchError(this.errorHandler));
//      }

//      postEmployee(jsonData): Observable<Employee>{
//        return this.http.post<User>(this.apiURL + 'employee', jsonData, this.httpOptions)
//        .pipe(retry(1), catchError(this.errorHandler));
//      }

//      putEmployee(id, jsonData): Observable<Employee>{
//       return this.http.put<User>(this.localURL + 'employee/' + id + '/edit', jsonData, this.httpOptions)
//       .pipe(retry(1), catchError(this.errorHandler));
//     }

//     deleteEmployee(id): Observable<Employee>{
//       return this.http.delete<User>(this.apiURL + 'employee'+id+'/delete')
//       .pipe(retry(1), catchError(this.errorHandler));
//     }
  
//      errorHandler(error){
//        let errorMessage = '';
  
//        if (error.error instanceof ErrorEvent){
//          //Error-client
//          errorMessage = error.error.message;
//        }
//        else{
//          //Error-server
//          errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
//        }
//        console.log(errorMessage);
//        return throwError(errorMessage);
//      }
  
//    }



//        .pipe(retry(1), catchError(this.errorHandler)
//        );
//      }
  
//      getEmployee(id): Observable<Employee>{
//        return this.http.get<Employee>(this.apiURL + 'employee/' + id)
//        .pipe(retry(1), catchError(this.errorHandler));
//      }

//      postEmployee(jsonData): Observable<Employee>{
//        return this.http.post<User>(this.apiURL + 'employee', jsonData, this.httpOptions)
//        .pipe(retry(1), catchError(this.errorHandler));
//      }

//      putEmployee(id, jsonData): Observable<Employee>{
//       return this.http.put<User>(this.localURL + 'employee/' + id + '/edit', jsonData, this.httpOptions)
//       .pipe(retry(1), catchError(this.errorHandler));
//     }

//     deleteEmployee(id): Observable<Employee>{
//       return this.http.delete<User>(this.apiURL + 'employee'+id+'/delete')
//       .pipe(retry(1), catchError(this.errorHandler));
//     }
  
//      errorHandler(error){
//        let errorMessage = '';
  
//        if (error.error instanceof ErrorEvent){
//          //Error-client
//          errorMessage = error.error.message;
//        }
//        else{
//          //Error-server
//          errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
//        }
//        console.log(errorMessage);
//        return throwError(errorMessage);
//      }
  
//    }


