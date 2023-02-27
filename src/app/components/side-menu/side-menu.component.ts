import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Thread } from 'src/app/threads/thread.model';
import { ThreadService } from 'src/app/threads/thread.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  threads: Array<Thread> = [];
  threadsSubscription: Subscription = Subscription.EMPTY;

  constructor(private threadService: ThreadService) {
    this.threadsSubscription = this.threadService.threadsUpdated
    .subscribe((threads: Thread[]) => {
      this.threads = threads;
    })
  }
 
  ngOnInit(): void {
    this.threads = this.threadService.getThreads();
  }
}
