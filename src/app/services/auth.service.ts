import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  urlUser = 'https://avoca-a8fd3-default-rtdb.firebaseio.com/';
  urlLawer = 'http://localhost:5050/registerLawerData';
  constructor(public _HttpClient: HttpClient) {}

  registrUserMethod(formLoginData: any): Observable<any> {
    console.log(formLoginData);

    return this._HttpClient.post(
      'http://127.0.0.1:8000/api/users',
      formLoginData
    );

    //  {"data":{"id":4,"name":"nader","email":"nader@gmail.com","image":"drink.png","phone":5456454,"role":"user","city_id":1,"plan_id":2}}
  }
  registrUserJson(formLoginData: any): Observable<any> {
    console.log(formLoginData);

    return this._HttpClient.post(
      'http://localhost:5050/usersRegisterData',
      formLoginData
    );

    //  {"data":{"id":4,"name":"nader","email":"nader@gmail.com","image":"drink.png","phone":5456454,"role":"user","city_id":1,"plan_id":2}}
  }

  loginUserJson() {
    return this._HttpClient.get('http://localhost:5050/usersRegisterData');

    //  {"data":{"id":4,"name":"nader","email":"nader@gmail.com","image":"drink.png","phone":5456454,"role":"user","city_id":1,"plan_id":2}}
  }
  registrLawerMethod(data: any): Observable<any> {
    console.log('dataWithMobile', data);

    return this._HttpClient.post(this.urlLawer, data);
  }
}
