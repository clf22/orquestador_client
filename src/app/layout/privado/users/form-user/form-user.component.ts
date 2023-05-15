import { Component } from '@angular/core';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/utils/http.service';
import { HttpHeaders } from '@angular/common/http';
import { TableUserComponent } from '../table-user/table-user.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})

export class FormUserComponent {
  public myForm!: FormGroup;
  public iconNewUser:any = faUserPlus
  public visibleForm:boolean = false
  
  constructor(
    private fb: FormBuilder,
    private toast: ToastrService,
    private http: HttpService,
    public userService: UserService
  ){
  }

  async ngOnInit(){
    console.log('On init Form User component');
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      passwd: ['', Validators.required],
      phone: [''],
      idRol: ['', Validators.required]
    });
    await this.userService.getRoles()
  }

  async onSubmit() {
    if(this.myForm.invalid) {
      this.toast.error('Rellene los campos')
      return
    }
    let resp = await this.http.request('POST', 'http://localhost:3000/api/user', {
      body: this.myForm.value,
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    })

    this.toast.success('Usuario creado correctamente', 'Exito!')
    this.userService.cargarUsuarios()
  }

  public toggleForm() {
    let form:any = document.querySelector('div .form')
    let newUserButton:any = document.querySelector('div .form-container button')
    //console.log('click', form);
    
    if (form) {
      if(!this.visibleForm) {
        newUserButton.classList.add('form-active')
        form.classList.remove('form-hide');
        form.classList.add('form-open');
      } else {
        newUserButton.classList.remove('form-active')
        form.classList.remove('form-open');
        form.classList.add('form-hide');
      }
    }
    this.visibleForm = !this.visibleForm
  }
}
