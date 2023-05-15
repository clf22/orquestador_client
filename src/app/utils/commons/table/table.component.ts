import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() data?: any[]
  @Input() headers?: []

  constructor() {}

  async ngOnInit() {
    console.log('On init Table component');
  }
}
