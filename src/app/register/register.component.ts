import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userDetails } from '../app.component';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css', '../app.component.css']
})
export class RegisterComponent implements OnInit {
    @Input() userData: Array<userDetails> = [];

    userName: string;
    password: string;
    email: string;
    name: string;
    confirmPassword: string;

    isRegisterValid = true;
    isRegistered = false;
    isPasswordsEqual = true;
    isUserExisted = false;

    constructor(private router: Router) {
        // form data
        this.userName = '';
        this.password = '';
        this.email = '';
        this.confirmPassword = '';
        this.name = '';

        this.userData = JSON.parse(sessionStorage.getItem('users')!);
    }

    ngOnInit(): void {
    }

    checkUserExistance() {
        // Filter function to check user existed already
        const isUserAvaialable = this.userData.filter(user => {
            return user.userName === this.userName
        });

        if (isUserAvaialable.length === 0) {
            this.isUserExisted = false;
        } else {
            this.isUserExisted = true;
        }
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
        this.isRegistered = true;
        let newData: userDetails = { userName: this.userName, password: this.password, email: this.email, name: this.name };
        this.userData.push(newData);
        sessionStorage.setItem('users', JSON.stringify(this.userData));
        this.router.navigateByUrl('/login');
    }

}
