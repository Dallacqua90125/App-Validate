import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersServiceService } from '../../../services/users/users-service.service';

@Component({
  selector: 'app-password-update',
  standalone: false,
  templateUrl: './password-update.component.html',
  styleUrl: './password-update.component.css'
})
export class PasswordUpdateComponent {
  email: string = '';
  token: string = '';
  newPassword: string = '';
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersServiceService,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'] || '';
      this.token = params['token'] || '';
    });
  }

  onUpdatePassword(): void {
    if (!this.newPassword) {
      alert("Por favor, insira sua nova senha.");
      return;
    }

    this.isLoading = true;

    this.userService.updatePassword(this.email, this.token, this.newPassword).subscribe(
      (response) => {
        alert("Senha redefinida com sucesso! Faça login novamente.");
        this.router.navigate(['/login']);
        this.isLoading = false;
      },
      (error) => {
        alert("Erro ao redefinir senha. Verifique o link e tente novamente.");
        this.isLoading = false;
      }
    );
  }
}
