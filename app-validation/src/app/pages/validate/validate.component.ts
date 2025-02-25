import { Component } from '@angular/core';
import { ValidationServiceService } from '../../../services/users/validation-service.service';

@Component({
  selector: 'app-validate',
  standalone: false,
  templateUrl: './validate.component.html',
  styleUrl: './validate.component.css'
})

export class ValidateComponent {
  email: string = '';  // O e-mail será atribuído aqui
  code: string = '';   // O código de validação

  constructor(private validationService: ValidationServiceService) {}

  ngOnInit(): void {
    // Pegando o e-mail e código de verificação do localStorage
    this.email = localStorage.getItem('userEmail') || '';  // Pegando o e-mail
    this.code = localStorage.getItem('emailVerificationCode') || '';  // Pegando o código de verificação
  }

  onSubmit(): void {
    this.validationService.validateEmail(this.email, this.code).subscribe(
      (response) => {
        alert('E-mail validado com sucesso!');
        // Atualiza o isEmailVerified para true no localStorage após a validação
        localStorage.setItem('isEmailVerified', 'true');
        // Ou se você quiser também atualizar o usuário com isEmailVerified = true:
        // this.updateUserVerificationStatus();
      },
      (error) => {
        alert('Erro ao validar o e-mail. Verifique o código e tente novamente.');
      }
    );
  }

  // Caso queira atualizar o estado do usuário em algum serviço, como a API, você pode fazer isso:
  // updateUserVerificationStatus() {
  //   this.validationService.updateUserVerificationStatus(this.email).subscribe(
  //     (response) => {
  //       // Lógica após atualização
  //     },
  //     (error) => {
  //       console.error('Erro ao atualizar status de verificação');
  //     }
  //   );
  // }
}
