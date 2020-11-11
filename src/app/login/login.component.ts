import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestapiService } from '../restapi.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private authservice: AuthService,
    private service:RestapiService) { }

  ngOnInit() {
  }
  handleLogin() {
   

    this.authservice.authenticationService(this.username, this.password)
        .subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
     
      this.router.navigate(['/studentlist']);
    },

   
    
    
    () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });      
  }}
