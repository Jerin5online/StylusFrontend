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
if (sessionStorage.getItem("token")) {
  this.api.addtowishlistapi(product).subscribe({
           next: (res:any) => {
console.log(res);
            Swal.fire({
                       icon: 'success',
                        title: 'product added to wishlist successfully',
                         text: 'Procced',
                      }); 
          },
          error: (err: any) => {
            console.log(err);
            Swal.fire({
              icon: 'success',
               title: 'Opps..',
                text: `${err.error}`,
            
             });        
            }   
        });
       
   
}else{
  Swal.fire({
    icon: 'error',
    title: 'Please Login',
    text: ' Oops...',
  }); 
}
}

addToCart(product: any) {
       if (sessionStorage.getItem('token')) {
         Swal.fire({
           icon: 'success',
             title: 'product added to wishlist successfully',
             text: 'Procced',
          });     } else {
           Swal.fire({
            icon: 'error',
            title: 'Please Login',
            text: ' Oops...',
           });     }
     }
   }

// import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../services/api.service';
// import Swal from 'sweetalert2';

// @Component({
//   selector: 'app-allproduct',
//   templateUrl: './allproduct.component.html',
//   styleUrls: ['./allproduct.component.css'],
// })
// export class AllproductComponent implements OnInit {
//   allproducts: any = [];
//   constructor(private api: ApiService) {}
//   ngOnInit(): void {
//     this.api.getallproductsapi().subscribe({
//       next: (res: any) => {
//         this.allproducts = res;
//         console.log(this.allproducts);
//       },
//       error: (err: any) => {
//         console.log(err);
//       },
//     });
//   }

//   addToWishlist(product: any) {
//     if (sessionStorage.getItem('token')) {
//       this.api.addtowishlistapi(product).subscribe({
//         next: (res: any) => {
//           console.log(res);
//           Swal.fire({
//                    icon: 'success',
//                      title: 'product added to wishlist successfully',
//                      text: 'Procced',
//                   });       
//                   },
//         error: (err: any) => {
//           console.log(err);
//           Swal.fire({
//             icon: 'error',
//             title: 'Please Login',
//             text:`${err.error}`,
//           });         },
//       });
//     } 
//     else {
//       Swal.fire({
//                icon: 'error',
//                title: 'Please Login',
//                text: ' Oops...',
//              });     }
//   }

//   addToCart(product: any) {
//     if (sessionStorage.getItem('token')) {
//       Swal.fire({
//         icon: 'success',
//           title: 'product added to wishlist successfully',
//           text: 'Procced',
//        });     } else {
//         Swal.fire({
//           icon: 'error',
//           title: 'Please Login',
//           text: ' Oops...',
//         });     }
//   }
// }
