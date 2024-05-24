import { Component, OnInit } from '@angular/core';
import { EmployeeService, EmployeeResponse } from '../../Services/employee.service';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.css']
})
export class EmployeesPageComponent {
  constructor(private employeeService:EmployeeService){

  }
  employees!:EmployeeResponse[];

  ngOnInit(){
    this.getEmployeeList();
  }
  getEmployeeList(){
    this.employeeService.getEmployeeList().subscribe((res:any)=>{
      this.employees = res;
    });
  }
}