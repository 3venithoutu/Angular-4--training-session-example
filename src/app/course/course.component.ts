import { Component, OnInit } from '@angular/core';
import {Course} from '../course'
import {CourseService} from '../course.service';

@Component({
  selector: 'home-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses:Course[];
  bday:Date;
  input:string;

// Dependency Injection = Loose Coupling
  constructor(private cService:CourseService) {
      this.bday = new Date(1994,3,15);  
      this.input = "From Course Parent";
   }

  ngOnInit() {
    this.courses = this.cService.fetchCourses();
  }

  deleteCourse(i:number) {
    this.courses.splice(i,1);
  }
}
