import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class PusherService {
  private pusher: Pusher;
  constructor() {
    this.pusher = new Pusher('98cfc6e5a017947b4ba9', {
      cluster: 'eu',
      // encrypte: true
    });
  }

  getChannel(channelName: string) {
    return this.pusher.subscribe(channelName);
  }
}
