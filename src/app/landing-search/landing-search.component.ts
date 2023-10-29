import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-search',
  templateUrl: './landing-search.component.html',
  styleUrls: ['./landing-search.component.css']
})
export class LandingSearchComponent {

city:any="all";
location:any="all";
doctor:any="all";

  image1 = '../../../assets/landing/landing1.jpg';
  image2 = '../../../assets/landing/landing4.jpg';
  image3 = '../../../assets/landing/landing5.jpg';

  serch(){
    console.log("city",this.city);
    console.log("doctor",this.doctor);
    console.log("location",this.location);
    
  }
  getCity(event:any){
    this.city=event.target.value;
    
    // console.log(event.target.value);
  }
  getSpecialize(event:any){
    this.doctor=event.target.value;

    // console.log(event.target.value);
  }
  getDoctor(event:any){
    this.location=event.target.value;

    // console.log(event.target.value);
  }

}
