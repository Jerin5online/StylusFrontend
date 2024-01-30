import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
product:any={}
constructor(private api:ApiService,private route:ActivatedRoute){}

ngOnInit(): void {
  this.route.params.subscribe((res:any)=>{
    const id = res.id
    console.log(id);
    this.getproduct(id)
  })
}


getproduct(id:any){
this.api.getaproductapi(id).subscribe({
  next:(res:any)=>{
    console.log(res);
    
this.product[0]
console.log(this.product);
    
  },
  error:(err:any)=>{
    console.log(err);
    
  }
})

}
addtoWishlist(product:any){
  if (localStorage.getItem("token")) {
    alert("procced")
    Swal.fire({
      icon: 'error',
      title: 'Success...',
      text: 'Procced',
    });  
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Please Login',
      text: ' Oops...',
    }); 
  }
  }
  
  addToCart(product:any){
    if (localStorage.getItem("token")) {
      Swal.fire({
        icon: 'error',
        title: 'Procced',
        text: 'success',
      });     
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Please Login',
        text: ' Oops...',
      });
      }
  }

}
