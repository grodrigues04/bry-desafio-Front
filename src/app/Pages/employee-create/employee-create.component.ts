import { Component } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { CompanyResponse, CompanyService } from '../../Services/companie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrl: './employee-create.component.css'
})


export class EmployeeCreateComponent {
  constructor(private employeeService: EmployeeService, private companyService:CompanyService,private router: Router){}
  
  
  login!:string;
  name!:string;
  cpf!:string
  email!:string
  address!:string
  password!:string
  company_id!:string
  errors:any = []
  
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


  saveEmployee(){
    let inputDate = {
      login:this.login,
      name:this.name,
      cpf:this.cpf,
      email:this.email,
      address:this.address,
      password:this.password,
      company_id:this.company_id
    }

    this.employeeService.saveEmployee(inputDate).subscribe({
      next:(res:any)=>{
        console.log(res)
        alert(res.message)
        this.login = '',
        this.name = '',
        this.cpf = '',
        this.email = '',
        this.address = '',
        this.password = '',
        this.company_id = ''

        this.router.navigate([`/employees/page`]);
      },
      
      error:(err:any)=>{
        console.log(err)
        let errorMessage =  err.error.message
        this.errors = errorMessage
        console.log(errorMessage)
      }
    })
  }
}

