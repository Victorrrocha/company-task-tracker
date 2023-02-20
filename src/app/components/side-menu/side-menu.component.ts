import { Component, OnInit } from '@angular/core';
import { Thread } from 'src/app/threads/thread.model';
import { ThreadService } from 'src/app/threads/thread.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  threads: Array<Thread> = [];

  constructor(private threadService: ThreadService) { }
 
  ngOnInit(): void {
    this.threads = this.threadService.getThreads();
  }
}
