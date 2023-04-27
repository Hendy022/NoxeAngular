
import { Component } from '@angular/core';
import { FormGroup , FormControl ,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService , private _Router:Router) {
  }
  loginForm:FormGroup = new FormGroup({
    email: new FormControl(null , [Validators.required , Validators.email]),
    password: new FormControl(null ,[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
  })

  isloading:boolean = false;
  apiError:string = '';
  submitlogin(loginForm:FormGroup)
  {
    if (loginForm.valid){
      this.isloading= true;
      this._AuthService.login(loginForm.value).subscribe({
        next:(response)=>{
          this.isloading=false
          if(response.message === 'success'){
            localStorage.setItem('userToken' , response.token)
            this._AuthService.saveUserData()
            this._Router.navigate(['/home'])
          }
        },
        error:(err)=>{
          this.isloading=false;
          this.apiError=err.error.message;
        }

      })
    }
  }

}
