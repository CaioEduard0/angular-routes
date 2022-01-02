import { FormCanDeactivate } from './form-candeactivate';
import { StudentFormComponent } from './../students/student-form/student-form.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable(//{providedIn: 'root'}
)
export class StudentsDeactivateGuard implements CanDeactivate<FormCanDeactivate> {
    
    canDeactivate(
        component: FormCanDeactivate,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

        
        //return component.canChangeRoute();

        return component.canDisable();
    }
}