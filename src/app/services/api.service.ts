import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.http.get(`${this.server_url}/get-product/${id}`)
   }

   addtokentoheader(){
    //create an object for http headers
    let headers = new HttpHeaders()
    const token = sessionStorage.getItem("token") //getting token from the sessionstorage
    if (token) {
      //appending token to the headers of the request
      headers=headers.append('Authorization',`Bearer ${token}`)
    }
    return {headers}
   }

   addtowishlistapi(product:any){
    return this.http.post(`${this.server_url}/add-wishlist`,product,this.addtokentoheader())
   }

   getwishlistitemapi(){
    return this.http.get(`${this.server_url}/wishlist/allproducts`,this.addtokentoheader())
   }

   removeItemFromwishlist(id:any){
    return this.http.delete(`${this.server_url}/wishlist/removeItem/${id}`)
  
   }


}
