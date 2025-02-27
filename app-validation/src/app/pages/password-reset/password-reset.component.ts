import { Component } from '@angular/core';
import { UsersServiceService } from '../../../services/users/users-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-reset',
  standalone: false,
  templateUrl: './password-reset.component.html',
  styleUrl: './password-reset.component.css'
})
export class PasswordResetComponent {
  email: string = '';
  isLoading: boolean = false;

  constructor(private userService: UsersServiceService, private router: Router) {}

  onResetPassword(): void {
    if (!this.email) {
      alert("Por favor, insira seu e-mail.");
      return;
    }

    this.isLoading = true;

    this.userService.resetPassword(this.email).subscribe(
      (response) => {
        alert("Se o e-mail estiver cadastrado, um link de redefinição foi enviado.");
        this.isLoading = false;
        this.router.navigate(['/update-password']);
      },
      (error) => {
        alert("Erro ao solicitar redefinição de senha. Tente novamente.");
        this.isLoading = false;
      }
    );
  }
}
