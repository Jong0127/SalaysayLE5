import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  form: any = { firstName: null, lastName: null, username: null, password: null };
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(): void {
    const { firstName, lastName, username, password } = this.form;
    this.auth.register(firstName, lastName, username, password).subscribe({
      next: () => this.router.navigate(['/login']),
      error: () => { this.errorMessage = 'Registration failed.'; }
    });
  }
}
