import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentsGuard } from './guards/students.guard';
import { CoursesGuard } from './guards/courses.guard';
import { AuthGuard } from './guards/auth.guard';
//import { CourseNotFoundComponent } from './courses/course-not-found/course-not-found.component';
//import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
//import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'courses', loadChildren: () =>
   import('./courses/courses.module').then(m => m.CoursesModule),
   canActivate: [AuthGuard],
   canActivateChild: [CoursesGuard],
   canLoad: [AuthGuard] 
  },
  { path: 'students', loadChildren: () =>
   import('./students/students.module').then(m => m.StudentsModule),
   canActivate: [AuthGuard], //canActivateChild: [StudentsGuard] 
   canLoad: [AuthGuard]  
  },
  //{ path: 'courses', loadChildren: 'app/courses/courses.module#CoursesModule' }
  //{ path: 'courses', component: CoursesComponent },
  //{ path: 'courses/:id', component: CourseDetailComponent },
  //{ path: 'not-found', component: CourseNotFoundComponent}
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent } // [AuthGuard] = used to redirect 
  //user to login page when the url doesn't exist.
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export class AppRoutingModule {
//   static  routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
// }
