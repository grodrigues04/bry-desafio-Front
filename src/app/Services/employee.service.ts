import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ArrayType } from '@angular/compiler';
import { Injectable } from '@angular/core';

export interface EmployeeResponse{
  "id":number
  "name":string
  "cpf": string
  "email":string
  "login": string
  "password": string
  "address":string
  "created_at": string,
  "updated_at": string,
  "companies":any
}
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpCliente:HttpClient){}
  getEmployeeList(){
    return this.httpCliente.get('http://localhost:8000/api/employees')
  }
  saveEmployee(inputDate:object){
    return this.httpCliente.post('http://localhost:8000/api/employees',inputDate)
  }
}