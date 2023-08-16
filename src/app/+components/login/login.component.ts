import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { json } from '@rxweb/reactive-form-validators';
import { BackendSecurityServiceService } from 'src/app/services/backend-security-service.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private backend: BackendSecurityServiceService, private router: Router, private _snackBar: MatSnackBar) {

  }
  phoneNumber = new FormControl('', [Validators.required, Validators.minLength(11)]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  isBusy: boolean = false;
  message: string = '';
  rememberMe: boolean = false;
  login() {
    this.isBusy = true
    let username: string | undefined = this.phoneNumber.value?.toString();
    let password: string | undefined = this.password.value?.toString();
    this.backend.login(username ?? '', password ?? '').subscribe(r => {
      let result = r as any
      if (result.success == false) {
        this.message = (r as any).message;
        this._snackBar.open(this.message, '', {
          duration: 3000
        })
        this.phoneNumber.setValue('');
        this.password.setValue('');
        this.isBusy = false
      }
      else {
        sessionStorage.setItem("token", result.token)
        this.message = result.message;
        this._snackBar.open(this.message, '', {
          duration: 3000
        })
        this.isBusy = false
        switch (result.type) {
          case 'SystemAdmin':
            this.router.navigate(['/admins'])
            break;
          case 'RestaurantOwner':
            this.router.navigate(['/restaurants'])
            break;
          case 'Costomer':
            this.router.navigate(['/Customers'])
            break;
        }
        if (this.rememberMe) {
          localStorage.setItem('token', result.token)
          this.message = (r as any).message;
          this._snackBar.open(this.message, '', {
            duration: 3000
          })
          this.isBusy = false
          switch (result.type) {
            case 'SystemAdmin':
              this.router.navigate(['/admins'])
              break;
            case 'RestaurantOwner':
              this.router.navigate(['/restaurants'])
              break;
            case 'Costomer':
              this.router.navigate(['/Customers'])
              break;
          }
        }
      }
    }
    );
  }
  // this.backend.http
  // .post(this.backend.securityAPI + 'login',{username:this.phoneNumber.value,password:this.password.value})
  // .subscribe(result=>
  //   {
  //     console.log(result)
  //   })
  back() {
    this.router.navigateByUrl('/register')
  }
  check(event: KeyboardEvent){
    if (event.key >= '0' && event.key <= '9') {}
    else{
      event.preventDefault();
    }
  }
}
