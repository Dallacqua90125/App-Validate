import { Component } from '@angular/core';
import { Users } from '../../../models/Users';
import { UsersServiceService } from '../../../services/users/users-service.service';

@Component({
  selector: 'app-registro',
  standalone: false,
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  allUsers: Users[] = [];
  newUser: Users = {
    id: 0,
    email: '',
    password: '',
    emailVerificationCode: '',
    isEmailVerified: false
  }


  constructor(private user: UsersServiceService) { }

  onSubmit(): void {
    this.user.createUser(this.newUser).subscribe((novo) => {
      this.allUsers.push(novo);
      localStorage.setItem('userEmail', this.newUser.email);  // Armazenando o e-mail no localStorage
      localStorage.setItem('emailVerificationCode', this.newUser.emailVerificationCode);  // Armazenando o código de verificação
      this.newUser = { id: 0, email: '', password: '', emailVerificationCode: '', isEmailVerified: false };
    });
  }

}
