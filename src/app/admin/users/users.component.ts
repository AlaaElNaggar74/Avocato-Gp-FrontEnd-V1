

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
cityName:any
ngOnInit() {
  this.getData();
  
}
  getData() {
    this.MyService.get('users')
      .subscribe(response => {
        // Handle the response data here
        this.data=response.data
        console.log(this.data);
        for (const obj of this.data) {
         this.getCityData(obj.city_id) 
         obj.cityName = this.cityName
        console.log('mostafa',obj.cityName)
        }
        
      });
  }
  getCityData(id:any) {
  
    this.MyService.get(`cities/${id}`)
      .subscribe(response => {
        
       this.cityName=response.data[0].name;
     
        
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
  deleteData(id:any) {
    this.MyService.delete(`users/${id}`)
      .subscribe(response => {
        
        console.log(response);
      });
  }
}

