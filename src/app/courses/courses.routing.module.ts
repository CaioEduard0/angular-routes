import { CourseNotFoundComponent } from './course-not-found/course-not-found.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CoursesComponent, children: [
    { path: 'not-found', component: CourseNotFoundComponent},
    { path: 'courses/:id', component: CourseDetailComponent }
  ] } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }

