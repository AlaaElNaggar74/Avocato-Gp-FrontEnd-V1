import { Component } from '@angular/core';
import { UsersService } from '../services/projectApis/users.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css'],
})
export class AdminProfileComponent {
  openBool: any = false;
  openTabs: any = 'all';
  xindex = 0;

  localStorValue:any;
  userIdGroup:any;
  usersList:any;
  adminGroupsList:any;
  subscripGroup:any;


  constructor(public _UsersService:UsersService){
    if (localStorage.getItem('UserData')) {
      this.localStorValue = localStorage.getItem('UserData');
      this.localStorValue = JSON.parse(this.localStorValue);
      this.userIdGroup = this.localStorValue.user_id;
     
      console.log("UserProfile-login-ID",this.userIdGroup);
      
    }
    this._UsersService.getUserApi().subscribe((res) => {
      console.log('res.data', res.data);
      console.log('res.data', res.data.groups);
      this.usersList = res.data;
    });

    this._UsersService.getGroupAsAdmin(this.userIdGroup).subscribe((res)=>{
      console.log("Groups-As-Admin",res.data.groupsAsAdmin);
      // let x=
      this.adminGroupsList=res.data.groupsAsAdmin;
      this.subscripGroup=res.data.groups;

      

    });
  }

  image1 = '../../assets/ourExpert/team2.jpg';
  image2 = '../../../assets/caseLike/case2.jpg';
  image3 = '../../../assets/caseLike/case3.jpg';
  image4 = '../../../assets/caseLike/case4.jpg';
  image5 = '../../../assets/caseLike/case5.jpg';
  image6 = '../../../assets/caseLike/case6.jpg';

  openWindow(pic: any) {
    this.openBool = !this.openBool;
    this.openTabs = pic;
  }
  closeWindow() {
    this.openBool = !this.openBool;
    
  }


  editUserData(formdata: any) {}

  
  changeIndex(inde: any) {
    this.xindex = inde;
  }
}
