import { Component } from '@angular/core';
import { Users } from '../../../models/Users';
import { UsersServiceService } from '../../../services/users/users-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: false,
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  allUsers: Users[] = [];
  newUser: Users = {
    id: 0,
    nome: '',
    email: '',
    telefone: '',
    password: '',
    emailVerificationCode: '',
    isEmailVerified: false,
    resetPasswordToken: '',
    resetPasswordTokenExpiry: new Date(),
  };
  isLoading: boolean = false;

  constructor(private user: UsersServiceService, private router: Router) { }

  onSubmit(): void {
    this.isLoading = true;

    this.user.createUser(this.newUser).subscribe(
      (novo) => {
        this.allUsers.push(novo);
        localStorage.setItem('id', novo.id.toString());
        localStorage.setItem('email', novo.email);
        localStorage.setItem('code', novo.emailVerificationCode);

        this.newUser = { id: 0, nome: '', email: '', telefone: '', password: '', emailVerificationCode: '', isEmailVerified: false,resetPasswordToken: '', resetPasswordTokenExpiry: new Date()};

        alert("Email criado com sucesso, verifique seu email para validação");

        this.router.navigate(['/validate']);

        this.isLoading = false;
      },
      (error) => {
        alert("Erro ao criar usuário. Tente novamente.");
        this.isLoading = false;
      }
    );
  }
}
