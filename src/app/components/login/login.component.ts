import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService , private router:Router) {

  }
  username = new FormControl('', [Validators.required, Validators.minLength(2)]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  login() {
    this.loginService.login(this.username.value??'',this.password.value??'')
  }
  create(){
    this.router.navigateByUrl('/register')
  }
}
