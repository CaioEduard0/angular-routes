import { AuthService } from './login/auth.service';
//import { StudentsModule } from './students/students.module';
//import { CoursesModule } from './courses/courses.module';
//import { CoursesService } from './courses/courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//import { CoursesComponent } from './courses/courses.component';
//import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
//import { CourseNotFoundComponent } from './courses/course-not-found/course-not-found.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent //,
    //CoursesComponent,
    //CourseDetailComponent,
    //CourseNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    //CoursesModule,
    //StudentsModule
  ],
  providers: [
    AuthService
    //CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
