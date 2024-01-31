import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{

  allProducts:any=[]
constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.getwishlistitemapi().subscribe({
      next:(res:any)=>{
      console.log(res);
    },
    error:(err:any)=>{
      console.log(err);
      
    }

    })
    
  }

  removeItem(id:any){
    this.api.removeItemFromwishlist(id).subscribe({
      next:(res:any)=>{
      console.log(res);
    },
    error:(err:any)=>{
      console.log(err);
      
    }
    })
    }
}
 
   

