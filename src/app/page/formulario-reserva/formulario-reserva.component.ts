import { ActivatedRoute, Router } from '@angular/router';
import { Reserva } from './../../hoteles';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-reserva',
  templateUrl: './formulario-reserva.component.html',
  styleUrls: ['./formulario-reserva.component.scss'],
})
export class FormularioReservaComponent {
  reserva: Reserva = new Reserva();
  id?: number;
  hotelMock: any;
  hotel: any;

  constructor(private ruta: ActivatedRoute, private enrutador: Router) {}

  ngOnInit() {
    let hoteles = localStorage.getItem('hoteles');
    this.id = this.ruta.snapshot.params['id'];
    this.hotelMock = JSON.parse(hoteles || '');
    this.hotel = this.hotelMock.find((e: any) => {
      return e.idhotel == this.id;
    });
  }
  onSubmit() {
    this.guardarReserva();
  }
  guardarReserva() {
    this.hotelMock.find((e: any, i: any) => {
      if (e.idhotel == this.id) {
        this.hotelMock[i].habitacionesDisponibles =
          this.hotel.habitacionesDisponibles - this.reserva.numeroHabitaciones;
        localStorage.setItem('hoteles', JSON.stringify(this.hotelMock));
        localStorage.setItem('reserva', JSON.stringify(this.reserva));
      }
    });
    this.irhotelListar();
  }
  irhotelListar() {
    this.enrutador.navigate(['/reserva']);
  }
}
