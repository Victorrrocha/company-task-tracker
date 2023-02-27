import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import threads from '../data/threads';
import { Thread } from './thread.model';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {
  threads: Array<Thread> = threads;
  threadsUpdated = new Subject<Thread[]>();

  constructor() { }

  public getThreads() {
    return this.threads.slice();
  }

  public getThreadById(id: number) {
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
}
