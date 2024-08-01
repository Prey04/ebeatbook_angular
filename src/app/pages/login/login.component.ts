import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    "username": "",
    "password": ""
  };
  
  http = inject(HttpClient);

  constructor (private router:Router) {
    
  }

  onLogin() {
    this.http.post("", this.loginObj).subscribe((res:any)=>{
      debugger;
      if(res.result) {
        alert("Login Successful");
        this.router.navigateByUrl("dashboard")
      }
      else {
        alert("Check Email Id or Password")
      }
    })
  }
}
