import { Component } from '@angular/core';
import { UsersServiceService } from '../../../../services/users/users-service.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  nome: string = '';
  email: string = '';
  telefone: string = '';
  senha: string = '';

  isLoading: boolean = false;

  constructor(private userService: UsersServiceService){ }

  ngOnInit(): void {
    const userId = localStorage.getItem('id');

    if (userId) {
      this.userService.getUserById(Number(userId)).subscribe(
        (user) => {
          this.nome = user.nome;
          this.email = user.email;
          this.telefone = user.telefone;
          this.senha = user.password;
        }
      )
    }
  }

  onSubmit() {
    this.isLoading = true;
  }
}
