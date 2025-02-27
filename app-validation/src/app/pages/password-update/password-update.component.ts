import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersServiceService } from '../../../services/users/users-service.service';

@Component({
  selector: 'app-password-update',
  standalone: false,
  templateUrl: './password-update.component.html',
  styleUrl: './password-update.component.css'
})
export class PasswordUpdateComponent implements OnInit {
  resetCode: string = '';
  newPassword: string = '';
  email: string = '';
  isLoading: boolean = false;

  constructor(
    private userService: UsersServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.resetCode = params['token'];
    });

    this.email = localStorage.getItem('userEmail') || '';
  }

  onUpdatePassword(): void {
    if (!this.resetCode || !this.newPassword || !this.email) {
      alert("Por favor, insira o código, e-mail e a nova senha.");
      return;
    }

    this.isLoading = true;

    this.userService.updatePassword(this.email, this.resetCode, this.newPassword).subscribe(
      (response) => {
        alert("Senha redefinida com sucesso! Faça login novamente.");
        this.router.navigate(['/home']);
        this.isLoading = false;
      },
      (error) => {
        alert("Erro ao redefinir a senha. Verifique o código e tente novamente.");
        this.isLoading = false;
      }
    );
  }
}
