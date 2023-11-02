import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { lawerLoginData } from './../loginData/lawerLoginData';
import { userLoginData } from '../loginData/userLoginData';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  urlUser = 'https://avoca-a8fd3-default-rtdb.firebaseio.com/';
  urlLawer = 'http://localhost:5050/registerLawerData';

  userLogData=new BehaviorSubject<any>({});
  lawerLogData=new BehaviorSubject<any>({});

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
  loginLawerJson() {
    return this._HttpClient.get('http://localhost:5050/lawersRegisterData');

    //  {"data":{"id":4,"name":"nader","email":"nader@gmail.com","image":"drink.png","phone":5456454,"role":"user","city_id":1,"plan_id":2}}
  }
  registrLawerMethod(data: any): Observable<any> {
    console.log('dataWithMobile', data);

    return this._HttpClient.post(
      'http://localhost:5050/lawersRegisterData',
      data
    );
  }

  saveUserLoginData(objData: any) {
    let user = new userLoginData(
      objData.name,
      objData.city_id,
      objData.email,
      objData.image,
      objData.mobile,
      objData.password,
      objData.role
    );
    // this.userLogData=user;
    this.userLogData.next(user);
  }
  saveLawerLoginData(objData: any) {
    let lawer = new lawerLoginData(
      objData.name,
      objData.city,
      objData.email,
      objData.image,
      objData.mobile,
      objData.password,
      objData.role,
      objData.about,
      objData.idImage,
      objData.price,
      objData.span
    );
    // this.lawerLogData=lawer;
    this.lawerLogData.next(lawer);
    // console.log("this.lawerLogData",this.lawerLogData.value);
    // console.log("this.userLogData",this.userLogData.value);
  }
  logOut(){
    this.lawerLogData.next({});
    this.userLogData.next({});
    // console.log("this.lawerLogData",this.lawerLogData);
    // console.log("this.userLogData",this.userLogData);
    
  }
}
