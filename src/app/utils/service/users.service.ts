import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { users } from '../serverURL';
import { userDetails } from 'src/app/app.component';

export interface User {
  id: string;
  userName: string;
  password: string;
  email: string;
  name: string;
}

// Service for Users operations
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  URL: string = users;

  constructor(private http: HttpClient) { }

  login(userName: string, password: string): Observable<any> {
    const user = this.getUser(userName);
    return user;
  }

  getAllUsers(): Observable<any> {
    return this.http.get(this.URL);
  }

  register(user: User): Observable<any> {
    let headers = { 'content-type': 'application/json' };

    let userObj = JSON.stringify(user);

    return this.http.post(this.URL, userObj, { 'headers': headers });
  }

  getUser(userName: string): Observable<any> {
    let urlRequest = this.URL + "/" + userName;
    return this.http.get(urlRequest);
  }

}
