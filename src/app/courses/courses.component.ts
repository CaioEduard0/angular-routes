import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from './courses.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy {

  courses!: any[];
  page!: number;
  subscription!: Subscription;

  constructor(private coursesService: CoursesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();

    this.subscription = this.route.queryParams.subscribe((queryParams: any) => {
      this.page = queryParams['page'];
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  nextPage() {
    //this.page++;
    this.router.navigate(['/courses'],
    { queryParams: { 'page': ++this.page}});
  }
}
