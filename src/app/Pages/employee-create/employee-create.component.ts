import { Component } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrl: './employee-create.component.css'
})


export class EmployeeCreateComponent {
  constructor(private employeeService: EmployeeService){}
  
  login!:string;
  name!:string;
  cpf!:string
  email!:string
  address!:string
  password!:string
  saveEmployee(){
    console.log('RODEI')
    let inputDate = {
      login:this.login,
      name:this.name,
      cpf:this.cpf,
      email:this.email,
      address:this.address,
      password:this.password
    }
    this.employeeService.saveEmployee(inputDate).subscribe({
      next:(res:any)=>{
        console.log(res)
      },
      error:(err:any)=>{
        console.log(err.error.message)
      }
    })


  }

}

