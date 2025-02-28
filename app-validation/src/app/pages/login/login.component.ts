import { Router } from '@angular/router';
import { UsersServiceService } from './../../../services/users/users-service.service';
import { Component, OnInit } from '@angular/core';
import { Users } from '../../../models/Users';
import * as CryptoJS from 'crypto-js'


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  users: Users[] = [];
  usersGeral: Users[] = [];
  email: string = '';
  password: string = '';

  constructor( private userService: UsersServiceService, private router: Router ){}

  ngOnInit(): void {
    this.userService.getUser().subscribe(response => {
      this.users = response;
      this.usersGeral = response;
    })
  }

  onSubmit(){
    const hashedPassword = CryptoJS.SHA256(this.password).toString(CryptoJS.enc.Base64);
    let funf: boolean = false;
    this.users.forEach(user => {
      if (this.email == user.email && hashedPassword == user.password) {
        alert(`Seja bem vindo ${user.nome}`);
        funf = true;
        this.router.navigate(['/home']);
      }
    })
    if (funf == false) {
      alert("Usuário não encontrado");
    }
  }
}
