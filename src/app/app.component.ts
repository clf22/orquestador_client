import { Component } from '@angular/core';
import { AuthService } from './setting/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'my-app';
  menu: boolean = false
  constructor(public authService: AuthService){}
  async ngOnInit() {
    this.menu = this.authService.checkAccess()
  }
}
