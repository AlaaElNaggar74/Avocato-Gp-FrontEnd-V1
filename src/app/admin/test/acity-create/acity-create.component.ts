import { Component} from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-acity-create',
  templateUrl: './acity-create.component.html',
  styleUrls: ['./acity-create.component.css']
})
export class AcityCreateComponent {
  cityForm!:FormGroup;
  data: any = {
    name: '',}
  error:any={
    name: '',}
    constructor(private MyService: MyServiceService,private http: HttpClient) { 

    }
    ngOnInit(){

        this.cityForm=new FormGroup({
          'name':new FormControl(null,[Validators.required,Validators.minLength(3)]),
})}

submitForm(cityForm:FormGroup){
  this.postData()
 console.log(cityForm)
 // console.log(this.data)
 }


 postData() {
 
  this.MyService.post('cities',this.data)
    .subscribe(response => {
      console.log('Success:', response);
      // Reset the form after successful submission
      
    },
    error => {
      this.error=error.error.errors;
      console.error('Errorr:', error.error.errors);
    });
}
}
