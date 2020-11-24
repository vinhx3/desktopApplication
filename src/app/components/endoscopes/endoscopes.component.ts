import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Endoscope } from '../../models/endoscope'
import {TokenstoreService} from '../../tokenstore.service'

@Component({
  selector: 'app-endoscopes',
  templateUrl: './endoscopes.component.html',
  styleUrls: ['./endoscopes.component.css']
})



export class EndoscopesComponent implements OnInit {

  constructor(private httpClient : HttpClient, private tokenService: TokenstoreService) { }

  dataSource:Endoscope[] = null;

  ngOnInit(): void {
    
    this.httpClient.get<Endoscope[]>('http://localhost:5000/ifx/v1.1/display/endoscopes')
    .subscribe(val => 
      {
        console.log(val);
        this.dataSource = val;
      }, 
      err => {

      });
   
  }

  logoutClick() : void
  {
    this.tokenService.logout();
  }

}
