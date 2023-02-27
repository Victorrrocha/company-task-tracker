import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { OpenTabsService } from '../tabs-menu/open-tabs.service';
import { Tab } from '../tabs-menu/tab/Tab.model';
import { Thread } from '../thread.model';
import { ThreadService } from '../thread.service';

@Component({
  selector: 'app-thread-page',
  templateUrl: './thread-page.component.html',
  styleUrls: ['./thread-page.component.scss']
})
export class ThreadPageComponent implements OnDestroy {
  constructor(
    private threadService: ThreadService, 
    private route: ActivatedRoute, 
    private openTabsService: OpenTabsService) { }
  
  pageRouteSubscription: Subscription = Subscription.EMPTY;
  thread_id: number = -1;
  thread: Thread = {
    id: -1,
    title: '',
    author: '',
    tags: [],
    content: '',
    commentsId: [],
  };
  
  ngOnInit(): void {
    this.pageRouteSubscription = this.route.params.subscribe((params: Params) => {
      this.thread_id = +params['id']
      const foundThread = this.threadService.getThreadById(this.thread_id);

      if (foundThread) {
        this.thread = foundThread;
        this.openTab();
      }
    })
  }

  openTab() {
    const newTab: Tab = {
      id: this.thread_id,
      title: this.thread.title,
    }
    this.openTabsService.selectTab(newTab);
  }

  ngOnDestroy(): void { 
    this.pageRouteSubscription.unsubscribe();
  }
}
