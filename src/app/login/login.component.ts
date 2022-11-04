import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errors:string ='';

  constructor(private _AuthService:AuthService, private _Router:Router) { }

  loginForm(loginform:any){
    console.log(loginform.value);
    this._AuthService.login(loginform.value).subscribe({
      next:(res) =>{
        console.log(res);
        if(res){
          this._Router.navigate(['home']);
          localStorage.setItem('token',res.token);
          this._AuthService.saveuser();
        } else {
          this.errors = res.message;
          alert('login fail !, please try again');
        }
      }, error:(err) =>{
        console.log(err.errors.message);
      }
    });
  }

  ngOnInit(): void {
  }

}
