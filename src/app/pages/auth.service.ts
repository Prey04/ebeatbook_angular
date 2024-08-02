// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'http://127.0.0.1:8000/api/login/';

//   constructor(private http: HttpClient, private router: Router) {}

//   login(email: string, password: string) {
//     return this.http.post<any>(this.apiUrl, { email, password })
//       .subscribe(response => {
//         if (response.access) {
//           localStorage.setItem('access_token', response.access);
//           localStorage.setItem('refresh_token', response.refresh);
//           this.router.navigateByUrl('dashboard');
//         } else {
//           alert('Invalid credentials');
//         }
//       }, error => {
//         alert('Invalid credentials');
//       });
//   }

//   getToken() {
//     return localStorage.getItem('access_token');
//   }

//   isAuthenticated(): boolean {
//     return !!this.getToken();
//   }
// }
