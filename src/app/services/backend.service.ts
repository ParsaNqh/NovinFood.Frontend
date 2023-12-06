import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  securityAPI = 'http://localhost:5042/'
  restaurantAPI = 'http://localhost:5285/'
  constructor(public http: HttpClient) { }
  myPost(url: string, data: any) {
    let header = {};
    let token = sessionStorage.getItem('token');
    if (sessionStorage.getItem('token')) {
      header = { 'Authorization': 'Bearer ' + token }
    }
    else if (localStorage.getItem('token')) {
      header = { 'Authorization': 'Bearer ' + token }
    }
    return this.http.post(url, data, { headers: header })
      .pipe(
        catchError(error => this.handleError(error))
      )
  }
  myGet(url: string,) {
    let header = {};
    let token = sessionStorage.getItem('token');
    if (sessionStorage.getItem('token')) {
      header = { 'Authorization': 'Bearer ' + token }
    }
    else if (localStorage.getItem('token')) {
      header = { 'Authorization': 'Bearer ' + token }
    }
    return this.http.get(url, { headers: header })
      .pipe(
        catchError(error => this.handleError(error))
      )
  }
  handleError(error: any) {
    if (error.status == 500) {
      return of({ serverError: error.error.error });
    }
    return of({ serverError: 'خطای برقراری ارتباط با سرور' });


  }
}
