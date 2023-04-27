import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _TrendingService:TrendingService){}

  trendingMovies:any[] = [];
  trendingTv:any[] = [];
  trendingPeople:any[] = [];

  ngOnInit(): void {
    this._TrendingService.getTrending('movie').subscribe({
      next: (data)=> this.trendingMovies = data.results.slice(0,10)

    })
    this._TrendingService.getTrending('tv').subscribe({
      next: (data)=> this.trendingTv = data.results.slice(0,10)

    })
    this._TrendingService.getTrending('person').subscribe({
      next: (data)=> this.trendingPeople = data.results.slice(0,10)

    })
  }

}
