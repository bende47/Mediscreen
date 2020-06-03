import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Templates/header/header.component';
import { MenuComponent } from './Templates/menu/menu.component';
import { DashboardComponent } from './Templates/dashboard/dashboard.component';
import { PatientComponent } from './Pages/patient/patient.component';
import { HistoriqueComponent } from './Pages/historique/historique.component';

import { LoginComponent } from './Templates/login/login.component';
import { HttpClientModule } from  '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from "@angular/forms";

import { ToastrModule } from 'ng6-toastr-notifications';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LocationStrategy, DatePipe } from "@angular/common";
import { HashLocationStrategy } from "@angular/common";
import { DetailhistoriqueComponent } from './Pages/detailhistorique/detailhistorique.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    DashboardComponent,
    PatientComponent,
    HistoriqueComponent, 
    LoginComponent,
    AccueilComponent,
    DetailhistoriqueComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AppRoutingModule,
    BrowserAnimationsModule, ToastrModule.forRoot(),

  ],
  providers: [DatePipe,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
