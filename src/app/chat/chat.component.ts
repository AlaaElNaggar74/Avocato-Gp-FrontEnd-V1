import {Component, OnInit} from '@angular/core';
import Pusher from 'pusher-js';
import {HttpClient} from "@angular/common/http";
import { Message } from './message.interface';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  username = 'username';
  message = '';
  messages:any = [];
  

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    Pusher.logToConsole = true;

    const pusher = new Pusher('98cfc6e5a017947b4ba9', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', (data:any) => {
      this.messages.push(data);
    });
  }

  submit(): void {
    console.log(this.username,this.message)
    this.http.post('http://localhost:8000/api/messages', {
      username: this.username,
      message: 'thismessage'
    }).subscribe(() => this.message = '');
  }
  
}
