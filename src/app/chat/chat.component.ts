import {Component, OnInit} from '@angular/core';
import Pusher from 'pusher-js';
import { PusherService } from '../pusher.service';
import { AuthService } from '../auth.service';
import {HttpClient} from "@angular/common/http";
import { Message } from './message.interface';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private channel: any; // Chat channel
  messages: string[] = []; // Store chat messages

  constructor(private pusherService: PusherService, private authService: AuthService) {}

  ngOnInit() {
    // Get the chat channel for the current user
    const currentUser = this.authService.getCurrentUser(); // Implement this method in AuthService
    this.channel = this.pusherService.getChannel(`private-chat-${currentUser.id}`);
    this.channel.bind('message', (data:any) => {
      this.messages.push(data.message);
    });
  }

  sendMessage(message: string) {
    this.channel.trigger('client-message', { message });
  }
}
