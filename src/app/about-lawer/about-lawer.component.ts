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
    public _ActivatedRoute: ActivatedRoute
  ) {
    this.id = _ActivatedRoute.snapshot.paramMap.get('id');
    
    _AllLawerService.getOneLawer(this.id).subscribe((data) => {
      this.lawer = data;
      console.log(data);
    });

    _AllLawerService.getOneReviws(this.id).subscribe((data) => {
      this.Reviws = data;
      console.log(data);
    });
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
