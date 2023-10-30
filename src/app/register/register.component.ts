import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(public _Router:Router){

  }
  checkLawer = false;
  clickSubmit = false;
  // commonMobile="";

  RegisterUserForm: FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(3)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    age: new FormControl(null,[Validators.required,Validators.min(16),Validators.maxLength(2)]),
    mobile: new FormControl(null,[Validators.required,Validators.maxLength(11)]),
    password: new FormControl(null,[Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    confirmePassword: new FormControl(null,[Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
  });

  RegisterLawerForm: FormGroup = new FormGroup({
    idImage: new FormControl(),
    price: new FormControl(),
    span: new FormControl(),
    mobile: new FormControl(),
  });

  getUserData(formUserData:any) {
    if (this.checkLawer) {
      this.clickSubmit = !this.clickSubmit;
      console.log(formUserData);
      
    }else{
      this._Router.navigate(["/login"]);
    }
  }

  getLawerData(formLawerData:any) {
  
      console.log(formLawerData);
      this._Router.navigate(["/login"]);
      
  
  }

  showLawerRegis() {
    this.checkLawer = !this.checkLawer;
    console.log('chhhhhhhhhhh');
  }
}
