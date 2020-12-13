import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Logbook } from '../../models/logbook'
import {TokenstoreService} from '../../services/tokenstore.service'

@Component({
  selector: 'app-logbook',
  templateUrl: './logbook.component.html',
  styleUrls: ['./logbook.component.css']
})
export class LogbookComponent implements OnInit {

  constructor(private httpClient : HttpClient, private tokenService: TokenstoreService) { }

  dataSource:Logbook[] = null;

  ngOnInit(): void {
    
    this.httpClient.get<Logbook[]>('http://localhost:5000/ifx/v1.1/display/logbook')
    .subscribe(val => 
      {
        console.log(val[639].User.Id);
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
