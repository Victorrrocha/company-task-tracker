import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService, UserAuth } from './authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  isRegistering = false;

  loginForm: FormGroup = this.fb.group({
    indentification: ['', Validators.required],
    password: ['', Validators.required]
  });

  registerForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
    role: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private authService: AuthenticationService) {}

  ngOnInit(): void {
    
  }

  switchMenu() {
    this.isRegistering = !this.isRegistering;
  }

  onSubmit() {
    this.isRegistering ? this.register() : this.login();
  }

  login() {
    this.loginForm.markAllAsTouched();
    if (!this.loginForm.valid) {
      return;
    }
    const {indentification, password} = this.loginForm.getRawValue();
    const user: UserAuth = {
      usernameOrEmail: indentification,
      password: password
    }
    this.authService.login(user);
  }

  register() {

  }

  loginAsGuest() {
    const user: UserAuth = {
      usernameOrEmail: 'jane.doe@email.com',
      password: 'password'
    }
    this.authService.login(user);
  }
}
