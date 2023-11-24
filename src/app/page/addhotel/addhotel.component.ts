import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hoteles } from 'src/app/hoteles';

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.scss'],
})
export class AddhotelComponent {
  hotel: Hoteles = new Hoteles();
  hotelMock: any;
  id!: number;

  constructor(private ruta: ActivatedRoute, private enrutador: Router) {}

  ngOnInit() {
    let hoteles = localStorage.getItem('hoteles');
    this.hotelMock = JSON.parse(hoteles || '');
  }

  onSubmit() {
    this.agregarHotel();
  }
  agregarHotel() {
    this.hotel.idhotel = this.hotelMock.length;
    this.hotelMock.push(this.hotel);
    localStorage.setItem('hoteles', JSON.stringify(this.hotelMock));
    this.irhotelListar();
  }
  irhotelListar() {
    this.enrutador.navigate(['/homeadmin']);
  }
}
