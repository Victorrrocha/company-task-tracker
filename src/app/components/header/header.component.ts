import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { User } from 'src/app/models/User.model';
import { getInitials } from 'src/app/shared/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private authService: AuthenticationService) {}
  private userSub: Subscription = Subscription.EMPTY;
  username = "Mister User";
  role = "Manager";
  initials = "MU";

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user: User | null) => {
      if (!!user) {
        this.username = user.username;
        this.role = user.role;
        this.initials = getInitials(user.username);
      }
    })
  } 

  

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
