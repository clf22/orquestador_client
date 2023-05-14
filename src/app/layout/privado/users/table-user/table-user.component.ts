import { Component } from '@angular/core';
import { TableUserService } from './table-user.service';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.scss']
})
export class TableUserComponent {
  constructor(
    public tableUserServices: TableUserService
  ) {}

  async ngOnInit() {
    console.log('On init Table User component');
    await this.tableUserServices.cargarUsuarios()
  }
}
