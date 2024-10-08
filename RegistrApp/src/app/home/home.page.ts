import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  username: string = '';
  password: string = '';
  loginError?: string;
  loginCorrecto?: string;

  constructor(private router: Router) {}

  login() {
    if (this.username === 'alumno' && this.password === 'alumno123') {
      this.loginCorrecto = 'Inicio de sesión exitoso!';
      this.loginError = '';
      this.router.navigate(['/inicio'], { state: { username: this.username } }); 
    } else if (this.username === 'docente' && this.password === 'docente123') {
      this.loginCorrecto = 'Inicio de sesión exitoso!';
      this.loginError = '';
      this.router.navigate(['/inicio-docente'], { state: { username: this.username } }); 
    } else {
      this.loginError = 'Credenciales incorrectas. Inténtalo de nuevo.';
      this.loginCorrecto = '';
    }
  }

  ReestablecerContrasena(event: Event){
    event.preventDefault();
    this.router.navigate(['/reestablecer'])
  }
}

