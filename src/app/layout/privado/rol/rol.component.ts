import { Component } from '@angular/core';
import { RolService } from './rol.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.scss']
})
export class RolComponent {
  public name='rol'
  constructor(
    public rolService: RolService
  ) {}

  async ngOnInit() {
    await this.rolService.getHeader()
    await this.rolService.getRoles()
  }
}
