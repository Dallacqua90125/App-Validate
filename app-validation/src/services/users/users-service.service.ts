import { Users } from './../../models/Users';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  apiUrl = `${environment.apiUrl}User/register`;

  constructor(private http: HttpClient) { }

  createUser(users: Users): Observable<Users> {
    return this.http.post<Users>(this.apiUrl, users);
  }
}
