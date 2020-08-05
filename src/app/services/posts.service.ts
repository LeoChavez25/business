//  import { Injectable } from '@angular/core';
//  import {HttpClient, HttpHeaders} from '@angular/common/http';
//  import { Observable, throwError } from 'rxjs';
//  import {retry, catchError} from 'rxjs/operators';
//  import { Post } from '../models/post';

//  @Injectable({
//    providedIn: 'root'
//  })
//  export class PostsService {

//   baseURL = 'https://jsonplaceholder.typicode.com';
//   apiURL = '';

//    httpOptions ={
//      headers: new HttpHeaders({
//        'Content-type':'application/json; charset=UTF-8'
//      }),
//    }

//    constructor(private http:HttpClient) { }

//    getPosts(): Observable<Post>{
//      return this.http.get<Post>(this.baseURL+'/posts')
//      .pipe(retry(1), catchError(this.errorHandler)
//      );
//    }

//    postPost(jsonData): Observable<Post>{
//      return this.http.post<Post>(this.baseURL + '/posts', jsonData, this.httpOptions)
//      .pipe(retry(1), catchError(this.errorHandler));
//    }

//    errorHandler(error){
//      let errorMessage = '';

//      if (error.error instanceof ErrorEvent){
//        //Error-client
//        errorMessage = error.error.message;
//      }
//      else{
//        //Error-server
//        errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
//      }
//      console.log(errorMessage);
//      return throwError(errorMessage);
//    }

//  }
