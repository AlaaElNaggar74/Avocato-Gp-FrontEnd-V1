import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public _router: Router) {}

  submitGameForm(form: any) {
    console.log(form);
  }

  bckHome() {
    this._router.navigate(['register']);
  }
}
