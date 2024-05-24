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
  deleteCompany(event:any ,companyId:number){
    if(confirm('Are you sure you want to delet?')){
      event.target.innerText = "Deleting..."
      this.companyService.destroyCompany(companyId).subscribe((res:any)=>{
        this.getCompanyList();
      })
    }
  }
}
