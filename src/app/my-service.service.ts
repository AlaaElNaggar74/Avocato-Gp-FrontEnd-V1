import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
  getNames(): string[] {
    return ['mostafa', 'asdas', 'weqr','mosstafa'];
  }
}
