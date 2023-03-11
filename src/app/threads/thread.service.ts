import { Injectable, OnInit } from '@angular/core';
import { Subject, take } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';
import threads from '../data/threads';
import { User } from '../models/User.model';
import { Thread } from './thread.model';

@Injectable({
  providedIn: 'root'
})
export class ThreadService implements OnInit {
  threads: Array<Thread> = threads;
  threadsUpdated = new Subject<Thread[]>();
  user: User | null = null;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.user = user;
    })
  }

  public getThreads() {
    return this.threads.slice();
  }

  public getThreadById(id: string) {
    return this.threads.find(thread => thread.id === id);
  }

  public addNewThread(thread: Thread) {
    this.threads.push(thread);
    this.threadsUpdated.next(this.threads.slice());
  }

  public getAllTags(): Set<string> {
    const tags = new Set<string>();
    this.threads.forEach((thread) => {
      thread.tags.forEach((tag: string) => tags.add(tag));
    })
    return tags;
  }

  public getLoggedUserThreads(): Thread[] {
    return this.threads.filter((thread: Thread) => {
      return this.user?.threads_id.indexOf(thread.id) !== -1;
    })
  }
}
