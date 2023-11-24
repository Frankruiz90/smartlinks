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
    let dataLogin = this.mockLogin.filter((e: any) => {
      if (e.user == this.login.usuario) {
        localStorage.setItem('rol', e.rol);
        // e.rol =='admin'? this.enrutador.navigate(['/homeadmin']):this.enrutador.navigate(['/reserva']);
      } else {
        alert('Usuaro no encontrado');
        this.enrutador.navigate(['/']);
      }
    });
  }
}
