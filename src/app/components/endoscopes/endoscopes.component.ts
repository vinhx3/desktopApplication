import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-endoscopes',
  templateUrl: './endoscopes.component.html',
  styleUrls: ['./endoscopes.component.css']
})
export class EndoscopesComponent implements OnInit {

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    var asd = this.httpClient.get('http://localhost:5000/ifx/v1.1/display/endoscopes')
    .subscribe(val => 
      {
        console.log(val)
      }, 
      err => {

      });
   
  }

}
