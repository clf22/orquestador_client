import { Component } from '@angular/core';
import { ProcessService } from './process.service';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent {
  public name='process'
  // public iconForm = faUserPlus

  constructor(public processService:ProcessService) {}

  async ngOnInit() {
    console.log('On init User component');
    await this.processService.getHeader()
    await this.processService.getData()
  }
}
