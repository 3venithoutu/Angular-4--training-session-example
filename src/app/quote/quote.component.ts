import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
import {QuoteService} from '../quote.service';

@Component({
  selector: 'home-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  providers:[QuoteService]
})
export class QuoteComponent implements OnInit {
  
  sayings:Quote[];

// DI
  constructor(private qService:QuoteService) { }

  ngOnInit() {
    this.sayings = this.qService.proverbs;
  }

}
