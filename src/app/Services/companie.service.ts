import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface CompanyResponse{
  "id":number
  "name":string
  "cnpj": string
  "address":string
  "created_at": string,
  "updated_at": string,
  "employees":any
}
@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  constructor(private httpCliente:HttpClient){}
  getCompanyList(){
    return this.httpCliente.get('http://localhost:8000/api/companies')
  }
  getCompany(companyId:number){
    return this.httpCliente.get(`http://localhost:8000/api/companies/edit/${companyId}`)
  }
  saveCompany(inputDate:object){
    return this.httpCliente.post('http://localhost:8000/api/companies',inputDate)
  }
  updateCompany(companyId:number,inputData:object){
    return this.httpCliente.patch(`http://localhost:8000/api/companies/edit/${companyId}`,inputData)
  }
}
