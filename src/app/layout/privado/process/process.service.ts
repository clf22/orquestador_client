import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/utils/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {
  public data: any
  public dataHeader:any

  constructor(
    private request: HttpService,
    private toast: ToastrService,
  ) { }

  async getData():Promise<any> {
    try {
      let apiUrl: string = 'http://localhost:3000/api/process'
      const httpOptions:any = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      };
      //TODO: CAMBIAR LLAMADA
      this.data = await this.request.request('GET', apiUrl)
      if(!this.data) {
        this.toast.warning('No se han podido recuperar los procesos','¡Advertencia!')
        return
      }
      if(this.data.length === 0) {
        this.toast.warning('Actualmente no hay procesos registrados en el sistema','¡Advertencia!')
        return
      }
      //this.dataHeader = Object.keys(this.data[0])
    } catch (error:any) {
      this.toast.error(error.message, 'GET DATA')
      console.error(error.status);
    }
  }

  async getHeader():Promise<any> {
    try {
      let apiUrl: string = 'http://localhost:3000/api/process/header'
      const httpOptions:any = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      };
      //TODO: CAMBIAR LLAMADA
      this.dataHeader = await this.request.request('GET', apiUrl)
      if(!this.dataHeader) {
        this.toast.warning('No se han podido cargar las cabeceras los procesos','¡Advertencia!')
        return
      }
      //this.dataHeader = Object.keys(this.data[0])
    } catch (error:any) {
      this.toast.error(error.message, 'GET HEADER')
      console.error(error.status);
    }
  }

  async create({form}:any):Promise<any> {
    return this.request.request('POST', 'http://localhost:3000/api/process', {
      body: form,
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    })
  }
}
