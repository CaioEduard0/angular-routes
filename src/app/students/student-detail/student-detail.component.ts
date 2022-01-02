import { StudentsService } from './../students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Student } from '../students';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit, OnDestroy {

  student!: Student;
  subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentsService: StudentsService
  ) { }

  ngOnInit(): void {
    // this.subscription = this.route.params.subscribe(
    //   (params: any) => {
    //     let id = params['id'];

    //     this.student = this.studentsService.getStudent(id);
    //   }
    // );

    this.subscription = this.route.data.subscribe(
      (info) => {
        this.student = info.aluno;
      }
    );
  }

  editStudent() {
    this.router.navigate(['students', this.student.id, 'edit']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
