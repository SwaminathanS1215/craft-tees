import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { bestBuys } from '../serverURL';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  URL = bestBuys;

  constructor(private http: HttpClient) { }

  getBestBuys():Observable<any> {
    return this.http.get(this.URL);
  }
}
