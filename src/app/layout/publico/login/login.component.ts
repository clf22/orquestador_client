import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuService } from '../../privado/menu/menu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public myForm!:FormGroup;
  
  constructor(private fb:FormBuilder, private http:HttpClient, private router:Router, private toast: ToastrService, private menuService: MenuService) {}

  ngOnInit(): void {
    sessionStorage.clear()
    this.menuService.hide()
    this.myForm = this.createMyForm();
  }

  private createMyForm():FormGroup {
    return this.fb.group ({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  public async submitFormulario () {
    // if(this.myForm.invalid) {
    //   alert('Debe introducir usuario y contraseña')
    // } else {
    //   alert('Se va a enviar los datos al servidor')
    // }

    const apiUrl = 'http://172.18.72.42:3702/api/authenticateSherpa'; // 'http://172.18.72.42:3702/api/authenticate';
    const credentials = {
      username: this.myForm.value.usuario,
      password: this.myForm.value.password
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    const body = new URLSearchParams();
    // body.set('json', JSON.stringify({'login': 'rootValidaciones', 'passwd': 'Linux100'}))
    body.set('username', credentials.username);
    body.set('password', credentials.password);

    // console.log(apiUrl, body.toString(), httpOptions);
    
    try {
      /*TODO: CAMBIAR LLAMADA
        let respuesta = await lastValueFrom(this.http.post(apiUrl, body.toString(), httpOptions)
        .pipe(
          tap( (res:any) => {
            // acción a realizar en caso de respuesta exitosa
          })
        ));
      console.log(respuesta);
        
      if(respuesta.code === 200) {
        sessionStorage.setItem('access_token', respuesta.data);
        this.router.navigate(['/upload']);
      }*/
      sessionStorage.setItem('access_token', 'prueba');
      this.menuService.show()
      this.router.navigate(['/upload']);
    } catch (error:any) {
      this.toast.error(error.message)
      console.error(error.status);
    }
  }
}
