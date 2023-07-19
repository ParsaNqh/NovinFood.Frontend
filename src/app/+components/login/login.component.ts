import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private backend: BackendService, private router: Router) {

  }
  username = new FormControl('', [Validators.required, Validators.minLength(2)]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  login() {
    this.backend.http
    .post(this.backend.securityAPI + 'login',{username:this.username.value,password:this.password.value})
    .subscribe(result=>
      {
        console.log(result)
      })
  }
  create() {
    this.router.navigateByUrl('/register')
  }
}
