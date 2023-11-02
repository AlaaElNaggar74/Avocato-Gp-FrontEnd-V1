import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/projectApis/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  openBool: any = false;
  openTabs: any = 'all';
  usersList: any;
  xindex = 0;



  constructor(public _UsersService:UsersService){
    
    this._UsersService.getUserApi().subscribe((res) => {
      console.log('res.data', res.data);
      console.log('res.data', res.data.groups);
      this.usersList = res.data;
    });
  }
  // oldPassword:any;
  image1 = '../../assets/ourExpert/team2.jpg';
  image2 = '../../../assets/caseLike/case2.jpg';
  image3 = '../../../assets/caseLike/case3.jpg';
  image4 = '../../../assets/caseLike/case4.jpg';
  image5 = '../../../assets/caseLike/case5.jpg';
  image6 = '../../../assets/caseLike/case6.jpg';

  editUserForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8),
    ]),
    city_id: new FormControl('1', [
      Validators.required,
      Validators.min(1),
      Validators.max(10),
    ]),
    email: new FormControl('adddold@gmail.com', [
      Validators.required,
      Validators.email,
    ]),

    image: new FormControl(null, [Validators.required]),
    mobile: new FormControl(null, [
      Validators.required,
      Validators.pattern('^(\\+201|01|00201)[0-2,5]{1}[0-9]{8}'),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
      ),
    ]),
  });

  openWindow(pic: any) {
    this.openBool = !this.openBool;
    this.openTabs = pic;
  }
  closeWindow() {
    this.openBool = !this.openBool;
    this.openTabs = 'all';
  }

  editUserData(formdata: any) {}

  
  changeIndex(inde: any) {
    this.xindex = inde;
  }

}
