import { Injectable } from '@angular/core';
import {Course} from './course';

@Injectable()
export class CourseService {
  
  courses:Course[];

  constructor() { 
    this.courses = [
      {"courseName":"Node JS","coursePrice":4500},
      {"courseName":"Data Science","coursePrice":6000},
      {"courseName":"Python","coursePrice":4000},
      {"courseName":"Deep Learning","coursePrice":700},
      {"courseName":"Angular 4","coursePrice":5000}
    ]
  }

  fetchCourses():Course[] {
    return this.courses;
  }

  assignRatings(cname):number {
    for(let i=0;i<this.courses.length;i++) {
      if(cname=='Node JS'){
        return this.courses[i].courseRating=4.32;
      } else if(cname=='Data Science'){
        return this.courses[i].courseRating=4.13;
      } else if(cname=='Python'){
        return this.courses[i].courseRating=4.09;
      } else if(cname=='Deep Learning'){
        return this.courses[i].courseRating=3.75;
      } else if(cname=='Angular 4'){
        return this.courses[i].courseRating=3.70;
      }
    }
  }

  getCourse(cname:string):Course {
    console.log("In service::" + cname);
    for(let i=0;i<this.courses.length;i++) {
      if(cname===this.courses[i].courseName){
        return this.courses[i];
      } else if(cname===this.courses[i].courseName){
        return this.courses[i];
      } else if(cname===this.courses[i].courseName){
        return this.courses[i];
      } else if(cname===this.courses[i].courseName){
        return this.courses[i];
      } else if(cname===this.courses[i].courseName){
        return this.courses[i];
      }
    }
  }
}
