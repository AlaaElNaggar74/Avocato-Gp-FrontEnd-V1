import { Component } from '@angular/core';
import Echo from 'laravel-echo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'avocato';
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
