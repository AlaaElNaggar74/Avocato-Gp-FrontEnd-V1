

import { Component , inject} from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { AdminListUsersComponent } from './user-fun/admin-list-users/admin-list-users.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  constructor(private MyService: MyServiceService) { }
data!:any
ngOnInit() {
  this.getData();
}
  getData() {
    this.MyService.get('users')
      .subscribe(response => {
        // Handle the response data here
        this.data=response.data
        // console.log(this.data);
      });
  }
  postData() {
    let data ={
      
      email:'pokerf036@gmail.com',
      
     
      password:'12345678',
  
    }
    this.MyService.post('sanctum/token',data)
      .subscribe(response => {
        // Handle the response data here
        console.log(response);
      });
      
  }
  deleteData() {
    this.MyService.delete('users/10')
      .subscribe(response => {
        // Handle the response data here
        console.log(response);
      });
  }
}

