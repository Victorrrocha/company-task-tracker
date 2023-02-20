import { Injectable } from '@angular/core';
import threads from '../data/threads';
import { Thread } from './thread.model';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {
  threads: Array<Thread> = threads;

  constructor() { }

  public getThreads() {
    return this.threads.slice();
  }

  public getThreadById(id: number) {
    return this.threads.find(thread => thread.id === id);
  }
}
