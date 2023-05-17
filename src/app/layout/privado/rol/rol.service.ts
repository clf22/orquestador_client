import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/utils/http.service';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  public data: any = []
  public dataHeader:any

  constructor(
    private request: HttpService,
    private toast: ToastrService,
  ) { }

  async getHeader():Promise<any> {
    try {
      let apiUrl: string = 'http://localhost:3000/api/rol/header'
      const httpOptions:any = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      };
      this.dataHeader = await this.request.request('GET', apiUrl)
      if(!this.data) {
        this.toast.warning('No se han podido cargar las cabeceras los usuarios','¡Advertencia!')
        return
      }
    } catch (error:any) {
      this.toast.error(error.message)
      console.error(error.status);
    }
  }

  async getRoles():Promise<any> {
    try {
      let apiUrl: string = 'http://localhost:3000/api/rol'
      const httpOptions:any = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      };
      //TODO: CAMBIAR LLAMADA
      this.data = await this.request.request('GET', apiUrl)
      if(!this.data) {
        this.toast.warning('No se han podido recuperar los roles', '¡Advertencia!')
        return
      }
      if(this.data.length === 0) {
        this.toast.warning('Actualmente no hay roles configurados en el sistema','¡Advertencia!')
        return
      }
    } catch (error:any) {
      this.toast.error(error.message)
      console.error(error.status);
    }
  }

  async postRol({form}:any):Promise<any> {
    return this.request.request('POST', 'http://localhost:3000/api/rol', {
      body: form,
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    })
  }
}
