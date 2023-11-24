import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hoteles } from 'src/app/hoteles';

@Component({
  selector: 'app-hotel-edit',
  templateUrl: './hotel-edit.component.html',
  styleUrls: ['./hotel-edit.component.scss'],
})
export class HotelEditComponent {
  hotel: any;
  hotelMock: any;
  id!: number;

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
    this.editarhotel();
  }
  editarhotel() {
    this.hotelMock.find((e: any, i: any) => {
      if (e.idhotel == this.id) {
        this.hotelMock[i] = this.hotel;
        localStorage.setItem('hoteles', JSON.stringify(this.hotelMock));
      }
    });
    this.irhotelListar();
  }
  irhotelListar() {
    this.enrutador.navigate(['/homeadmin']);
  }
}
