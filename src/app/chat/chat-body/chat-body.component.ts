import { Component } from '@angular/core';
import Pusher from 'pusher-js';
import {HttpClient} from "@angular/common/http";
import { Message } from '../message.interface';
@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.css']
})
export class ChatBodyComponent {
  username = 'username';
  message = '';
  messages:any[] = [];
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
  Pusher.logToConsole = true;

    const pusher = new Pusher('98cfc6e5a017947b4ba9', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('chat2');
    channel.bind('new-message', (data:any) => {
      this.messages.push(data);
    });
  }
}
