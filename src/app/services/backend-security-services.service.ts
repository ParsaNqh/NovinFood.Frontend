import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendSecurityServicesService extends BackendService {

  login(username: string, password: string) {
    return this.myPost(this.securityAPI + 'login', { username: username, password: password })
  };
  adminLogin(username: string, password: string) {
    return this.myPost(this.securityAPI + 'adminlogin', { username: username, password: password })
  };
  register(username: string, password: string, type: Number, fullname: string, email: string, city: string) {
    return this.myPost(this.securityAPI + 'register',
      {
        username: username,
        password: password,
        type: type,
        fullname: fullname,
        email: email,
        city: city
      })
  }
  checkConnection() {
    return this.http.get(this.securityAPI + 'connection')
  }
}
