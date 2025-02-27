import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../../../services/users/users-service.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  nome: string = '';
  id: string = '';

  constructor(private userService: UsersServiceService) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('id');

    if (userId) {
      this.userService.getUserById(Number(userId)).subscribe(
        (user) => {
          this.nome = user.nome;
          this.id = user.id.toString();
        },
        (error) => {
          console.error('Erro ao buscar usuário:', error);
        }
      );
    } else {
      console.log('Nenhum ID de usuário encontrado no localStorage.');
    }
  }
}
