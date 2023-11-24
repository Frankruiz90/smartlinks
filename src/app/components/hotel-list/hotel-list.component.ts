import { Router } from '@angular/router';
import { Hoteles } from './../../hoteles';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss'],
})
export class HotelListComponent {
  hoteles!: Hoteles[];

  constructor(private enrutador: Router) {}
  @Input() pagina!: string;
  ngOnInit() {
    this.obtenerHoteles();
  }
  private obtenerHoteles() {
    if (localStorage.getItem('hoteles')) {
      let hoteles = localStorage.getItem('hoteles');
      this.hoteles = JSON.parse(hoteles || '');
    } else {
      this.hoteles = [
        {
          idhotel: 0,
          descripcion: 'Hotel carton',
          habitacionesDisponibles: 5,
          precio: 500.0,
          deshabilitada: false,
          numeroHabitaciones: 10,
          impuesto: 19,
          tipoHabitacion: 'pareja',
          ubicacion: 'Primer piso',
        },
        {
          idhotel: 1,
          descripcion: 'Hotel carton 5',
          habitacionesDisponibles: 15,
          precio: 1500.0,
          deshabilitada: true,
          numeroHabitaciones: 15,
          impuesto: 19,
          tipoHabitacion: 'pareja',
          ubicacion: 'Segundo piso',
        },
      ];
      localStorage.setItem('hoteles', JSON.stringify(this.hoteles));
    }
  }
  editarHotel(id: number) {
    this.enrutador.navigate(['editar-hotel', id]);
  }
  bloquearDesbloquearHotel(id: number) {
    this.hoteles.find((e: any, i: any) => {
      if (e.idhotel == id) {
        this.hoteles[id].deshabilitada = !this.hoteles[id].deshabilitada;
        localStorage.setItem('hoteles', JSON.stringify(this.hoteles));
      }
    });
    this.irhotelListar();
  }
  irhotelListar() {
    this.enrutador.navigate(['/homeadmin']);
  }
  irform(id: number) {
    this.enrutador.navigate(['formulario', id]);
  }
}
