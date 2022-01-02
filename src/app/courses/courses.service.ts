import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses() {
    return [
      { id: 1, name: 'Java'},
      { id: 2, name: 'Spring'},
      { id: 3, name: 'Quarkus'},
      { id: 4, name: 'Angular'}
    ]
  }

  getCourse(id: number) {
    let courses = this.getCourses();
    for (let i = 0; i < courses.length; i++) {
      if (courses[i].id == id) {
        return courses[i];
      }
    }
    return null;
  }
}
