import { Component } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  public name='usuario'

  constructor(public userService:UserService) {}

  async ngOnInit() {
    console.log('On init User component');
    await this.userService.getHeader()
    await this.userService.getUsers()
  }

}
