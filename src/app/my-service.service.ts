
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  // GET request example
  public get(endpoint: string): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.get(url)
      .pipe(catchError(this.handleError));
  }

  // POST request example
  public post(endpoint: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.post(url, data)
      .pipe(catchError(this.handleError));
  }

  // PUT request example
  put(id: string,endpoint: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}/${id}`;
    return this.http.put(url, data)
      .pipe(catchError(this.handleError));
  }

  // DELETE request example
  public delete(endpoint: string): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    let token="9|COHLS7AECZFUbFOE0gzw1xzAd2HIBRcXYqOQD6ic8e688bf7"
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(url,{headers})
      .pipe(catchError(this.handleError));
  }

  // Handle errors from API calls
  private handleError(error: any): Observable<never> {
    console.error('API Error:', error.response);
    throw error;
  }
   
}

