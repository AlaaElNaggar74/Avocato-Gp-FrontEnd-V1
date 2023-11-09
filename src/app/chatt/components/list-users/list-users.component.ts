import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { UserAuth } from 'modelss/user-auth';
import { User } from 'modelss/user';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  @Input() usersList: User[] = [];
  @Input() authUser: UserAuth;
  @Input() messageNotification: EventEmitter<any>;
  @Output() selectedAuthUser = new EventEmitter<UserAuth>();
  notifyNewMessage: any;
  userActive = false;

  constructor() { }

  ngOnInit(): void {
    console.log('the authUser : ', this.authUser);
    this.messageNotification.subscribe(msg => {
      this.notifyNewMessage = msg;
    });
  }

  changeToGroupChat() {
    const user: UserAuth = null;
    this.selectedAuthUser.emit(user);
  }

  selectUser(user) {
    if (user.id === this.authUser.id) {
      return;
    }
    if (this.notifyNewMessage) {
      this.notifyNewMessage.newMessage = false;
    }
    this.selectedAuthUser.emit(user);
  }
}
