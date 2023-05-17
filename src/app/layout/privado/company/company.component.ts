import { Component } from '@angular/core';
import { CompanyService } from './company.service';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  public name='company'
  public iconForm = faBuilding

  constructor(public companyService: CompanyService){}

  async ngOnInit() {
    console.log('On init User component');
    await this.companyService.getHeader()
    await this.companyService.getData()
  }
}
