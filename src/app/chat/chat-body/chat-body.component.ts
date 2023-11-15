import { Component } from '@angular/core';
import Pusher from 'pusher-js';
import {HttpClient} from "@angular/common/http";
import { Message } from '../message.interface';
import { AuthService } from '../../../app/services/auth.service';
@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.css']
})
export class ChatBodyComponent {
  username = 'username';
  message = '';
  messages:any[] = [];
  localStorValue:any
  userInfo:any
  token:any
  userId:any
  
  constructor(private http: HttpClient,public _AuthService: AuthService,) {
    if (localStorage.getItem('UserData')) {
  
   

      this.localStorValue = localStorage.getItem('UserData');
      let objData = JSON.parse(this.localStorValue);
      this.userInfo = objData;
      this.token = this.userInfo.token;
      this.userId = this.userInfo.id;

      console.log('this.userInfo-groups', this.userInfo);
      console.log('this.userId-groups', this.userId);

    } else {
      this._AuthService.isLogin.next(false);
    }
  }
  ngOnInit(): void {
  Pusher.logToConsole = true;

    const pusher = new Pusher('98cfc6e5a017947b4ba9', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe(`chat`);
    channel.bind('new-message', (data:any) => {
      this.messages.push(data.chat.message);
      console.log( this.messages)
    });
  }
}
