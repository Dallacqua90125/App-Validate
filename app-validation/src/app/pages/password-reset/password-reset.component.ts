import { Component } from '@angular/core';
import { UsersServiceService } from '../../../services/users/users-service.service';

@Component({
  selector: 'app-password-reset',
  standalone: false,
  templateUrl: './password-reset.component.html',
  styleUrl: './password-reset.component.css'
})
export class PasswordResetComponent {
  email: string = '';
  isLoading: boolean = false;

  constructor(private userService: UsersServiceService) {}

  onResetPassword(): void {
    if (!this.email) {
      alert("Por favor, insira seu e-mail.");
      return;
    }

    console.log('Email enviado para recuperação: ', this.email);  // Verifique o valor do email
    this.isLoading = true;

    this.userService.resetPassword(this.email).subscribe(
      (response) => {
        alert("Se o e-mail estiver cadastrado, um link de redefinição foi enviado.");
        this.isLoading = false;
      },
      (error) => {
        console.error("Erro ao solicitar redefinição de senha", error);  // Log do erro
        alert("Erro ao solicitar redefinição de senha. Tente novamente.");
        this.isLoading = false;
      }
    );
  }
}
