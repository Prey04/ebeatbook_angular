import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { zip } from 'rxjs';

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
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post("http://localhost:8000/api/auth/login/", this.loginObj, { headers }).subscribe((res:any)=>{
      debugger;
      if(res.result) {
        // Store JWT tokens in local storage
        localStorage.setItem('access', res.access);
        localStorage.setItem('refresh', res.refresh);
        
        alert("Login Successful");
        this.router.navigateByUrl("dashboard")
      }
      else {
        alert("Check Email Id or Password")
      }
    })
  }
}
