import { Component } from '@angular/core';
import { UsersServiceService } from '../../../../services/users/users-service.service';
import { Router } from '@angular/router'; // Para redirecionar após atualização
import { Users } from '../../../../models/Users';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  nome: string = '';
  email: string = '';
  telefone: string = '';
  senha: string = '';

  isLoading: boolean = false;

  constructor(private userService: UsersServiceService, private router: Router) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('id');

    if (userId) {
      this.userService.getUserById(Number(userId)).subscribe(
        (user) => {
          this.nome = user.nome;
          this.email = user.email;
          this.telefone = user.telefone;
          this.senha = user.password;
        },
        (error) => {
          alert("Erro ao carregar os dados do usuário.");
        }
      );
    }
  }

  onSubmit(): void {
    if (!this.nome || !this.email || !this.telefone || !this.senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    this.isLoading = true;

    const userId = localStorage.getItem('id');
    if (userId) {
      // Atualizar o objeto para corresponder ao tipo 'Users'
      const updatedUser: Users = {
        id: Number(userId),
        nome: this.nome,
        email: this.email,
        telefone: this.telefone,
        password: this.senha,
        emailVerificationCode: '',
        isEmailVerified: false,
        resetPasswordToken: '',
        resetPasswordTokenExpiry: new Date(),
      };

      // Envia as alterações para o servidor
      this.userService.updateUser(updatedUser).subscribe(
        (response) => {
          alert("Perfil atualizado com sucesso!");
          this.isLoading = false;
          this.router.navigate(['/profile']); // Redireciona para o perfil ou página desejada
        },
        (error) => {
          alert("Erro ao atualizar o perfil. Tente novamente.");
          this.isLoading = false;
        }
      );
    }
  }
}
