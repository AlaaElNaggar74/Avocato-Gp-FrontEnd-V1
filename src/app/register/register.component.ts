import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { matchpassword } from '../../matchPassword.validators';
import { AllLawerService } from '../services/all-lawer.service';
import { UsersService } from '../services/projectApis/users.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  cities: any;
  cityX: any = 'all';
  userId: any;

  UserImageName = '';
  LawerImageName = '';
  constructor(
    public _Router: Router,
    public _AuthService: AuthService,
    public _AllLawerService: AllLawerService,
    public _UsersService:UsersService
  ) {
    _UsersService.getCitiesApi().subscribe((data) => {
      this.cities = data.data;
      // console.log("citiies",data.data);
    });
    this._AuthService.logOut();
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
    city_id: new FormControl(null, [
      Validators.required,
      Validators.min(1),
      Validators.max(10),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),

    image: new FormControl(null, [Validators.required]),
    // fileSource: new FormControl(null, [
    //   Validators.required
    // ]),

    phone: new FormControl(null, [
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
    // fileSource: new FormControl(null, [
    //   Validators.required
    // ]),
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

  onFileUserChange(event: any) {
    if (event.target.files.length > 0) {
      this.UserImageName = event.target.files[0].name;
      // this.RegisterUserForm.patchValue({
      //   fileSource: file.name
      // });
    }
  }
  onFileLawerChange(event: any) {
    if (event.target.files.length > 0) {
      this.LawerImageName = event.target.files[0].name;
      // this.RegisterLawerForm.patchValue({
      //   fileSource: file.name
      // });
    }
  }

  getUserData(formUserData: any) {
    if (this.checkLawer) {
      this.clickSubmit = !this.clickSubmit;
      this.checkLawer = false;
      formUserData.value.role = 'user';
      // formUserData.value.IsActive = 'active';
      formUserData.value.image = this.UserImageName;
      console.log('formUserData.value', formUserData.value);

      this._UsersService
        .registrUserApi(formUserData.value)
        .subscribe((data) => {
          console.log('status-id-CHECK', data);
          // this.userId = data.id;
        });
      console.log(formUserData);
    } else {
      // let obj = {
      //   name: 'alaax',
      //   image: 'alaax.png',
      //   email: 'alla@gmail.com',
      //   phone: '524141',
      //   password: '21452145',
      //   city_id: 1,
      //   plan_id: 1,
      // };
      // this._AuthService.registrUserMethod(obj).subscribe((data) => {
      //   console.log('resssss', data);
      // });
      // formUserData.value.role = 'user';
      // formUserData.value.IsActive = 'active';
      formUserData.value.image = this.UserImageName;
      // formUserData.append('image', formUserData.get('fileSource').value);


      this._UsersService
      .registrUserApi(formUserData.value)
      .subscribe((data) => {
        console.log('status-id-NOT-CHECK', data);
        // this.userId = data.id;
        // console.log("registerData",data);
        
      });

      console.log("registerData",formUserData);


      // console.log(formUserData.value);
      // this._Router.navigate(['/home']);
      this._Router.navigate(['/login']);
    }
  }

  getLawerData(formLawerData: any) {
    formLawerData.value.idImage = this.LawerImageName;
    let lawerWithID = { ...formLawerData.value,  };
    console.log("lawerWithID------- ",lawerWithID);

    this._UsersService.registrLawerApi(lawerWithID).subscribe((data) => {
      console.log('status---lawer', data);
    });
    // this._Router.navigate(['/login']);
  }

  showLawerRegis() {
    this.checkLawer = !this.checkLawer;
  }

  getCity(event: any) {
    this.cityX = event.target.value;

    // console.log(event.target.value);
  }
}
