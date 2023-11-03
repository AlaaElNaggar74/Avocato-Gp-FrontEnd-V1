import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(public _HttpClient: HttpClient) {}
  registrUserApi(formLoginData: any): Observable<any> {
    console.log(formLoginData);

    return this._HttpClient.post(
      'http://127.0.0.1:8000/api/users',
      formLoginData
    );
  }
  registrLawerApi(formLoginData: any): Observable<any> {
    console.log(formLoginData);

    return this._HttpClient.post(
      'http://127.0.0.1:8000/api/lawyers',
      formLoginData
    );
  }
  getUserApi(): Observable<any> {
    return this._HttpClient.get('http://127.0.0.1:8000/api/users');
  }
  getLawerApi(): Observable<any> {
    return this._HttpClient.get('http://127.0.0.1:8000/api/lawyers');
  }
  getCitiesApi(): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/cities`);
  }

  getspecializationsApi(): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/specializations`);
  }

  getAllGroupsApi(): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/groups`);
  }
  getAllReviews(id:any): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/reviews/${id}`);
  }
  loginFun(data:any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:8000/sanctum/token`,data);
  }
  getGroupAsAdmin(id:any): Observable<any> {

    return this._HttpClient.get(`http://127.0.0.1:8000/api/users/${id}`);
    
  }
}
