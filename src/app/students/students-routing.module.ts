import { StudentDetailResolver } from './guards/student-detail.resolver';
import { StudentsDeactivateGuard } from './../guards/students-deactivate.guard';
import { StudentsGuard } from './../guards/students.guard';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentsComponent } from './students.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', component: StudentsComponent,
  canActivateChild: [StudentsGuard],
  children: [
    { path:'new', component: StudentFormComponent },
    { path:':id', component: StudentDetailComponent,
            resolve: { aluno: StudentDetailResolver } },
    { path:':id/edit', component: StudentFormComponent,
      canDeactivate: [ StudentsDeactivateGuard ] }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
