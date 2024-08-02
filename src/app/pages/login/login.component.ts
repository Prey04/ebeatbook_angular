import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginObj: any = {
    "email": "",
    "password": ""
  };
  
  http = inject(HttpClient);

  constructor(private router: Router) {}

  onLogin() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post("http://127.0.0.1:8000/api/login/", this.loginObj, { headers }).subscribe({
      next: (res: any) => {
        console.log('Response:', res);
        const authenticateduser = res.authenticatedUser
        if (authenticateduser.access && authenticateduser.refresh) {

          const access = authenticateduser.access;
          const refresh = authenticateduser.refresh;

          localStorage.setItem('access', access);
          localStorage.setItem('refresh', refresh);


          
          alert("Login Successful");
          this.router.navigateByUrl("dashboard");
        } else {
          alert("Check Username or Password");
        }
      },
      error: (error) => {
        console.error('Error:', error);
        alert("An error occurred. Please try again.");
      }
    });
  }
}
