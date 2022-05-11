import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../utils/service/users.service';
import { UsersService } from '../utils/service/users.service';

// Login class
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../app.component.css']
})
export class LoginComponent implements OnInit {

  @Input() userData: Array<User> = [];

  userName: string;
  password: string;

  loggedInUser!: User[];

  isLoginValid = true;
  isLoggedIn = false;

  constructor(private router: Router, private usersService: UsersService) {
    this.userName = '';
    this.password = '';
    this.userData = JSON.parse(sessionStorage.getItem('users')!);
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('loggedInUser')) {
      this.router.navigateByUrl('/products');
    }
  }

  // this function invokes login inside User Service and check for login validation
  doLogin() {
    this.usersService.login(this.userName, this.password).subscribe({
      next: (user: User) => {
        if (user) {
          if (this.password === user.password) {
            this.isLoginValid = true;
            this.isLoggedIn = true;
            sessionStorage.setItem('loggedInUser', JSON.stringify(user));
            this.router.navigateByUrl('/products');
          } else {
            this.isLoginValid = false
          }
        } else {
          this.isLoginValid = false;
        }
      },
      error: (err) => {
        alert(err);
      }
    })
  }

}
