import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.scss']
})
export class TableUserComponent {
  public usuarios: any = [];
  public tableHeader: any = []

  constructor(
    private http: HttpClient,
    private toast: ToastrService
  ) {}

  async ngOnInit() {
    await this.cargarUsuarios()
  }

  async cargarUsuarios() {
    try {
      let apiUrl: string = 'http://localhost:3000/api/user'
      const httpOptions:any = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      };
      //TODO: CAMBIAR LLAMADA
      this.usuarios = await lastValueFrom(this.http.get(apiUrl, httpOptions));
      this.tableHeader = Object.keys(this.usuarios[0])
      
    } catch (error:any) {
      this.toast.error(error.message)
      console.error(error.status);
    }
  }
}
