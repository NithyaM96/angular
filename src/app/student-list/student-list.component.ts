import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import {Observable} from 'rxjs';
import { RestapiService } from '../restapi.service';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  isvariable=false;
  username:string;
  password:string;
  getitem:any;
  isLoggedIn = false;
  students: Observable<Student[]>;
  constructor(private service: RestapiService, private router:Router, private auth:AuthService) { }
  

  


  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    
    this.getitem=this.auth.getsession()
    if(this.getitem=="Nithya"){
    this.isvariable=true;
     this.students = this.service.getAllStudents();
    }
    else
    this.isvariable=false;
    this.students=this.service.getAllStudents();
   

   
      
    
  }
  deleteStudent(regno: number) {
    this.service.deleteStudent(regno)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  updateStudent(regno:number){
  this.router.navigate(['update',regno]);

}
studentDetails(regno: number){
  this.router.navigate(['details', regno]);
}
}
