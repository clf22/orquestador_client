import { Component } from '@angular/core';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})

export class FormUserComponent {
  public myForm!: FormGroup;
  public iconNewUser:any = faUserPlus
  public visibleForm:boolean = false
  
  constructor(private fb: FormBuilder, private toast: ToastrService) {}

  ngOnInit(){
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phone: [''],
      rol: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.myForm.invalid) {
      this.toast.error('Rellene los campos')
    }
    // Lógica para enviar los datos del formulario
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
