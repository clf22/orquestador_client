import { Component } from '@angular/core';
import { faRobot, faPlay, faUsers, faGear, faBuilding, faBars, faDoorClosed, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { MenuService } from './menu.service';
import { Location } from '@angular/common';


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

  constructor(
    private menuService: MenuService,
    private location: Location 
  ) {}

  ngOnInit(): void {
    this.menuService.menuVisible$.subscribe(visible => this.menuVisible = visible)
    this.checkActive(this.location.path())
  }

  componentes = [
    {name:'PROCESOS', icon: faRobot, ruta: '/process', active: true },
    {name:'TRABAJOS', icon: faPlay, ruta: '/jobs', active: false },
    {name:'USUARIOS', icon: faUsers, ruta: '/users', active: false},
    {name:'EMPRESAS', icon: faBuilding, ruta: '/company', active: false },
    {name:'ADMINISTRACIÓN', icon: faGear, ruta: '/config', active: false }
  ]

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

  closeMenu (route:string) {
    this.checkActive(route)
    const menu = document.querySelector('menu')
    if (this.toggleMenu && menu) {
      menu.classList.remove('menu_open');
    }
    this.toggleMenu = false
  }

  checkActive(route:string) {
    for(let i of this.componentes) {
      if(i.ruta === route) {
        i.active = true
      } else {
        i.active = false
      }
    }
  }
}
