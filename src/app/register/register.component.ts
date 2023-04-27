
import { Component } from '@angular/core';
import { FormGroup , FormControl ,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService , private _Router:Router) {
  }
  registerForm:FormGroup = new FormGroup({
    name: new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(15)]),
    email: new FormControl(null , [Validators.required , Validators.email]),
    password: new FormControl(null ,[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    rePassword: new FormControl(null , [Validators.required]),
    phone: new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
  })

  isloading:boolean = false;
  apiError:string = '';
  submitRegister(registerForm:FormGroup)
  {
    if (registerForm.valid){
      this.isloading= true;
      this._AuthService.register(registerForm.value).subscribe({
        next:(response)=>{
          this.isloading=false
          if(response.message === 'success'){
            this._Router.navigate(['/login'])
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
