import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

imagelogo="../../assets/aboutLogo.png"

showsWebIcon = false;
showsPublicIcon = false;

@ViewChild('ourRules') divFive!: ElementRef;

private hideAllIcons() {
  this.showsWebIcon = false;
  this.showsPublicIcon = false;
}

@HostListener('document:scroll', ['$event'])
public onViewportScroll() {
  // ⤵️ Captures / defines current window height when called
  const windowHeight = window.innerHeight;///
  // ⤵️ Captures bounding rectangle of 5th element
  const boundingRectFive = this.divFive.nativeElement.getBoundingClientRect();///
  // ⤵️ Captures bounding rectangle of 8th element
  // const boundingRectEight = this.divEight.nativeElement.getBoundingClientRect();

  // ⤵️ IF the top of the element is greater or = to 0 (it's not ABOVE the viewport)
  // AND IF the bottom of the element is less than or = to viewport height
  // show the corresponding icon after half a second
  // else hide all icons
  if (boundingRectFive.top <= 250 ) {
    setTimeout(() => { this.showsWebIcon = true; }, 500);
    // console.log(this.showsWebIcon);
    // console.log(boundingRectFive);

  }  else {
    this.hideAllIcons();
  }
  // console.log(this.divFive);
  // console.log(windowHeight);
  console.log(boundingRectFive);

}

// onScroll(event: any){
//   console.log("dddddddddddd");
  
// }
}
