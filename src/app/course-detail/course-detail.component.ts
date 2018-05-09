import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../course.service';
import {Course} from '../course';

@Component({
  selector: 'home-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  courseObject:Course;

  constructor(private route:ActivatedRoute,private cService:CourseService) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params=> {
        let courseName = params.get('cname');
        console.log("Course Name ::" + courseName);
        this.courseObject = this.cService.getCourse(courseName);
    })
  }

}
