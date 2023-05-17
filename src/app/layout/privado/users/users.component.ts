import { Component } from '@angular/core';
import { UserService } from './users.service';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  public name='user'
  public iconForm = faUserPlus

  constructor(public userService:UserService) {}

  async ngOnInit() {
    console.log('On init User component');
    await this.userService.getHeader()
    await this.userService.getUsers()
  }

}
