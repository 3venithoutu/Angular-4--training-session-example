import { Component } from '@angular/core';

@Component({
  // custom html elements using will identify the component
  selector: 'home-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title:string ;
  email:string ;
  hobbies: string[];
  status:boolean;
  img:string;
  check:boolean;

  constructor() {
    this.title = 'Angular 4';
    this.email = 'tls@techmahindra.com';
    this.hobbies = ['Painting','Photography','New Aged Delivery'];
    this.status = false;
    this.img = '../assets/cake6.jpg';
    this.check = true;
  }

  playHobbies():void {
    this.status=!this.status;
  }

    remove() {
      this.check = false;
  }
}
