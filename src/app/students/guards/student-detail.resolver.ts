import { StudentsService } from './../students.service';
import { Student } from './../students';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StudentDetailResolver implements Resolve<Student> {

    constructor(private studentsService: StudentsService) {}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): 
    Observable<any> | Promise<any> | any {

        let id = route.params['id'];


        return this.studentsService.getStudent(id);
    }
}