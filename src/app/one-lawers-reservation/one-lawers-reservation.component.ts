import { Component } from '@angular/core';
import { AllLawerService } from '../services/all-lawer.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-one-lawers-reservation',
  templateUrl: './one-lawers-reservation.component.html',
  styleUrls: ['./one-lawers-reservation.component.css'],
})
export class OneLawersReservationComponent {
  oneLawerReserv: any;
  lawerId: any;
  lawerfrom: any;
  lawerto: any;
  constructor(
    public _AllLawerService: AllLawerService,
    _ActivatedRoute: ActivatedRoute
  ) {
    this.lawerId = _ActivatedRoute.snapshot.paramMap.get('id');
    this.lawerfrom = _ActivatedRoute.snapshot.paramMap.get('from');
    this.lawerto = _ActivatedRoute.snapshot.paramMap.get('to');
    _AllLawerService.getOneLawer(this.lawerId).subscribe((data) => {
      this.oneLawerReserv = data;
    });
  }

  image1 = '../../assets/ourExpert/team5.jpg';
  image2 = '../../assets/ourExpert/team6.jpg';
}
