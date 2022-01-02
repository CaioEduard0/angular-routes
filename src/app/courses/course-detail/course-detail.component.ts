import { CoursesService } from '../courses.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy {

  id!: number;
  subscription!: Subscription;
  course: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private coursesService: CoursesService) { 
    //console.log(this.route);
    //this.id = this.route.snapshot.params['id'];   
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.course = this.coursesService.getCourse(this.id);

      if (this.course == null) {
        this.router.navigate(['/not-found']);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
