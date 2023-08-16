import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class BackendSecurityServiceService extends BackendService {

  login(username:string,password:string){
    return this.http.post(this.securityAPI+'login',{username:username,password:password})
  };
  register(){
    return this.http.post(this.securityAPI+'register',{})
  }
}
