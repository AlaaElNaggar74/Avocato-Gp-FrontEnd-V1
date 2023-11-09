import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChattRoutingModule } from './chatt-routing.module';
import { ChatComponent } from './components/chat/chat.component';
import { ChatBodyGroupComponent } from './components/chat-body-group/chat-body-group.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChatComponent,
    ChatBodyGroupComponent,
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    ChattRoutingModule,
    FormsModule
  ]
})
export class ChattModule { }
