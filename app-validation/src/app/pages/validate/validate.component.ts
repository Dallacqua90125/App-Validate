import { Component } from '@angular/core';
import { UsersServiceService } from '../../../services/users/users-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validate',
  standalone: false,
  templateUrl: './validate.component.html',
  styleUrl: './validate.component.css'
})

export class ValidateComponent {
  email: string = '';
  code: string = '';
  isLoading: boolean = false;

  constructor(private usersService: UsersServiceService, private router: Router) {}

  ngOnInit(): void {
    this.email = localStorage.getItem('email') || '';
    this.code = localStorage.getItem('code') || '';
  }

  onSubmit(): void {
    this.isLoading = true;
    this.usersService.validateEmail(this.email, this.code).subscribe(
      (response) => {
        alert('E-mail validado com sucesso!');
        localStorage.setItem('isEmailVerified', 'true');
        this.isLoading = false;
        this.router.navigate(['/home'])
      },
      (error) => {
        alert('Erro ao validar o e-mail. Verifique o código e tente novamente.');
        this.isLoading = false;
      }
    );
  }
}
