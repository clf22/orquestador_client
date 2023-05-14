import { Component } from '@angular/core';
import { faRobot, faPlay, faUsers, faGear, faBuilding, faBars, faDoorClosed, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public iconMenu = faBars
  public iconDoorOpen = faDoorOpen
  public iconDoorClosed = faDoorClosed
  public menuVisible = false;
  private toggleMenu = false

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.menuVisible$.subscribe(visible => this.menuVisible = visible)
  }

  componentes = [
    {name:'PROCESOS', icon: faRobot, ruta: '/upload' },
    {name:'TRABAJOS', icon: faPlay, ruta: '/upload' },
    {name:'USUARIOS', icon: faUsers, ruta: '/upload'},
    {name:'EMPRESAS', icon: faBuilding, ruta: '/upload' },
    {name:'ADMINISTRACIÓN', icon: faGear, ruta: '/upload' }]

  eventToggleMenu() {
    const menu = document.querySelector('menu')
    if (!this.toggleMenu && menu) {
      menu.classList.add('menu_open');
    }
    if (this.toggleMenu && menu) {
      menu.classList.remove('menu_open');
    }
    this.toggleMenu = !this.toggleMenu
  }

}
