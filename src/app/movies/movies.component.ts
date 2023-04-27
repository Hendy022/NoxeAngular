import { TrendingService } from './../trending.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{

  constructor(private _TrendingService:TrendingService){}

  Movies:any[]=[]
  ngOnInit(): void {

    this._TrendingService.getMovies().subscribe({
      next: (data)=> this.Movies = data.results

    })
  }

}
