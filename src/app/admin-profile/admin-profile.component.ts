import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css'],
})
export class AdminProfileComponent {
  openBool: any = false;
  openTabs: any = 'all';
  image1 = '../../assets/ourExpert/team2.jpg';
  image2 = '../../../assets/caseLike/case2.jpg';
  image3 = '../../../assets/caseLike/case3.jpg';
  image4 = '../../../assets/caseLike/case4.jpg';
  image5 = '../../../assets/caseLike/case5.jpg';
  image6 = '../../../assets/caseLike/case6.jpg';

  openWindow(pic: any) {
    this.openBool = !this.openBool;
    this.openTabs = pic;
  }
  closeWindow() {
    this.openBool = !this.openBool;
    
  }
}
