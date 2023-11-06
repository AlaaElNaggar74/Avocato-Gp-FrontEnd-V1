import { Component} from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-aspecializations-create',
  templateUrl: './aspecializations-create.component.html',
  styleUrls: ['./aspecializations-create.component.css']
})
export class AspecializationsCreateComponent {
  specForm!:FormGroup;
  data: any = {
    name: '',}
  error:any={
    name: '',}
    constructor(private MyService: MyServiceService,private http: HttpClient,private router: Router) { 

    }
    ngOnInit(){

        this.specForm=new FormGroup({
          'name':new FormControl(null,[Validators.required,Validators.minLength(4)]),
})}

submitForm(specForm:FormGroup){
  console.log(specForm)
  console.log(this.data)
  this.postData()

 }


 postData() {
 
  this.MyService.post('specializations',this.data)
    .subscribe(response => {
      console.log('Success:', response);
      this.router.navigate(['admin/specializations']);
      
    },
    error => {
      this.error=error.error.errors;
      console.error('Errorr:', error);
    });
}
}
