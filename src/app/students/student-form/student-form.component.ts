import { FormCanDeactivate } from './../../guards/form-candeactivate';
import { StudentsService } from './../students.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit,
 OnDestroy, FormCanDeactivate {

  student: any;
  subscription!: Subscription;
  private formChanged: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentsService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.student = this.studentService.getStudent(id);

        if (this.student === null) {
          this.student = {};
        }
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onInput() {
    this.formChanged = true;
  }

  canChangeRoute() {
    if (this.formChanged) {

      confirm("Are you sure you want leave this page?");
    }

    return true;
  }

  canDisable() {
    return this.canChangeRoute();
  }
}
