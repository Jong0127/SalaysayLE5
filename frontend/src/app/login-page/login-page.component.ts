import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  form: any = { username: null, password: null };
  errorMessage = '';

  constructor(private auth: AuthService, private tokenStorage: TokenStorageService, private router: Router) {}

  onSubmit(): void {
    const { username, password } = this.form;
    this.auth.login(username, password).subscribe({
      next: token => {
        this.tokenStorage.saveToken(token);
        try {
          const b64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
          const payload = JSON.parse(decodeURIComponent(escape(atob(b64))));
          const key = Object.keys(payload).find(k => /nameid|nameidentifier|sub$/i.test(k));
          if (key) {
            this.tokenStorage.saveUser(String(payload[key]));
          }
        } catch { }
        this.router.navigate(['/']);
      },
      error: () => { this.errorMessage = 'Login failed. Check your username and password.'; }
    });
  }
}
