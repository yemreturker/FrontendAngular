import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoginModel } from '../models/authModels/userLoginModel';
import { Observable } from 'rxjs';
import { AuthResponseModel } from '../models/responseModels/authResponseModel';
import { UserRegisterModel } from '../models/authModels/userRegisterModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiBaseUrl = 'https://localhost:7000/api';
  constructor(private httpClient: HttpClient) {}

  login(user: UserLoginModel) : Observable<AuthResponseModel> {
    var path = this.apiBaseUrl + '/Auth/login';
    return this.httpClient.post<AuthResponseModel>(path, user);
  }

  register(user: UserRegisterModel) : Observable<AuthResponseModel> {
    var path = this.apiBaseUrl + '/Auth/register';
    return this.httpClient.post<AuthResponseModel>(path, user);
  }
}