import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private _HttpClient:HttpClient) { }

  getTrending(mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f597813c136fdbe4ff8e3e2976da14ad`)
  }
  getDetails( id:string , mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=f597813c136fdbe4ff8e3e2976da14ad&language=en-US`)
  }
  getSimilar( id:string , mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=f597813c136fdbe4ff8e3e2976da14ad&language=en-US&page=1`)
  }

  getMovies():Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=f597813c136fdbe4ff8e3e2976da14ad&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1`)
  }

}
