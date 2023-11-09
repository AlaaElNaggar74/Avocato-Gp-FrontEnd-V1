import {Component, OnInit} from '@angular/core';
import Pusher from 'pusher-js';
import { PusherService } from '../pusher.service';
import { AuthService } from '../auth.service';
import {HttpClient} from "@angular/common/http";
import { Message } from './message.interface';
import { FormControl } from '@angular/forms';
import Echo from 'laravel-echo';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  // private channel: any; // Chat channel
  // messages: string[] = []; // Store chat messages
  // searchControl=new FormControl('');

  // constructor(private pusherService: PusherService, private authService: AuthService) {}

  // ngOnInit() {
  //   // Get the chat channel for the current user
  //   const currentUser = this.authService.getCurrentUser(); // Implement this method in AuthService
  //   this.channel = this.pusherService.getChannel(`private-chat-${currentUser.id}`);
  //   this.channel.bind('message', (data:any) => {
  //     this.messages.push(data.message);
  //   });
  // }

  // sendMessage(message: string) {
  //   this.channel.trigger('client-message', { message });
  // }
  ngOnInit(): void {
    const echo = new Echo({
      broadcaster: 'pusher',
      key: '98cfc6e5a017947b4ba9',
      cluster: 'eu',
      wsHost: window.location.hostname,
      wsPort: 6001,
      forceTLS: false,    // Important Line
      disableStats: true,
    });
    echo.channel('chat')
      .listen('ChatEvent', (res:any) => {
        console.log('Chat Event Data : ', res);
      });
  }
}
