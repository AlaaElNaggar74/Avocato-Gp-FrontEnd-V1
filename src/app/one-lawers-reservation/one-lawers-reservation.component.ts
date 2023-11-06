import { UsersService } from 'src/app/services/projectApis/users.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AllLawerService } from '../services/all-lawer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-one-lawers-reservation',
  templateUrl: './one-lawers-reservation.component.html',
  styleUrls: ['./one-lawers-reservation.component.css'],
})
export class OneLawersReservationComponent implements OnInit {
  oneLawerReserv: any;
  lawerId: any;
  dateId: any;
  lawerfrom: any;
  lawerto: any;
  amount = '300';
  paypal_d_none = false;
  localStorValue: any;
  userInfo: any;
  uploadeImage = '../../assets/imageDataBase/';

  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;
  constructor(
    public _AllLawerService: AllLawerService,
    _ActivatedRoute: ActivatedRoute,
    public _AuthService: AuthService,
    public _Router: Router,
    public _UsersService: UsersService
  ) {
    this.lawerId = _ActivatedRoute.snapshot.paramMap.get('id');
    this.dateId = _ActivatedRoute.snapshot.paramMap.get('dateId');
    this.lawerfrom = _ActivatedRoute.snapshot.paramMap.get('start_hour');
    this.lawerto = _ActivatedRoute.snapshot.paramMap.get('end_hour');
    _UsersService.getOneLawerApi(this.lawerId).subscribe((data) => {
      this.oneLawerReserv = data;
      // console.log(data);
    });

    if (localStorage.getItem('UserData')) {
      this.localStorValue = localStorage.getItem('UserData');
      let objData = JSON.parse(this.localStorValue);
      this.userInfo = objData;

      // console.log('this.isLogin', this._AuthService.isLogin);
    }
  }

  reservationForm: FormGroup = new FormGroup({
    client_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    client_email: new FormControl(null, [
      Validators.required,
      Validators.email,
    ]),

    client_phone: new FormControl(null, [
      Validators.required,
      // Validators.minLength(11),

      Validators.pattern('^(\\+201|01|00201)[0-2,5]{1}[0-9]{8}'),
      // Validators.pattern('^(\\+201|01|00201)[0-2,5]{1}[0-9]{8}'),
    ]),
    appointment_date: new FormControl(null, [Validators.required]),
  });

  getUserData(formUserData: any) {
    // let obj={...formUserData,{"userID":this.lawerId},this.lawerfrom,this.lawerto}
    // formUserData.value.user_id = this.lawerId;
    formUserData.value.lawyer_time_id = this.dateId;
    formUserData.value.user_id = this.userInfo.id;
    // formUserData.value.start_hour = this.lawerfrom;
    // formUserData.value.end_hour = this.lawerto;

    // this._AllLawerService
    //   .reservationMethod(formUserData.value)
    //   .subscribe((data) => {
    //     console.log('status', data);
    //   });

    this._UsersService.createAppontment(formUserData.value).subscribe((res) => {
      console.log('createAppontment', res);
      this._Router.navigate(['/home']);
    });
    console.log('----', formUserData.value);
    // this._Router.navigate(['/login']);
  }

  // image1 = '../../assets/ourExpert/team5.jpg';
  // image2 = '../../assets/ourExpert/team6.jpg';
  ngOnInit(): void {
    window.paypal
      .Buttons({
        style: {
          layout: 'horizontal',
          color: 'blue',
          shape: 'rect',
          label: 'paypal',
        },
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: this.amount,
                  currency_code: 'USD',
                },
              },
            ],
          });
        },
        onApprove: (data: any, actions: any) => {
          // console.log('-----', actions);
          // console.log('-----', data.orderID);
          // this.reservationForm.value.userID = this.lawerId;
          // this.reservationForm.value.userID = this.dateId;
          // this.reservationForm.value.dateFrom = this.lawerfrom;
          // this.reservationForm.value.dateTo = this.lawerto;
          
          // this._AllLawerService
          //   .reservationMethod(this.reservationForm.value)
          //   .subscribe((data) => {
            //     console.log('status', data);
            //     // this._Router.navigate(['/home']);
            //   });
            this.reservationForm.value.lawyer_time_id = this.dateId;
            this.reservationForm.value.user_id = this.userInfo.id;
            this.reservationForm.value.order_id = data.orderID;
            // formUserData.value.start_hour = this.lawerfrom;
            // formUserData.value.end_hour = this.lawerto;
        
            // this._AllLawerService
            //   .reservationMethod(formUserData.value)
            //   .subscribe((data) => {
            //     console.log('status', data);
            //   });
        
            this._UsersService.createAppontment(this.reservationForm.value).subscribe((res) => {
              console.log('createAppontment', res);
              this._Router.navigate(['/home']);
            });
        },
        onError: (error: any) => {
          console.log('---xx---', error);
        },
      })
      .render(this.paymentRef.nativeElement);
    console.log();
  }
  getValidate(event: any) {
    console.log(event);

    if (this.reservationForm.valid) {
      console.log('Valid');
    } else {
      console.log('NOT VALID');
    }
  }
}
