import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { matchpassword } from '../../matchPassword.validators';
import { AllLawerService } from '../services/all-lawer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  cities:any;
  cityX:any="all";
  userId:any;
  constructor(public _Router: Router, public _AuthService: AuthService,public _AllLawerService:AllLawerService) {

    
  _AllLawerService.getCities().subscribe((data)=>{
    this.cities=data.data;
    // console.log("citiies",data.data);
    

  })
  }
  checkLawer = false;
  clickSubmit = false;
  commonMobile = '';

  RegisterUserForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8),
    ]),
    city: new FormControl(null, [
      Validators.required,
      Validators.min(1),
      Validators.max(10),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),

    image: new FormControl(null, [Validators.required]),

    mobile: new FormControl(null, [
      Validators.required,
      // Validators.minLength(11),

      Validators.pattern('^(\\+201|01|00201)[0-2,5]{1}[0-9]{8}'),
      // Validators.pattern('^(\\+201|01|00201)[0-2,5]{1}[0-9]{8}'),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
      ),
    ]),
  });

  RegisterLawerForm: FormGroup = new FormGroup({
    idImage: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [
      Validators.required,
      Validators.min(100),
      Validators.max(400),
    ]),
    location: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    about: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(150),
    ]),
    span: new FormControl(null, [
      Validators.required,
      Validators.min(100),
      Validators.max(400),
    ]),
  });

  getUserData(formUserData: any) {
    if (this.checkLawer) {
      this.clickSubmit = !this.clickSubmit;
      this.checkLawer = false;
      formUserData.value.role="user";
      formUserData.value.IsActive="active";
      this._AuthService.registrUserJson(formUserData.value).subscribe((data) => {
        console.log('status-id', data.id);
        this.userId=data.id;

      });
      console.log(formUserData);
    } else {
      let obj = {
        name: 'alaax',
        image: 'alaax.png',
        email: 'alla@gmail.com',
        phone: '524141',
        password: '21452145',
        city_id: 1,
        plan_id: 1,
      };
      // this._AuthService.registrUserMethod(obj).subscribe((data) => {
      //   console.log('resssss', data);
      // });
      formUserData.value.role="user";
      formUserData.value.IsActive="active";
      this._AuthService.registrUserJson(formUserData.value).subscribe((data) => {
        console.log('status', data);
      });
      // console.log(formUserData.value);
      // this._Router.navigate(['/home']);
      this._Router.navigate(['/login']);
    }
  }

  getLawerData(formLawerData: any) {
    let lawerWithMobile = { ...formLawerData.value,UserId:this.userId };
          console.log(lawerWithMobile);

    this._AuthService.registrLawerMethod(lawerWithMobile);
  }

  showLawerRegis() {
    this.checkLawer = !this.checkLawer;
  }


  getCity(event:any){
    this.cityX=event.target.value;
    
    // console.log(event.target.value);
  }
}
