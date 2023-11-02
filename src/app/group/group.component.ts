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

  constructor(
    public _UsersService: UsersService,
    public _Router: Router,
    public _AuthService: AuthService,
    public _ToastrService: ToastrService
  ) {
    _UsersService.getAllGroupsApi().subscribe((res) => {
      // console.log(res.data);

      this.groupList = res.data;
    });

    this._UsersService.getUserApi().subscribe((res) => {
      console.log('res.data', res.data);
      console.log('res.data', res.data.groups);
      this.usersList = res.data;
    });
  }

  createForm: FormGroup = new FormGroup({
    postName: new FormControl(null, [Validators.required]),

    description: new FormControl(null, [Validators.required]),
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

  createPost(formData:any){

    console.log("formCreateData " ,formData);
    
  }
}
