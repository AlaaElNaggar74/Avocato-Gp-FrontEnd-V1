import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  getCurrentUser() {
    // For demonstration purposes, let's create a simple user object with an ID
    const currentUser = {
      id: 1, // Replace this with the actual ID of the current user in your system
      username: 'exampleUser' // Additional user details if needed
      // You might also get this information from your authentication service or API
    };

    return currentUser;
  }
}
