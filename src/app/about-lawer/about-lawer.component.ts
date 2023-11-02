import { UsersService } from 'src/app/services/projectApis/users.service';
import { Component } from '@angular/core';
import { AllLawerService } from '../services/all-lawer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-lawer',
  templateUrl: './about-lawer.component.html',
  styleUrls: ['./about-lawer.component.css'],
})
export class AboutLawerComponent {
  id: any = '';

  lawer: any = [];
  Reviws: any = [];

  constructor(
    public _AllLawerService: AllLawerService,
    public _ActivatedRoute: ActivatedRoute,
    public _UsersService:UsersService
  ) {
    this.id = _ActivatedRoute.snapshot.paramMap.get('id');

    _AllLawerService.getOneLawer(this.id).subscribe((data) => {
      // this.lawer = data;
      // console.log(data);
    });
    _AllLawerService.getOneLawerApi(this.id).subscribe((data) => {
      this.lawer = data.data;
      // console.log(data.data);
    });
    // _AllLawerService.deleteOneLawerApi(this.id).subscribe((data) => {
    //   // this.lawer = data.data;
    //   console.log(data.data);
    // });

    _AllLawerService.getOneReviws(this.id).subscribe((data) => {
      // this.Reviws = data;
      // console.log(data);
    });
    _UsersService.getAllReviews(this.id).subscribe((data) => {
      this.Reviws = data.data;
      console.log(this.Reviws);
    });
  
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
