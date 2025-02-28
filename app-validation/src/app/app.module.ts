import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ValidateComponent } from './pages/validate/validate.component';
import { HomeComponent } from './pages/home/home/home.component';
import { ProfileComponent } from './pages/profile/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PasswordResetComponent } from './pages/password-reset/password-reset.component';
import { PasswordUpdateComponent } from './pages/password-update/password-update.component';
import { LoginComponent } from './pages/login/login.component';
import { SmsValidateComponent } from './pages/sms-validate/sms-validate.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    ValidateComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    PasswordResetComponent,
    PasswordUpdateComponent,
    LoginComponent,
    SmsValidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
