import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  phoneNumber = new FormControl('', [Validators.required, Validators.minLength(11)]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  restaurantName = new FormControl('', [Validators.required, Validators.minLength(5)]);
  city = new FormControl('', [Validators.required]);
  restaurantAddress = new FormControl('', [Validators.required, Validators.minLength(10)]);
  restaurant: string = "";
  repeatPassword = new FormControl('', [Validators.required]);
  create() { };
  constructor(private router: Router) { };
  return() {
    this.router.navigateByUrl('/login');
  };
  check(event: KeyboardEvent) {
    if (event.key >= '0' && event.key <= '9') { }
    else {
      event.preventDefault();
    }
  }
  check2(event: KeyboardEvent) {
    // if (event.key >= '0' && event.key <= '9') {}
    if (event.key >= 'آ' && event.key <= 'ی') { }
    else if (event.keyCode == 32) { }
    else {
      event.preventDefault();
    }
  }
}
