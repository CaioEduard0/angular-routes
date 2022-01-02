import { CoursesRoutingModule } from './courses.routing.module';
//import { RouterModule } from '@angular/router';
import { CoursesService } from './courses.service';
import { CourseNotFoundComponent } from './course-not-found/course-not-found.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CoursesComponent,
        CourseDetailComponent,
        CourseNotFoundComponent
    ],
    imports: [ 
        CommonModule,
        CoursesRoutingModule
        //RouterModule
     ],
    exports: [],
    providers: [
        CoursesService
    ],
})
export class CoursesModule {}