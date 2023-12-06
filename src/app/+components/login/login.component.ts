import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BackendSecurityServicesService } from 'src/app/services/backend-security-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(private backend: BackendSecurityServicesService, private router: Router, private _snackBar: MatSnackBar) {

  }
  phoneNumber = new FormControl('', [Validators.required,
  Validators.minLength(11),
  Validators.maxLength(11),
  Validators.pattern('09[0-9 ]{9}')
  ]);
  password = new FormControl('', [Validators.required, Validators.minLength(5)]);
  isBusy: boolean = false;
  message: string = '';
  errorMessage: string = '';
  rememberMe: boolean = false;
  login() {
    this.isBusy = true
    let username: string | undefined = this.phoneNumber.value?.toString();
    let password: string | undefined = this.password.value?.toString();
    this.backend.login(username ?? '', password ?? '').subscribe(r => {
      let result = r as any
      if (r && (r as any).serverError) {
        this.isBusy = false;
        this.errorMessage = (r as any).serverError;
        this.phoneNumber.setValue('');
        this.password.setValue('');
      }
      else if (result.success == false) {
        this.message = result.message;
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
          case 'RestaurantOwner':
            this.router.navigate(['/restaurants'])
            break;
          case 'Costomer':
            this.router.navigate(['/customers'])
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
            case 'RestaurantOwner':
              this.router.navigate(['/restaurants'])
              break;
            case 'Costomer':
              this.router.navigate(['/customers'])
              break;
          }
        }
      }
    }
    );
  }
  back() {
    this.router.navigateByUrl('/register')
  }
  check(event: KeyboardEvent) {
    if (event.key >= '0' && event.key <= '9') { }
    else {
      event.preventDefault();
    }
  }
}
