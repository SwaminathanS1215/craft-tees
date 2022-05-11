import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UsersService } from '../utils/service/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../app.component.css']
})
export class RegisterComponent implements OnInit {

  // class attributes
  userName: string;
  password: string;
  email: string;
  name: string;
  confirmPassword: string;

  isRegisterValid = true;
  isRegistered = false;
  isPasswordsEqual = true;
  isUserExisted = false;

  constructor(private router: Router, private userService: UsersService) {
    // form data
    this.userName = '';
    this.password = '';
    this.email = '';
    this.confirmPassword = '';
    this.name = '';
  }

  ngOnInit(): void {
  }

  // function to check user existed already with the help of User Service
  checkUserExistance() {
    this.userService.getUser(this.userName).subscribe({
      next: (user: User) => {
        if (user) {
          this.isUserExisted = false;
        } else {
          this.isUserExisted = true;

        }
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  // checks whether the password and confirm passwords are equal
  checkPasswordAndConfirmPassword() {
    if (this.password === this.confirmPassword) {
      this.isPasswordsEqual = true;
    } else {
      this.isPasswordsEqual = false
    }
  }

  doRegister() {
    let newData: User = { id: this.userName, userName: this.userName, password: this.password, email: this.email, name: this.name };

    // User service register function to create new user
    this.userService.register(newData).subscribe({
      next: (user: User) => {
        this.isRegistered = true;
        this.router.navigateByUrl('/login');
      },
      error: (err) => {

      }
    })
  }

}
