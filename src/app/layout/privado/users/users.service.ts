import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/utils/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public data: any
  public dataHeader:any

  constructor(
    private request: HttpService,
    private toast: ToastrService,
  ) { }

  async getUsers():Promise<any> {
    try {
      let apiUrl: string = 'http://localhost:3000/api/user'
      const httpOptions:any = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      };
      //TODO: CAMBIAR LLAMADA
      this.data = await this.request.request('GET', apiUrl)
      if(!this.data) {
        this.toast.warning('No se han podido recuperar los usuarios','¡Advertencia!')
        return
      }
      if(this.data.length === 0) {
        this.toast.warning('Actualmente no hay usuarios registrados en el sistema','¡Advertencia!')
        return
      }
      //this.dataHeader = Object.keys(this.data[0])
    } catch (error:any) {
      this.toast.error(error.message)
      console.error(error.status);
    }
  }

  async getHeader():Promise<any> {
    try {
      let apiUrl: string = 'http://localhost:3000/api/user/header'
      const httpOptions:any = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      };
      //TODO: CAMBIAR LLAMADA
      this.dataHeader = await this.request.request('GET', apiUrl)
      if(!this.data) {
        this.toast.warning('No se han podido cargar las cabeceras los usuarios','¡Advertencia!')
        return
      }
      //this.dataHeader = Object.keys(this.data[0])
    } catch (error:any) {
      this.toast.error(error.message)
      console.error(error.status);
    }
  }
}
