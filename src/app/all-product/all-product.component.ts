import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {

allproduct:any=[]
constructor(private api:ApiService){}

ngOnInit(): void {
  this.api.getallproductsapi().subscribe({
    next:(res:any)=>{
      this.allproduct=res
      console.log(this.allproduct);
      
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
}

addtoWishlist(product:any){
if (localStorage.getItem("token")) {
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
