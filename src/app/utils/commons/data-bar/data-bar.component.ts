import { Component } from '@angular/core';

@Component({
  selector: 'app-data-bar',
  templateUrl: './data-bar.component.html',
  styleUrls: ['./data-bar.component.scss']
})
export class DataBarComponent {
  public percentage: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]


  public getBarClass(percentage: number): string {
    if (percentage < 70) {
      return 'success-bar';
    } else if (percentage >= 70 && percentage <= 80) {
      return 'warn-bar';
    } else if (percentage > 80 && percentage <= 90) {
      return 'alert-bar';
    } else if (percentage > 90 && percentage <= 100) {
      return 'critical-bar';
    }
    return '';
  }  
}
