import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { Student } from '../student';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  regno: number;
  students: Student;
  constructor(private route: ActivatedRoute,private router: Router,private service:RestapiService) { }

  ngOnInit() {
    this.students=new Student();
    this.regno=this.route.snapshot.params['regno'];
    this.service.getStudentByRegNo(this.regno)
.subscribe(data=>{
console.log(data)
  this.students=data;
},
error=>console.log(error));
 }
 updateEmployee(){
   this.service.updateStudent(this.regno, this.students)
   .subscribe(data=>{
     console.log(data);
     this.students=new Student();
     this.gotoList();
   },
   error=>console.log(error));
   
 }

 onSubmit() {
  this.updateEmployee();    
}
gotoList() {
  this.router.navigate(['/studentlist']);
}
}




