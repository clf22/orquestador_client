import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.scss']
})
export class TableUserComponent {
  constructor(
    public userService: UserService
  ) {}

  async ngOnInit() {
    console.log('On init Table User component');
    await this.userService.cargarUsuarios()
    await this.userService.cabeceraUsuarios()
  }
}
