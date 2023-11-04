import { Component} from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { matchpassword } from './matchPassword.validator';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  userForm!:FormGroup;
  cityData!:any
  data: any = {
    name: '',
    role: '',
    email: '',
    image: '',
    phone: '',
    password: '',
    city_id:'',
  };
  error:any={
    name: '',
    role: '',
    email: '',
    image: '',
    phone: '',
    password: '',
    city_id:'',
  };
  constructor(private MyService: MyServiceService,private http: HttpClient) { 

  }
ngOnInit(){
this.getData()
  this.userForm=new FormGroup({
    'name':new FormControl(null,[Validators.required,Validators.minLength(3)]),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'role':new FormControl(null,[Validators.required]),
    'city':new FormControl(null,[Validators.required]),
    'image':new FormControl(null,[Validators.required]),
    'phone':new FormControl(null,[Validators.required,Validators.pattern("^(011|012|015)[0-9]{8}$")]),
    'password':new FormControl(null,[Validators.required,Validators.minLength(8)]),
    'confirmpassword':new FormControl(null,[Validators.required])
  },
  {
    validators:matchpassword
  })
}

//////////////
  submitForm(userForm:FormGroup){
   this.postData()
  console.log(userForm)
  // console.log(this.data)
  }

/////////////
  postData() {
 
    this.MyService.post('users',this.data)
      .subscribe(response => {
        console.log('Success:', response);
        // Reset the form after successful submission
        this.resetForm();
      },
      error => {
        this.error=error.error.errors;
        console.error('Errorr:', error.error.errors);
      });
      
  }
/////////

  resetForm() {
    // Reset the form fields and validation
    this.data = {
      name: '',
      role: '',
      email: '',
      image: '',
      phone: '',
      password: '',
      confirmPassword: ''
    };
  }

///
  getData() {
    this.MyService.get('cities')
      .subscribe(response => {
        // Handle the response data here
        this.cityData=response.data
        console.log(this.cityData);
      });
  }
}
