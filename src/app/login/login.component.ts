import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  constructor(private auth: AuthService, private router: Router) {

  }
  onLogin() {
    if (this.username !== '' && this.password !== '') {
      this.auth.logIn(this.username);
      this.router.navigateByUrl('');
    }
  }
}
