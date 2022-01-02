
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CoursesGuard implements CanActivateChild {
    
    constructor() { }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        console.log(route);
        console.log(state);
        
        

        return true;
    }
}