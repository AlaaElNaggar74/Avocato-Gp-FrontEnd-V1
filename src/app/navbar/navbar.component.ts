import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  nav_log: any = '../../assets/logo.png';
  isLogin = false;
  userInfo:any;
  lawerInfo:any;

  user: any = 'lawer';

  constructor(public _AuthService: AuthService ,public _Router:Router) {
    _AuthService.userLogData.subscribe((data) => {
      // console.log("User_Data_Is",data);

      let obj=data;
      let size =Object.keys(obj).length
      if (size) {
        this.isLogin = true;
        this.userInfo=obj;
        // console.log("User_Data_Is",obj);
        
      }else{
        this.isLogin = false;
      }
    });

    _AuthService.lawerLogData.subscribe((data) => {
      
      let obj=data;
      let size =Object.keys(obj).length
      // console.log("LAWERRRRR_Data_Is",data);
      // console.log("AND_SIZE_IS",size);
      if (size) {
        this.isLogin = true;
        this.lawerInfo=obj;
        // console.log("User_Data_Is",obj);
      }else{
        this.isLogin = false;
      }
    });
    // if (_AuthService.userLogData || _AuthService.lawerLogData) {

    // }else{
    //   this.isLogin=false
    // }
  }

  logout(){
    // this._AuthService.logOut();
   
    // console.log("logOut");
    // _AuthService.userLogData.subscribe((data) => {
    //   let obj=data;
    //   let size =Object.keys(obj).length
    //   if (size) {
    //     this.isLogin = true;
    //     this.userInfo=obj;
    //     console.log("User_Data_Is",obj);
        
    //   }
    // });
    
  }
}
