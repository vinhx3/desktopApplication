import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { EndoscopesComponent } from './components/endoscopes/endoscopes.component';
import { JwtInterceptor } from './interceptor/jwt-interceptor'
import { MatTableModule} from '@angular/material/table';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogbookComponent } from './components/logbook/logbook.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EndoscopesComponent,
    DashboardComponent,
    LogbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: 
  [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
