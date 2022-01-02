import { StudentDetailResolver } from './guards/student-detail.resolver';
import { StudentsDeactivateGuard } from './../guards/students-deactivate.guard';
import { FormsModule } from '@angular/forms';
import { StudentsService } from './students.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentFormComponent,
    StudentDetailComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule
  ],
  providers: [
    StudentsService,
    StudentsDeactivateGuard,
    StudentDetailResolver
  ]
})
export class StudentsModule { }
