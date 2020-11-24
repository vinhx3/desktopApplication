import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenstoreService {

  constructor() { }

  token:string;
  setToken(token:string)
  {
    this.token = token;
    console.log("Stored token: " + this.token)
  }
  getToken():string
  {
    return this.token;
  }
}
