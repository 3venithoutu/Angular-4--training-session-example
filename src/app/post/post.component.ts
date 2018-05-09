import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../post';

@Component({
  selector: 'home-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts:Post[];
  post:Post;
  errorMessage:string;
  flag:boolean;

  // DI
  constructor(private _pService:PostService) {
    this.flag=false;
   }

  ngOnInit() {
  /*  this._pService.getPosts().
    subscribe(result =>
    this.posts=result,
    error => this.errorMessage = error);  */
  }

  getSpecificPost(pd:number) {
    this._pService.getSpecificPost(pd).
    subscribe(result => {
      this.flag=true;
      this.post=result },
      error => {
        this.flag=false;
        this.errorMessage = error
      })
    }

}
