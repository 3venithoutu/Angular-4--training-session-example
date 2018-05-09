import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { RatingComponent } from '../rating/rating.component';
import { PowerPipe } from '../power.pipe';
import { PowerComponent } from '../power/power.component';
import { QuoteComponent } from '../quote/quote.component';
import { QuoteChildComponent } from '../quote-child/quote-child.component';
import { PostComponent } from '../post/post.component';
import { StudentComponent } from '../student/student.component';
import { UserComponent } from '../user/user.component';
import { CourseComponent } from '../course/course.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CourseDetailComponent } from '../course-detail/course-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      // Route objects:
      {path:'',redirectTo:'/user',pathMatch:'full'},
      {path:'user',component:UserComponent},
      {path:'courseDetails/:cname',component:CourseDetailComponent},
      {path:'course',component:CourseComponent},
      {path:'post',component:PostComponent},
      {path:'quote',component:QuoteComponent},
      {path:'rating',component:RatingComponent},
      {path:'student',component:StudentComponent},
      {path:'power',component:PowerComponent},
      {path:'**',component:NotFoundComponent}
    ])
  ],
  declarations: [],
  exports:[RouterModule]
})
export class RoutingModule { }
