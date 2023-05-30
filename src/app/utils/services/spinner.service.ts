import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  public toggleSpinner:Boolean = false
  constructor() { }
}
