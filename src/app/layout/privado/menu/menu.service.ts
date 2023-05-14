import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuVisible = new BehaviorSubject<boolean>(true);
  menuVisible$ = this.menuVisible.asObservable();

  constructor() {}

  hide(): void {
    this.menuVisible.next(false);
  }

  show():void {
    this.menuVisible.next(true);
  }
}