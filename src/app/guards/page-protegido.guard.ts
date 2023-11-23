// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service'; // Debes tener un servicio de autenticación

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Verificar la autenticación del usuario, por ejemplo:
    if (this.authService.isLoggedIn()) {
      return true; // Permitir el acceso a la página de inicio
    } else {
      // Redirigir a la página de login si el usuario no está autenticado
      this.router.navigate(['/login']);
      return false;
    }
  }
}

