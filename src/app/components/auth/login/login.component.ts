import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUser } from 'src/app/models/authModels/currentUser';
import { UserLoginModel } from 'src/app/models/authModels/userLoginModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: UserLoginModel = {
    email: 'yemreturker@outlook.com',
    password: '123456',
  };
  constructor(private authService: AuthService, private _router: Router) {}

  ngOnInit(): void {
    if (CurrentUser.token.length < 1) this.login();
  }
  async login() {
    this.authService.login(this.user).subscribe(
      response => {
        console.log(response);
        CurrentUser.token = response.data.token;
        CurrentUser.expiration = response.data.expiration;
        this._router.navigate(['/tables']);
      },
      error => {
        if (error) console.error(error.message);
      }
    );
  }
}