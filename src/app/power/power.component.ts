import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  value:number;
  exp: number;

  constructor() { 
    this.value=2;
    this.exp=3;
  }

  ngOnInit() {
  }

}
