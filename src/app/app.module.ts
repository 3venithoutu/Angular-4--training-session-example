import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

// custom module
import {RoutingModule} from './routing/routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CourseComponent } from './course/course.component';

import {CourseService} from './course.service';
import { RatingComponent } from './rating/rating.component';
import { PowerPipe } from './power.pipe';
import { PowerComponent } from './power/power.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteChildComponent } from './quote-child/quote-child.component';
import { ChildComponent } from './child/child.component';
import { ShadowDirective } from './shadow.directive';
import { SortPipe } from './sort.pipe';
import { PostComponent } from './post/post.component';
import {PostService} from './post.service';
import { StudentComponent } from './student/student.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

@NgModule({
  // array of components , directives, filters
  declarations: [
    AppComponent,
    UserComponent,
    CourseComponent,
    RatingComponent,
    PowerPipe,
    PowerComponent,
    QuoteComponent,
    QuoteChildComponent,
    ChildComponent,
    ShadowDirective,
    SortPipe,
    PostComponent,
    StudentComponent,
    NotFoundComponent,
    CourseDetailComponent,
   
  ],
  // array of other modules reqd...
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  // array of services i.e global = available for all components in the Module
  providers: [CourseService,PostService],
  // array of one element : Root Component
  bootstrap: [AppComponent]
})
export class AppModule { }

