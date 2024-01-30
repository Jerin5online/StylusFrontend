import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginUserName:string=""

constructor(private router:Router){}
  ngOnInit(): void {
    if (sessionStorage.getItem("username")) {
  this.loginUserName=sessionStorage.getItem("username") || ""
      
    }
    else{
      this.loginUserName = ""
    }
  }
  logout(){
    this.loginUserName = ""
    sessionStorage.removeItem("username")
    sessionStorage.removeItem("token")
    this.router.navigateByUrl("")
  }

}
