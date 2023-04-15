import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom, tap } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  constructor(private http: HttpClient) {}

  public myFile: File | null | undefined;

  handleFileInput(event: any) {
    this.myFile = event.target.files[0];
    console.log(this.myFile?.name); // imprime el nombre del archivo seleccionado
  }

  public async uploadFile() {
    if (this.myFile) {
      const token = localStorage.getItem('access_token')
      const httpOptions = {
        headers: new HttpHeaders({
          // 'Content-Type': 'multipart/form-data',
          'Authorization': `${token}`
        })
      };

      const formData = new FormData();
      formData.append('myFile', this.myFile, this.myFile.name);
      formData.append('json', JSON.stringify({instanciaDatos:"CSU_facturacion2"}));
      
      try {
        const respuesta = await lastValueFrom(this.http.post('http://172.18.72.42:3777/api/cargaDatos', formData, httpOptions)
          .pipe(
            tap( (res:any) => {})
          )
        );
        console.log(respuesta);
        
        if(respuesta.code === 200) {
          console.log(respuesta.data);
          alert('Fichero subido correctamente')
          this.myFile = null
        }

      } catch (error) {
        console.error(error);
      }
    }
  }

}
