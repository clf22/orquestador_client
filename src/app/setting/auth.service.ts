import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  checkAccess(): boolean {
    // Recuperamos el token del sessionStorage
    let token = sessionStorage.getItem('access_token')
    let salida: boolean = false
    if(token) salida = true
    return salida
  }
}
