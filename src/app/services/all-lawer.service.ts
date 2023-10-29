import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AllLawerService {
  constructor(public _HttpClient: HttpClient) {}

  getAllUser():Observable <any>{
    // return this._HttpClient.get('http://127.0.0.1:8000/api/reviews/1');
    return this._HttpClient.get('http:/api/users');  
      // return this._HttpClient.get('http:/api/users');


    // return this._HttpClient.get('https://dummyjson.com/products');
    // return this._HttpClient.get('http://localhost:5050/users');
  }

  getOneUser(id:any):Observable <any>{
    // return this._HttpClient.get('http://127.0.0.1:8000/api/reviews/1');
    // return this._HttpClient.get('http://127.0.0.1:8000/api/users');
    // return this._HttpClient.get(`https://dummyjson.com/products/${id}`);
    // return this._HttpClient.get(`http:/api/users/${id}`);
    return this._HttpClient.get(`http://localhost:5050/users/${id}`);

  }
  getAllLawers():Observable <any>{
    // return this._HttpClient.get('http://127.0.0.1:8000/api/reviews/1');
    // return this._HttpClient.get('http:/api/users');
    // return this._HttpClient.get('https://dummyjson.com/products');
    return this._HttpClient.get('http://localhost:5050/lawers');
  }

  getOneLawer(id:any):Observable <any>{
    // return this._HttpClient.get('http://127.0.0.1:8000/api/reviews/1');
    // return this._HttpClient.get('http://127.0.0.1:8000/api/users');
    // return this._HttpClient.get(`https://dummyjson.com/products/${id}`);
    // return this._HttpClient.get(`http:/api/users/${id}`);
    return this._HttpClient.get(`http://localhost:5050/lawers/${id}`);

  }

  // obj: any = [
  //   {
  //     name: 'a',
  //     age: '15',
  //     price: '51',
  //     type: 'good',
  //     color: 'red',
  //   },
  // ];
}
