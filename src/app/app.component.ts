import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import User from './interfaces/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _loginService: LoginService) { }
  ngOnInit(): void {
    
  }
  get userInfo(): User { return this._loginService.user; }
  logout() { this._loginService.logout(); }
}
