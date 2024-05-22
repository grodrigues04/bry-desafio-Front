import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpCliente:HttpClient){ 

  }
  saveEmployee(inputDate:object){
      
    return this.httpCliente.post('http://localhost:8000/api/employees',inputDate)
  }
}
