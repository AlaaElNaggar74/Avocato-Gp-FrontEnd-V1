import { Component } from '@angular/core';
import { AllLawerService } from '../services/all-lawer.service';

@Component({
  selector: 'app-landing-search',
  templateUrl: './landing-search.component.html',
  styleUrls: ['./landing-search.component.css']
})
export class LandingSearchComponent {

  cities:any;
  specializations:any;

constructor(public _AllLawerService:AllLawerService){


  _AllLawerService.getCities().subscribe((data)=>{
    this.cities=data.data;
    console.log("citiies",data.data);
    

  })
  _AllLawerService.getspecializations().subscribe((data)=>{
    this.specializations=data.data;
    console.log("getspecializations",data.data[1].name);
    

  })
}

city:any="all";
speciali:any="all";
lawerName:any="all";

  image1 = '../../../assets/landing/landing1.jpg';
  image2 = '../../../assets/landing/landing4.jpg';
  image3 = '../../../assets/landing/landing5.jpg';

  serch(){
    console.log("city",this.city);
    console.log("speciali",this.speciali);
    console.log("doctor",this.lawerName);
    
  }
  getCity(event:any){
    this.city=event.target.value;
    
    // console.log(event.target.value);
  }
  getSpecialize(event:any){
    this.speciali=event.target.value;

    console.log(event.target.value);
  }
  getLawerName(event:any){
    this.lawerName =event.target.value;

    // console.log(event.target.value);
  }

}
