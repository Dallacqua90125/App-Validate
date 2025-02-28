import { Users } from './../../models/Users';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  apiUrl = `${environment.apiUrl}User`;

  constructor(private http: HttpClient) { }

  getUser(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);
  }

  createUser(users: Users): Observable<Users> {
    const registerUrl = `${this.apiUrl}/register`;
    return this.http.post<Users>(registerUrl, users);
  }

  validateEmail(email: string, code: string): Observable<string> {
    const validationUrl = `${this.apiUrl}/verify?email=${encodeURIComponent(email)}&code=${encodeURIComponent(code)}`;
    return this.http.post<string>(validationUrl, {}, { responseType: 'text' as 'json' });
  }

  validateSms(telefone: string, code: string): Observable<string> {
    const validateUrl = `${this.apiUrl}/verify-phone`;
    return this.http.post<string>(validateUrl, {}, { responseType: 'text' as 'json' });
  }

  updateUserVerificationStatus(email: string): Observable<any> {
    const updateUrl = `${this.apiUrl}/updateVerificationStatus?email=${encodeURIComponent(email)}`;
    return this.http.put<any>(updateUrl, { isEmailVerified: true });
  }

  getUserById(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}/${id}`);
  }

  resetPassword(email: string): Observable<string> {
    const resetUrl = `${this.apiUrl}/forgot-password`;
    return this.http.post<string>(resetUrl, { email }, { responseType: 'text' as 'json' });
  }

  updateUser(user: Partial<Users>): Observable<Users> {
    const updateUrl = `${this.apiUrl}/${user.id}`;
    return this.http.put<Users>(updateUrl, user);
  }

  updatePassword(email: string, token: string, newPassword: string): Observable<string> {
    const updateUrl = `${this.apiUrl}/reset-password`;
    return this.http.post<string>(updateUrl, { email, token, newPassword }, { responseType: 'text' as 'json' });
  }
}
