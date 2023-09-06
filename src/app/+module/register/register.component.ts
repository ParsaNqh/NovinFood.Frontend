import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BackendSecurityServicesService } from 'src/app/services/backend-security-services.service';
import { matchPassword } from './confirm-password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router: Router,
    private backend: BackendSecurityServicesService,
    private _snackBar: MatSnackBar,
    private fb: FormBuilder) { };
  isBusy: boolean = false;
  message: string = '';

  create() {
    this.isBusy = true
    let username: string | undefined = this.register.controls.username.value?.toString();
    let password: string | undefined = this.passwordForm.controls.password.value?.toString();
    let fullname: string | undefined = this.register.controls.fullname.value?.toString();
    let type: number | undefined = Number(this.register.controls.type.value?.toString());
    let email: string | undefined = this.register.controls.email.value?.toString();
    let city: string | undefined = this.register.controls.city.value?.toString();
    this.backend.register(username ?? '', password ?? '', type ?? 2, fullname ?? '', email ?? '', city ?? '').subscribe(r => {
      this._snackBar.open('ثبت نام با موفقیت انجام شد', '', {
        duration: 3000
      }).afterDismissed().subscribe(r => {
        this.router.navigate(['/login']);
      });
    });
  }

  register = this.fb.group({
  username: ['', [Validators.required, Validators.minLength(11),Validators.pattern('091[0-9 ]{8}')]],
    fullname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    type: ['', [Validators.required]],
    city: ['', [Validators.required]]
  })

  passwordForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', []),
  },
    {
      validators: matchPassword
    })

  return() {
    this.router.navigateByUrl('/login');
  };
  checkPhoneNumber(event: KeyboardEvent) {
    if (event.key >= '0' && event.key <= '9') { }
    else {
      event.preventDefault();
    }
  }
  checkFullname(event: KeyboardEvent) {
    if (event.key >= 'آ' && event.key <= 'ی') { }
    else if (event.keyCode == 32) { }
    else {
      event.preventDefault();
    }

  };
}
