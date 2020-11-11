import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../restapi.service';
import { Student } from '../student';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  students: Student = new Student();
  submitted = false;
  constructor(private service:RestapiService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  save() {
    this.service
    .createStudent(this.students).subscribe(data => {
      console.log(data)
      this.students = new Student();
      this.gotoList();
    }, 
    error => console.log(error));
  }
  gotoList() {
    this.router.navigate(['/studentlist']);
  }
}


  