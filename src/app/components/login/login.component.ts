import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TokenstoreService } from '../../services/tokenstore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private httpclient: HttpClient,private router: Router, private tokenStore : TokenstoreService ) { }

  ngOnInit(): void {
  }

  onLoginClick(username: string, password:string):void{

    var usercerendials = username +':'+ password;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': "Basic " + btoa(usercerendials)
      })
    };


    this.httpclient.post<any>('http://localhost:5000/ifx/v1.1/security/tokens',null,httpOptions)
    .subscribe(p => 
      {
        this.tokenStore.setToken(p.AccessToken);
        this.router.navigate(['endoscopes-app']);      
      }, 
      err =>  
      {
        this.tokenStore.setToken('');
        console.log(err)
      });
    
    console.log( btoa("eb:eb"));
  }
}
