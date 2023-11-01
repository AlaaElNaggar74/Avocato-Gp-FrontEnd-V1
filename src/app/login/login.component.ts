import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userData: any;
  userList: any;
  LawerList: any;
  userTotalData: any;

  constructor(
    public _Router: Router,
    public _AuthService: AuthService,
    public _ToastrService: ToastrService
  ) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),

    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
      ),
    ]),
  });
  submitGameForm(form: any) {
    console.log(form);
  }

  bckHome() {
    this._Router.navigate(['register']);
  }

  getLoginData(formLoginData: any) {
    // console.log(formLoginData);
    // this._AuthService.registrUserMethod(formLoginData.value);
    this._AuthService.loginUserJson().subscribe((res) => {
      this.userList = res;
      // console.log('Success', res);
      // console.log('Success', typeof res);
      let userPart = this.userList.find((ele: any) => {
        return (
          ele.email == formLoginData.value.email &&
          ele.password == formLoginData.value.password
        );
      });

      // this._AuthService.loginLawerJson().subscribe((res) => {
      //   this.LawerList = res;

      // let lawerPart = this.LawerList.find((ele: any) => {
      //   return (
      //     ele.UserId == userPart.id
      //   );

      // });

      console.log('userPart', userPart);
      // console.log("lawerPart",lawerPart);

      // console.log('userPart', userPart);

      if (userPart) {
        this._AuthService.loginLawerJson().subscribe((res) => {
          this.LawerList = res;

          let lawerPart = this.LawerList.find((ele: any) => {
            return ele.UserId == userPart.id;
          });
          if (lawerPart) {
            userPart.role = 'lawer';
            this.userTotalData = {
              ...userPart,
              ...lawerPart,
            };
            this._AuthService.saveLawerLoginData(this.userTotalData);
          } else {
            this.userTotalData={...userPart};
            this._AuthService.saveUserLoginData(this.userTotalData);
          }
          console.log('userTotalData', this.userTotalData);
        });
        this._ToastrService.success('Login Success Done !');

        this._Router.navigate(['/home']);
        // this._Router.navigate(['/home']);
      } else {
        this._ToastrService.warning('Error In Login Please Try Again !!');
      }

      // this.userData=data;
    });

    // this._Router.navigate(['/home']);
  }
}
