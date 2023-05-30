import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/utils/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  public data: any = []
  public dataHeader:any

  constructor(
    private request: HttpService,
    private toast: ToastrService,
  ) { }

  async getHeader():Promise<any> {
    try {
      let apiUrl: string = 'http://localhost:3000/api/company/header'
      const httpOptions:any = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      };
      this.dataHeader = await this.request.request('GET', apiUrl)
      if(!this.data) {
        this.toast.warning('No se han podido cargar las cabeceras las empresas','¡Advertencia!')
        return
      }
    } catch (error:any) {
      this.toast.error(error.message)
      console.error(error.status);
    }
  }

  async getData():Promise<any> {
    try {
      let apiUrl: string = 'http://localhost:3000/api/company'
      const httpOptions:any = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      };
      //TODO: CAMBIAR LLAMADA
      this.data = await this.request.request('GET', apiUrl)
      if(!this.data) {
        this.toast.warning('No se han podido recuperar las empresas', '¡Advertencia!')
        return
      }
      if(this.data.length === 0) {
        this.toast.warning('Actualmente no hay empresas configuradas en el sistema','¡Advertencia!')
        return
      }
    } catch (error:any) {
      this.toast.error(error.message)
      console.error(error.status);
    }
  }

  async create({form}:any):Promise<any> {
    return this.request.request('POST', 'http://localhost:3000/api/company', {
      body: form,
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    })
  }
}
