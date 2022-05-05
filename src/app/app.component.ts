import { Component, OnInit } from '@angular/core';

export interface userDetails {
    userName: string;
    password: string;
    email: string;
    name: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    // class attributes
    userData: Array<userDetails>;

    constructor() {
        // existing users
        this.userData = [
            { userName: 'swaminathan', password: 'Swami7798', email: 'swami7798@gmail.com', name: 'Swaminathan' },
            { userName: 'rahul', password: 'Rahul7798', email: 'rahul7798@gmail.com', name: 'Rahul' },
            { userName: 'prasanth', password: 'Prasanth7798', email: 'prasanth798@gmail.com', name: 'Prasanth' },
            { userName: 'mukesh', password: 'Mukesh7798', email: 'mukesh7798@gmail.com', name: 'Mukesh' },
            { userName: 'ravi', password: 'Ravi7798', email: 'ravi7798@gmail.com', name: 'Ravi' },
            { userName: 'ramesh', password: 'Ramesh7798', email: 'ramesh7798@gmail.com', name: 'Ramesh' },
            { userName: 'dinesh', password: 'Dinesh7798', email: 'dinesh7798@gmail.com', name: 'Dinesh' }
        ];
    }
    ngOnInit(): void {
        sessionStorage.setItem('users', JSON.stringify(this.userData));
    }

}
