import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../services/projectApis/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    public _Router: Router,
    public _AuthService: AuthService,
    public _ToastrService: ToastrService,
    public _UsersService: UsersService
  ) {

    _AuthService.userLogData.subscribe((data) => {
      let obj=data;
      console.log("User_Data_Is-GGGGGGGGGGG",obj);

      let size =Object.keys(obj).length
      if (size) {
      
        // console.log("User_Data_Is-FFF-TRRUE",obj);
        
      }else{
        // console.log("User_Data_Is-FFF",obj);
    
      }
    });
    // this._AuthService.logOut();
  }
}
