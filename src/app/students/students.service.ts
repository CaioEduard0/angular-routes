import { Student } from './students';
import { Injectable } from '@angular/core';

@Injectable(
  //{providedIn: 'root'}
)
export class StudentsService {

  private students: Student[] = [
    { id: 1, name: "Student 1", email: "student1@email.com" },
    { id: 2, name: "Student 2", email: "student2@email.com" },
    { id: 3, name: "Student 3", email: "student3@email.com" },
    { id: 4, name: "Student 4", email: "student4@email.com" },
    { id: 5, name: "Student 5", email: "student5@email.com" },
  ]

  constructor() { }

  getStudents() {
    return this.students;
  }

  getStudent(id: number) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id == id) {
        return this.students[i];
      }
    }
    return null;
  }
}
