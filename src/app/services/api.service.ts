import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server_url='http://localhost:3015'

  constructor(private http:HttpClient) { }

  getallproductsapi(){
    return this.http.get(`${this.server_url}/allproducts`)
  }

  registerapi(user:any){
   return this.http.post(`${this.server_url}/register`,user)
  }

  loginapi(user:any){
    return this.http.post(`${this.server_url}/login`,user)
   }

   getaproductapi(id:any){
    return this.http.get(`${this.server_url}/get-product/ ${id}`)
   }


}
