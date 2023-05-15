import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/utils/http.service';

@Injectable({
  providedIn: 'root'
})
export class TableUserService {
  public data: any
  public dataHeader:any
  constructor(
    private request: HttpService,
    private toast: ToastrService,
  ) { }

  async cargarUsuarios():Promise<any> {
    try {
      let apiUrl: string = 'http://localhost:3000/api/user'
      const httpOptions:any = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      };
      //TODO: CAMBIAR LLAMADA
      this.data = await this.request.request('GET', apiUrl)
      this.dataHeader = Object.keys(this.data[0])
    } catch (error:any) {
      this.toast.error(error.message)
      console.error(error.status);
    }
  }
}
