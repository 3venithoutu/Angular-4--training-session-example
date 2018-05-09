import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  education:string[];
  education1;
  studName:string;
  gender:string;
  
    constructor() {
      this.education1 = new Array(); 
      this.education = ['M.Sc','B.Sc','P.Hd','MBA','BE','M.tech'];
      this.studName='';
      this.gender='male';
    }

  ngOnInit() {
  }

  saveStudent(studForm) {
    console.log(studForm);
  }
}
