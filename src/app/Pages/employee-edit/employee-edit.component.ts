import { Component, OnInit, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../Services/employee.service';
import { CompanyResponse,CompanyService } from '../../Services/companie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css'
})
export class EmployeeEditComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router:Router, private employeeService: EmployeeService){
    this.employee ={
      name:"",
      login:"",
      cpf:"",
      address:"",
      email:"",
      password:""}
  }
  
  employee_id!:any
  employee!:any
  
  errors:any = []
  ngOnInit(){
    this.employee_id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployee(this.employee_id).subscribe(
      (res: any) => {this.employee = {
      name:res.employee?.name,
      login:res.employee?.login,
      cpf:res.employee?.cpf,
      address:res.employee?.address,
      email:res.employee?.email,
      password:res.employee?.password
    };
      console.log(this.employee)
      console.log(res)
      },
    )

  }
  
  updateEmployee(){
    let inputDate = this.employee;
    //this.employee['cpf'] = String(this.employee['cpf'])
    console.log(inputDate)
    //console.log(this.employee['companies']);
    this.employeeService.updateEmployee(this.employee_id, inputDate).subscribe(
      (res) => {
        console.log('Employee updated successfully', res);
        alert('Company update successfully');

        this.router.navigate(['/employees/page']); // Redirect to the employee list or any other page
      }
    );
  }
  }
