import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { userDetails } from '../app.component';

// Login class
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css', '../app.component.css']
})
export class LoginComponent implements OnInit {

    @Input() userData: Array<userDetails> = [];

    userName: string;
    password: string;

    loggedInUser!: userDetails[];

    isLoginValid = true;
    isLoggedIn = false;

    constructor(private router: Router) {
        this.userName = '';
        this.password = '';
        this.userData = JSON.parse(sessionStorage.getItem('users')!);
    }

    ngOnInit(): void {
    }

    doLogin() {
        // Filter function to get the valid user
        const isUserAvaialable = this.userData.filter(user => {
            return user.userName === this.userName && user.password === this.password
        });

        if (isUserAvaialable.length === 0) {
            this.isLoginValid = false;
        } else {
            this.isLoginValid = true;
            this.isLoggedIn = true;
            this.loggedInUser = this.userData.filter(user => {
                return user.userName === this.userName;
            });
            sessionStorage.setItem('loggedInUser', JSON.stringify(this.loggedInUser));
            this.router.navigateByUrl('/products');
        }
    }

}
