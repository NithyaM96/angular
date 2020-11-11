import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
getitem:any;
isvariable=false;
  isLoggedIn = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);
    
    this.getitem=this.authenticationService.getsession()
    if(this.getitem=="Nithya"){
    this.isvariable=true;
     
    }
    else
    this.isvariable=false;
   
   
  
   
      
    
  
   
  }

  handleLogout() {
    this.authenticationService.logout()
    
  }
  


 

}
