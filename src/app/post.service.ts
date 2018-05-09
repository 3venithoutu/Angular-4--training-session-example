import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {Post} from './post';

@Injectable()
export class PostService {

  // DI
  constructor(private _http:Http) { 

  }

  getPosts():Observable<any> {
    // HTTP GET REQUEST
    return this._http.get("https://jsonplaceholder.typicode.com/posts")
    .map(this.extractData) // HTTP RESPONSE = OBSERVABLE
    .catch(this.handleError) // Handle error
  }

  getSpecificPost(pid:number):Observable<any> {
    // HTTP GET REQUEST
    return this._http.get("https://jsonplaceholder.typicode.com/posts/"+pid)
    .map(this.extractData) // HTTP RESPONSE = OBSERVABLE
    .catch(this.handleError) // Handle error
  }

  extractData(res:Response) {
    let body = res.json();
    return body || {}
  }

  handleError(error:any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status}` : 'Server Error';
    return Observable.throw(errMsg);
  }
  
}
