import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = new FormControl('', [Validators.required, Validators.minLength(2)]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  restaurantName = new FormControl('', [Validators.required, Validators.minLength(5)]);
  city = new FormControl('', [Validators.required]);
  restaurantAddress = new FormControl('', [Validators.required, Validators.minLength(10)]);
  restaurant: boolean = false;
  repeatPassword = new FormControl('', [Validators.required ]);
  create() { };

}
