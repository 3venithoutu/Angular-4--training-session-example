import { Component, OnInit,Input,OnChanges,SimpleChanges } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'home-quote-child',
  templateUrl: './quote-child.component.html',
  styleUrls: ['./quote-child.component.css']
})
export class QuoteChildComponent implements OnInit,OnChanges {
  
  // property 
  @Input() sayObject:Quote; // input of quote is from Parent

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(chanages:SimpleChanges) {
    if(chanages.sayObject != undefined) {
      let prevValue=chanages.sayObject.previousValue;
      let currValue=chanages.sayObject.currentValue;
      console.log("Previous value::" + JSON.stringify(prevValue) + "Current Value::" + JSON.stringify(currValue));
    } else {
      console.log('No change from Parent to child!!');
    }
    
  }
}
