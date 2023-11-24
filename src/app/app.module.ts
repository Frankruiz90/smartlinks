import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { HomeAdminComponent } from './page/home-admin/home-admin.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { HotelEditComponent } from './page/hotel-edit/hotel-edit.component';
import { AddhotelComponent } from './page/addhotel/addhotel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReservaComponent } from './page/reserva/reserva.component';
import { FormularioReservaComponent } from './page/formulario-reserva/formulario-reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeAdminComponent,
    HotelListComponent,
    HotelEditComponent,
    AddhotelComponent,
    NavbarComponent,
    ReservaComponent,
    FormularioReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
