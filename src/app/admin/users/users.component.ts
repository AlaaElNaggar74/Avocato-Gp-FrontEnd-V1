

import { Component , inject} from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { AdminListUsersComponent } from './user-fun/admin-list-users/admin-list-users.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  constructor(private MyService: MyServiceService,private http: HttpClient) { }
data!:any
allData:any=''
cityName:any
filter:any
spec:any
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
         this.getCityData(obj.id) 
        //  obj.cityName = this.cityName
         obj.complete=1
        console.log('mostafa',this.getCityData(obj.id))
        if(obj.role=='lawyer'&& this.getCityData(obj.id)==0){
obj.complete=0
        }
        }
        console.log('mostassssfa',this.data)
      });
  }
  getCityData(id:any) {
  let allData =5
    this.MyService.get(`showlawyer/${id}`)
      .subscribe(response => {
        
       this.allData=1;
       console.log('res',this.allData)
     allData=1
        
      },
      (error: HttpErrorResponse) => {
        allData=0
        this.allData=0;
        if (error.status === 404) {
          console.log('Data not found',this.allData);
        } else {
          console.log('An error occurred:', error.error);
        }
      }
      );
    
     return this.allData
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

