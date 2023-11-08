import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFunRoutingModule } from './user-fun-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { AdminListUsersComponent } from './admin-list-users/admin-list-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateUserComponent,
    AdminListUsersComponent
  ],
  imports: [
    CommonModule,
    UserFunRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    AdminListUsersComponent

  ]
})
export class UserFunModule { }
