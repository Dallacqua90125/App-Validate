import { Component } from '@angular/core';
import { UsersServiceService } from '../../../services/users/users-service.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  nome: string = '';
  id: string = '';

  constructor(private userService: UsersServiceService) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('id');

    console.log(userId);
    if (userId) {
      this.userService.getUserById(Number(userId)).subscribe(
        (user) => {
          this.nome = user.nome;
          console.log(this.nome, "alo");
        }
      )
    }
  }
}
