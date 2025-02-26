import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { ValidateComponent } from './pages/validate/validate.component';
import { HomeComponent } from './pages/home/home/home.component';
import { ProfileComponent } from './pages/profile/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: RegistroComponent },
  { path: 'validate', component: ValidateComponent },
  { path: 'home', component: HomeComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '**', redirectTo: '/register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
