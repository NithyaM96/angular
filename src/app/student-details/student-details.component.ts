import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { RestapiService } from '../restapi.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  regno: number;
  students: Student;
  constructor(private route: ActivatedRoute, private router:Router, private service:RestapiService) { }

  ngOnInit() {
    this.students = new Student();

    this.regno = this.route.snapshot.params['regno'];
    
    this.service.getStudentByRegNo(this.regno)
      .subscribe(data => {
        console.log(data)
        this.students = data;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['studentlist']);
  }
}

