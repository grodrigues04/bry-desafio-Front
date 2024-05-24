import { Component } from '@angular/core';
import { CompanyService } from '../../Services/companie.service';
import { EmployeeResponse, EmployeeService } from '../../Services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})


export class CompanyCreateComponent {
  constructor(private companyService: CompanyService, private employeeService:EmployeeService,private router: Router){}   
  name!:string
  cnpj!: string
  address!:string
  employee_id!:string
  errors:any = []

  employees!:EmployeeResponse[];

  ngOnInit(){
    this.getEmployeeList();
  }
  getEmployeeList(){
    this.employeeService.getEmployeeList().subscribe((res:any)=>{
      this.employees = res;
      console.log(res)
    });
  }

  saveCompany(){
    let inputDate = {
      name:this.name,
      cnpj:this.cnpj,
      address:this.address,
      employee_id:this.employee_id
    }

    this.companyService.saveCompany(inputDate).subscribe({
      next:(res:any)=>{
        console.log(res)
        alert(res.message)
        this.name = '',
        this.cnpj = '',
        this.address = '',
        this.employee_id = ''
      },
      error:(err:any)=>{
        let errorMessage =  err.error.message
        this.errors = errorMessage
        console.log(errorMessage)
      }
    })
  }
}

