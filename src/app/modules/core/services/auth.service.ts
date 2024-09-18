import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  AuthResponse,
  ChangePasswordData,
  IUser,
  LoginData,
  RegisterData,
  ResetPasswordData,
} from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(body: LoginData): Observable<IUser> {
    return this.http.post<IUser>(`${this.apiUrl}/login`, body);
  }

  logout(): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}/login`);
  }

  register(body: RegisterData): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/logout`, body);
  }

  activateAccount(uid: string): Observable<IUser> {
    const params = new HttpParams().append('uid', uid);

    return this.http.get<IUser>(`${this.apiUrl}/activate`, { params });
  }

  resetPassword(body: ResetPasswordData): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/reset-password`, body);
  }

  changePassword(body: ChangePasswordData): Observable<AuthResponse> {
    return this.http.patch<AuthResponse>(`${this.apiUrl}/reset-password`, body);
  }
}
