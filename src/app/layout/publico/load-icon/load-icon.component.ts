import { Component } from '@angular/core';
import { faRobot, faJedi } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-load-icon',
  templateUrl: './load-icon.component.html',
  styleUrls: ['./load-icon.component.scss']
})
export class LoadIconComponent {
  public icon = faRobot
}
