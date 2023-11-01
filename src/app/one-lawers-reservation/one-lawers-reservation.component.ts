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
  lawerfrom: any;
  lawerto: any;
  amount = '300';
  paypal_d_none = false;
  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;
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
      Validators.maxLength(10),
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

    console.log('----', formUserData.value);
    // this._Router.navigate(['/home']);
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
          console.log('-----', actions);
          console.log('-----', data.orderID);
          this.reservationForm.value.userID = this.lawerId;
          this.reservationForm.value.dateFrom = this.lawerfrom;
          this.reservationForm.value.dateTo = this.lawerto;
          this.reservationForm.value.orderID = data.orderID;

          this._AllLawerService
            .reservationMethod(this.reservationForm.value)
            .subscribe((data) => {
              console.log('status', data);
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
  getValidate(event:any){
    console.log(event);
    
    if (this.reservationForm.valid) {
      console.log("Valid");
      
      
    }else{
      console.log("NOT VALID");
      
    }
  }
}
