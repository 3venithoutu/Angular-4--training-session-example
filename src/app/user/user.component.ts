import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'home-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnDestroy {
  
  user:User;
  userDetails:User[];

  constructor() {
    this.userDetails = new Array(); // initiazed array
    this.user={ 
      username:'John',
      age:23,
      city:'Agra'
    }
  }

  ngOnDestroy() {
    alert('Good Bye, I am leaving!!');
    console.log("I have been destroyed!!");
  }

  addUser(name:string,age:number,city:string):void {
    this.userDetails.push({"username":name,"age":age,"city":city});
  }


}

interface User {
  username:string;
  city:string;
  age:number;
}