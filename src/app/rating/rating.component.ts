import { Component, OnInit } from '@angular/core';
import {CourseService} from '../course.service';
import {Course} from '../course';

@Component({
  selector: 'home-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  courses:Course[];
  rating:number;
  status:boolean;

  // DI
  constructor(private cService:CourseService) { 
    this.status=false;
  }

  ngOnInit() {
    
    console.log("Service used in Rating Component --" + this.cService);
  }

  getRating(cname:string){
    this.rating = this.cService.assignRatings(cname);
    if(this.rating > 0){
      this.status = true;
    } else {
      this.status = false;
    }
    
  }
}
