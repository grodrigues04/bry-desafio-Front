import { Component, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../Services/companie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrl: './company-edit.component.css'
})
export class CompanyEditComponent {
  constructor(private route: ActivatedRoute,private router:Router, private companyService:CompanyService){
    this.company ={
      name:"",
      cnpj:"",
      address:""
    }
  }
  company_id!:any
  company!:any

  errors:any = []
  ngOnInit(){
    this.company_id = Number(this.route.snapshot.paramMap.get('id'));
    this.companyService.getCompany(this.company_id).subscribe(
      (res:any)=> {this.company = {
        name:res.company?.name,
        cnpj:res.company?.cnpj,
        address:res.company?.address
      }}
    )
  }
  updateCompany(){
    let inputDate = this.company;
    this.companyService.updateCompany(this.company_id,inputDate).subscribe(
      (res)=>{
        console.log('Company update successfully',res)
        alert('Company update successfully');
        this.router.navigate(['/companies/page']); // Redirect to the employee list or any other page

      }
    )
  }




}
