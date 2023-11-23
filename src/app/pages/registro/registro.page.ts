import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss'],
})
export class RegistroPage {

  constructor() {}

  registrar() {
    // Aquí puedes agregar la lógica para procesar el registro
    // Por ejemplo, enviar los datos a un servicio o hacer alguna validación
    console.log('Registrarse...');
  }
}
