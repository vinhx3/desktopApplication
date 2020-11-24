import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHeaders, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenstoreService} from '../services/tokenstore.service'

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {

  constructor(private tokenService : TokenstoreService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
    if(req.headers.has("Authorization"))
    {
      return next.handle(req);
    }

    const authReq = req.clone({
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+ this.tokenService.getToken()
      })
    });

    console.log(req.headers);
      return next.handle(authReq);
  }
}
