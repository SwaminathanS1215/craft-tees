import { Component, OnInit, Input } from '@angular/core';

import { userDetails  } from '../app.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css', '../app.component.css']
})
export class LoginComponent implements OnInit {

    @Input() userData: Array<userDetails> = [];

    userName: string;
    password: string;

    isLoginValid = true;
    isLoggedIn = false;

    constructor() { 
        this.userName = '';
        this.password = '';
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
        }
    }

}
