import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../utils/service/home-page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css'],
  animations: [
    trigger('EnterLeave', [
      transition(':enter', [
        style({ transform: 'scale(1.1)' }),
        animate('1s')
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)' }),
        animate('1s')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  bestBuys: string[] = [];

  constructor(private homePageService: HomePageService) { }

  ngOnInit(): void {
    this.homePageService.getBestBuys().subscribe({
      next: (bestBuys: string[]) => {
        this.bestBuys = bestBuys;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
