import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TableUserService } from './table-user/table-user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  

  constructor(
    private tableUserServices: TableUserService
  ) {}

  async ngOnInit() {
    console.log('On init User component');
    
    await this.tableUserServices.cargarUsuarios()
  }

}
