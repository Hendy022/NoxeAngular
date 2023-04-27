import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(private _TrendingService: TrendingService, private _ActivatedRoute: ActivatedRoute) { }

  detail: any;
  similar: any[] = []
  media_type:string=''

  ngOnInit(): void {
    let { id, mediaType } = this._ActivatedRoute.snapshot.params;
    this.media_type=mediaType
    this._TrendingService.getDetails(id, mediaType).subscribe({
      next: (data) => {this.detail = data
        console.log(data)

      }
    })
    this._TrendingService.getSimilar(id, mediaType).subscribe({
      next: (data) => this.similar = data.results.filter((movie:any) => movie.poster_path !== null).slice(0, 6)
    })
  }

  antherData(id:string , mediaType:string){
    this._TrendingService.getDetails(id, mediaType).subscribe({
      next: (data) => {this.detail = data
        console.log(data)

      }
    })
    this._TrendingService.getSimilar(id, mediaType).subscribe({
      next: (data) => this.similar = data.results.filter((movie:any) => movie.poster_path !== null).slice(0, 6)
    })
  }

}
