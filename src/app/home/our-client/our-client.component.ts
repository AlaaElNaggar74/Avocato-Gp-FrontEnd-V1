import { Component } from '@angular/core';
import { AllLawerService } from 'src/app/services/all-lawer.service';
import { Swiper } from 'swiper';
// import { AllLawerService } from '../services/all-lawer.service';

@Component({
  selector: 'app-our-client',
  templateUrl: './our-client.component.html',
  styleUrls: ['./our-client.component.css'],
})
export class OurClientComponent {
  image = '../../../assets/client/q2.jpg';
  image2 = '../../../assets/client/q3.jpg';
  image3 = '../../../assets/client/q8.jpg';

  objX: any;
  constructor(_AllLawerService: AllLawerService) {
    // this.objX = _AllLawerService.obj;
    // debugger
    
    _AllLawerService.getAllUser().subscribe((values) => {
      // debugger
      // this.objX = values.data;
      this.objX = values;
      console.log(values);
    });
  }
}
