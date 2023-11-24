import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { HomeAdminComponent } from './page/home-admin/home-admin.component';
import { HotelEditComponent } from './page/hotel-edit/hotel-edit.component';
import { AddhotelComponent } from './page/addhotel/addhotel.component';
import { ReservaComponent } from './page/reserva/reserva.component';
import { FormularioReservaComponent } from './page/formulario-reserva/formulario-reserva.component';

const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"login", component: LoginComponent},
  {path:"homeadmin", component: HomeAdminComponent},
  {path:"agregar-hotel", component: AddhotelComponent},
  {path:"reserva", component: ReservaComponent},
  {path:"editar-hotel/:id", component: HotelEditComponent},
  {path:"formulario/:id", component: FormularioReservaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
