import { Component } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-acity-edit',
  templateUrl: './acity-edit.component.html',
  styleUrls: ['./acity-edit.component.css']
})
export class AcityEditComponent {
  cityId:string='';
  cityForm!:FormGroup;
  data: any = {
    name: '',}
  error:any={
    name: '',}
    constructor(private MyService: MyServiceService,private http: HttpClient,private activeRoute:ActivatedRoute) { 

    }
    ngOnInit(){
this.cityId=this.activeRoute.snapshot.params['id']
        this.cityForm=new FormGroup({
          'name':new FormControl(null,[Validators.required,Validators.minLength(4)]),
})}

submitForm(cityForm:FormGroup){
  console.log(cityForm)
  console.log(this.data)
  this.putData()

 }


 putData() {
 
  this.MyService.put(this.cityId,'cities',this.data)
    .subscribe(response => {
      console.log('Success:', response);
      // Reset the form after successful submission
      
    },
    error => {
      this.error=error.error.errors;
      console.error('Errorr:', error);
    });
}

}
