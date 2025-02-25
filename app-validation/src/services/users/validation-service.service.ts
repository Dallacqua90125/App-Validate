import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationServiceService {
  apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  validateEmail(email: string, code: string): Observable<any> {

    const validationUrl = `${this.apiUrl}User/verify?email=${encodeURIComponent(email)}&code=${encodeURIComponent(code)}`;
    return this.http.post<any>(validationUrl, {});
  }


  updateUserVerificationStatus(email: string): Observable<any> {
    // Endpoint para atualizar o status de verificação no servidor
    const updateUrl = `${this.apiUrl}User/updateVerificationStatus?email=${encodeURIComponent(email)}`;
    return this.http.put<any>(updateUrl, { isEmailVerified: true });
  }
}
