import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TokenstoreService } from '../../tokenstore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private httpclient: HttpClient,private router: Router, private tokenStore : TokenstoreService ) { }

  ngOnInit(): void {
  }

  onLoginClick():void{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': "Basic " + btoa('eb:eb')
      })
    };


    var res = this.httpclient.post<any>('http://localhost:5000/ifx/v1.1/security/tokens',null,httpOptions)
    .subscribe(p => 
      {
        console.log(p.AccessToken)
        this.router.navigate(['endoscopes-app']);

        this.tokenStore.setToken(p.AccessToken);
      }, 
      err =>  
      {
        this.tokenStore.setToken('');
        console.log(err)
      });
    
    console.log( btoa("eb:eb"));
  }
}
