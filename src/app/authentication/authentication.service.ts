import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User.model';
import { Users } from '../data/users';
import { Router } from '@angular/router';

export interface UserAuth {
  usernameOrEmail: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user = new BehaviorSubject<User | null>(null);
  constructor(private router: Router) { }

  public register(user: User) {
    for (const saved_users of Users) {
      if (saved_users.id === user.id) {
        return;
      }
    }
    Users.push(user);
    this.user.next(user);
    this.router.navigate(['/']);
  }

  public login(logInfo: UserAuth) {
    for(const user of Users) {
      if (user.username === logInfo.usernameOrEmail || user.email === logInfo.usernameOrEmail) {
        if (user.password === logInfo.password) {
          this.user.next(user);
          this.router.navigate(['/']);
          return;
        }
      }
    }
  }

  getLoggedUser() {
    return this.user.value?.username;
  }

  public logout() {
    this.user.next(null);
  }
}
