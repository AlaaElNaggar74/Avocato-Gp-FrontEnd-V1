import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AllLawerService } from '../services/all-lawer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
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
    _ActivatedRoute: ActivatedRoute,
    public _AuthService: AuthService,
    public _Router: Router
  ) {
    this.lawerId = _ActivatedRoute.snapshot.paramMap.get('id');
    this.lawerfrom = _ActivatedRoute.snapshot.paramMap.get('from');
    this.lawerto = _ActivatedRoute.snapshot.paramMap.get('to');
    _AllLawerService.getOneLawer(this.lawerId).subscribe((data) => {
      this.oneLawerReserv = data;
      // console.log(data);
      
    });
  }

  reservationForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),

    mobile: new FormControl(null, [
      Validators.required,
      // Validators.minLength(11),

      Validators.pattern('^(\\+201|01|00201)[0-2,5]{1}[0-9]{8}'),
      // Validators.pattern('^(\\+201|01|00201)[0-2,5]{1}[0-9]{8}'),
    ]),
  });

  getUserData(formUserData: any) {
    // let obj={...formUserData,{"userID":this.lawerId},this.lawerfrom,this.lawerto}
    formUserData.value.userID = this.lawerId;
    formUserData.value.dateFrom = this.lawerfrom;
    formUserData.value.dateTo = this.lawerto;

    this._AllLawerService
      .reservationMethod(formUserData.value)
      .subscribe((data) => {
        console.log('status', data);
      });

    console.log("----",formUserData.value);
    // this._Router.navigate(['/home']);
    // this._Router.navigate(['/login']);
  }

  // image1 = '../../assets/ourExpert/team5.jpg';
  // image2 = '../../assets/ourExpert/team6.jpg';
}
