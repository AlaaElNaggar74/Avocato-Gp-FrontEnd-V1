import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../services/projectApis/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  
  
  isLogin:any;
  localStorValue:any;
  userInfo:any;
  token:any;
  constructor(
    public _Router: Router,
    public _AuthService: AuthService,
    public _ToastrService: ToastrService,
    public _UsersService: UsersService
  ) {
    _AuthService.userLogData.subscribe((data) => {
      let obj = data;
      console.log('User_Data_Is-GGGGGGGGGGG', obj);

      let size = Object.keys(obj).length;
      if (size) {
        // console.log("User_Data_Is-FFF-TRRUE",obj);
      } else {
        // console.log("User_Data_Is-FFF",obj);
      }
    });
    if (localStorage.getItem('UserData')) {
      this._AuthService.isLogin.next(true);
      this._AuthService.isLogin.subscribe((data) => {
        console.log('nnnnnn', data);
        this.isLogin = data;
      });

      this.localStorValue = localStorage.getItem('UserData');
      let objData = JSON.parse(this.localStorValue);
      this.userInfo = objData;
      this.token = objData.token;

      console.log('this.userInfo', this.userInfo);
      console.log('this.token', this.token);
      // console.log('this.isLogin', this._AuthService.isLogin);
    } else {
      this._AuthService.isLogin.next(false);
    }
    // this._AuthService.logOut();
  }
}
