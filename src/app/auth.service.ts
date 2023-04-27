import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable , BehaviorSubject} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient , private _Router:Router ) {

    if (localStorage.getItem('userToken') !== null) {
      this.saveUserData()
    }
  }

  register(user:object):Observable<any>
  {
    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signup' , user)
  }
  login(user:object):Observable<any>
  {
    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signin' , user)
  }
  userData = new BehaviorSubject(null);
  saveUserData(){
    let incodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken:any = jwtDecode(incodedToken);
    this.userData.next(decodedToken)
  }

  signOut(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login'])
  }
}
