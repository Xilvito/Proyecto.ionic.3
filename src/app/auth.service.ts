// auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;

  constructor() {}

  // Método para simular el inicio de sesión
  login(username: string, password: string): boolean {
    // Lógica de autenticación - Aquí podrías conectar con tu backend para verificar credenciales
    if (username == '18171461-1' && password == '12345') {
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  // Método para verificar si el usuario está autenticado
  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  // Método para cerrar sesión
  logout(): void {
    this.loggedIn = false;
  }
}
