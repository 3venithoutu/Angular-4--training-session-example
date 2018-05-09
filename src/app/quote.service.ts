import { Injectable } from '@angular/core';
import {QUOTES} from './mock-quotes';
import {Quote} from './quote';

@Injectable()
export class QuoteService {
  proverbs:Quote[];

  constructor() { 
    this.proverbs=QUOTES;
  }

}
