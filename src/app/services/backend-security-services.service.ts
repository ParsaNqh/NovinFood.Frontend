import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class BackendSecurityServicesService extends  BackendService {

  login(username:string,password:string){
    return this.http.post(this.securityAPI+'login',{username:username,password:password})
  };
  register(username:string,password:string,type:Number,fullname:string,email:string,city:string){
    return this.http.post(this.securityAPI+'register',{username:username,password:password,type:type,fullname:fullname,email:email,city:city})
  }
}
