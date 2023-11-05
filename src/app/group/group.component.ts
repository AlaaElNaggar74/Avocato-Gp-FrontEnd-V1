import { ToastrService } from 'ngx-toastr';
import { UsersService } from './../services/projectApis/users.service';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
})
export class GroupComponent {
  groupList: any;
  postList: any;
  usersList: any;
  show = false;
  idGroup = -1;
  isJoin = false;
  isIdJoin = 0;
  groupName = 'name';
  xindex = 0;
  xindexBtn = 0;
  openForm = false;
  localStorValue: any;
  userInfo: any;
  userRole: any;
  GroupsById: any;
  isLogin: any;
  userId: any;
  token: any;
  indexName = -1;

  constructor(
    public _UsersService: UsersService,
    public _Router: Router,
    public _AuthService: AuthService,
    public _ToastrService: ToastrService
  ) {
    if (localStorage.getItem('UserData')) {
      this._AuthService.isLogin.next(true);
      this._AuthService.isLogin.subscribe((data) => {
        console.log('nnnnnn', data);
        this.isLogin = data;
      });

      this.localStorValue = localStorage.getItem('UserData');
      let objData = JSON.parse(this.localStorValue);
      this.userInfo = objData;
      this.token = this.userInfo.token;
      this.userId = this.userInfo.id;

      console.log('this.userInfo-groups', this.userInfo);
      console.log('this.userId-groups', this.userId);
      // console.log('this.token', this.token);
      // console.log('this.isLogin', this._AuthService.isLogin);
    } else {
      this._AuthService.isLogin.next(false);
    }

    _UsersService.getAllGroupsApi().subscribe((res) => {
      console.log(res.data);

      // let all = res.data;
      // let allBoll = all.bool;
      this.groupList = res.data;


    });

    // if (this.userRole == 'user') {
    //   this._UsersService
    //     .getGroupsByIdApi(this.userInfo?.id)
    //     .subscribe((res) => {
    //       console.log('res.data', res.data);
    //       console.log('res.data', res.data.groups);
    //       this.GroupsById = res.data;
    //     });
    // } else if (this.userRole == 'lawyer') {
    //   this._UsersService
    //     .getGroupsByIdApi(this.userInfo?.user_id)
    //     .subscribe((res) => {
    //       console.log('res.data', res.data);
    //       console.log('res.data', res.data.groups);
    //       this.GroupsById = res.data;
    //     });
    // }
    // console.log("this.GroupsById" , this.GroupsById);

    this._UsersService.getUserApi().subscribe((res) => {
      console.log('res.data', res.data);
      console.log('res.data', res.data.groups);
      this.usersList = res.data;
    });

    // this._UsersService.getGroupsByIdApi().subscribe((res) => {
    //   console.log('res.data', res.data);
    //   console.log('res.data', res.data.groups);
    //   this.usersList = res.data;
    // });
  }

  createForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8),
    ]),
  });

  viewPost(id: any) {
    // this._UsersService.getAllGroupsApi().subscribe((res)=>{
    //   // console.log(res.data);

    //   this.postList=res.data;
    // });
    this.idGroup = id;
    this.show = true;
  }

  viewPostUser() {
    // this._UsersService.getUserApi().subscribe((res)=>{

    console.log('IIIDDDD');
    //   console.log("res.data",res.data);
    //   this.usersList=res.data;
    // });
  }
  joinGroup(id: any) {
    // this._UsersService.getUserApi().subscribe((res)=>{
    this.indexName = id;
    console.log('ooooooo', id);
    //   console.log("res.data",res.data);
    //   this.usersList=res.data;
    // });
    // this.isJoin = !this.isJoin;
    this.xindexBtn = id;
    // this.xindexBtn = id;
  }

  changeIndex(inde: any) {
    this.xindex = inde;
  }

  openCreatForm() {
    this.openForm = !this.openForm;
  }

  createGroup(formData: any) {
    formData.value.user_id = this.userId;
    console.log('formCreateData ', formData.value);
    this._UsersService.createGroupsApi(formData.value).subscribe((res) => {
      console.log('createGroupsApi');
    });
  }
}
