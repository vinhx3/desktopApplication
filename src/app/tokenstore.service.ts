import { Injectable } from '@angular/core';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenstoreService {

  constructor(private router : Router) { }

  private token:string;
  
  setToken(token:string)
  {
    this.token = token;
    console.log("Stored token: " + this.token)
  }
  
  getToken():string
  {
    return this.token;
  }

  logout(){
    this.token = null;
    this.router.navigate(['/']);
  }
}
