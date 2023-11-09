import {Component, Input, OnInit} from '@angular/core';
import { UserAuth } from 'modelss/user-auth';
import { Message } from 'src/app/chat/message.interface';

@Component({
  selector: 'app-chat-body-group',
  templateUrl: './chat-body-group.component.html',
  styleUrls: ['./chat-body-group.component.css']
})
export class ChatBodyGroupComponent {
  @Input() selectedUser: UserAuth;
  @Input() authUser: UserAuth;
  @Input() allMessages: Messages[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
