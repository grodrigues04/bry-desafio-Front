import { Component } from '@angular/core';
import { CompanyService, CompanyResponse  } from '../../Services/companie.service'
@Component({
  selector: 'app-companies-page',
  templateUrl: './companies-page.component.html',
  styleUrls: ['./companies-page.component.css'],
})
export class CompaniesPageComponent {
  constructor(private companyService:CompanyService){

  }
  companies!:CompanyResponse[];

  ngOnInit(){
    this.getCompanyList();
  }
  getCompanyList(){
    this.companyService.getCompanyList().subscribe((res:any)=>{
      this.companies = res;
      console.log(res)
    });
  }
}
