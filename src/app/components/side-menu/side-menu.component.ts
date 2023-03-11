import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Thread } from 'src/app/threads/thread.model';
import { ThreadService } from 'src/app/threads/thread.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  threads: Thread[] = [];
  showThreads: Thread[] = [];
  userThreads: Thread[] = [];
  showUserThreads = new FormControl(false);
  threadsSubscription: Subscription = Subscription.EMPTY;

  constructor(private threadService: ThreadService) {
    this.threadsSubscription = this.threadService.threadsUpdated
    .subscribe((threads: Thread[]) => {
      this.threads = threads;
      this.userThreads = this.threadService.getLoggedUserThreads();
      this.showThreads = this.showUserThreads.value ? this.userThreads : this.threads;
    })
    this.showThreads = this.showUserThreads.value ? this.userThreads : this.threads;
  }
  
  ngOnInit(): void {
    this.threads = this.threadService.getThreads();
    this.userThreads = this.threadService.getLoggedUserThreads();
    this.showThreads = this.showUserThreads.value ? this.userThreads : this.threads;
  }

  toggleCheckbox() {
    this.showUserThreads.patchValue(!this.showUserThreads.value);
    this.showThreads = this.showUserThreads.value ? this.userThreads : this.threads;
  }

}
