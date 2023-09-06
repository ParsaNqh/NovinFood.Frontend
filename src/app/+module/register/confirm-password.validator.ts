import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const matchPassword: ValidatorFn = (control: AbstractControl): ValidationErrors|null =>{
    let Password = control.get('password');
    let ConfirmPassword = control.get('confirmPassword');
    if (Password?.value != ConfirmPassword?.value) {
        return{
            passwordMatchErorrs : true
        }
    }
    return null;
}