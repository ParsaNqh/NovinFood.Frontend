import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BackendSecurityServicesService } from 'src/app/services/backend-security-services.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor(private backend: BackendSecurityServicesService, private router: Router, private _snackBar: MatSnackBar) {

  }
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  isBusy: boolean = false;
  message: string = '';
  rememberMe: boolean = false;
  login() {
    this.isBusy = true
    let username: string | undefined = this.username.value?.toString();
    let password: string | undefined = this.password.value?.toString();
    this.backend.adminLogin(username ?? '', password ?? '').subscribe(r => {
      let result = r as any
      if (result.success == false) {
        this.message = result.message;
        this._snackBar.open(this.message, '', {
          duration: 3000
        })
        this.username.setValue('');
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
          }
        }
      }
    }
    );
  }
  check(event: KeyboardEvent) {
    if (event.key >= 'a' && event.key <= 'z') { }
    else {
      event.preventDefault();
    }
  }
}
