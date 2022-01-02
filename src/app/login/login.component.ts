import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    //console.log(this.user);
    this.authService.login(this.user);
  }

}
