import { Component, OnInit,Input,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'home-child',
  template: `
    <h2>{{variable}}</h2>
  
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {

  @Input() variable: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(chanages:SimpleChanges) {
    let prevValue=chanages.variable.previousValue;
    let currValue=chanages.variable.currentValue;
    console.log("Previous value::" + JSON.stringify(prevValue) + "Current Value::" + JSON.stringify(currValue));
  }
}
