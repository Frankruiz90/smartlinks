import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/hoteles';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login: Login = new Login();
  mockLogin: any = [
    {
      user: 'user1',
      pass: 'ddd',
      rol: 'admin',
    },
    {
      user: 'user2',
      pass: 'ddd',
      rol: 'client',
    },
    {
      user: 'user3',
      pass: 'ddd',
      rol: 'vendedor',
    },
  ];

  constructor(private ruta: ActivatedRoute, private enrutador: Router) {}

  onSubmit() {
    this.userVerification();
  }
  userVerification() {
    let dataLogin = this.mockLogin.find((e: any) => {
       return e.user == this.login.usuario;
      });
    if (dataLogin != undefined && dataLogin.rol == 'admin') {
      this.enrutador.navigate(['/homeadmin']);
    } else if (dataLogin != undefined && dataLogin.rol == 'client') {
      this.enrutador.navigate(['/reserva']);
    } else if (dataLogin != undefined && dataLogin.rol == 'vendedor') {
      this.enrutador.navigate(['/reserva']);
    }else if (dataLogin == undefined) {
      alert('Usuario no encontrado')
      this.enrutador.navigate(['/']);
    }
    localStorage.setItem('rol',dataLogin.rol);
  }
}
