import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { ValidateComponent } from './pages/validate/validate.component';
import { HomeComponent } from './pages/home/home/home.component';
import { ProfileComponent } from './pages/profile/profile/profile.component';
import { PasswordUpdateComponent } from './pages/password-update/password-update.component';
import { PasswordResetComponent } from './pages/password-reset/password-reset.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'reset-password', component: PasswordResetComponent },
  { path: 'update-password', component: PasswordUpdateComponent },
  { path: 'register', component: RegistroComponent },
  { path: 'validate', component: ValidateComponent },
  { path: 'home', component: HomeComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
