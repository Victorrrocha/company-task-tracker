import { Component, Input, OnInit } from '@angular/core';
import { OpenTabsService } from '../tabs-menu/open-tabs.service';
import { Tab } from '../tabs-menu/tab/Tab.model';
import { Thread } from '../thread.model';

@Component({
  selector: 'app-thread-card',
  templateUrl: './thread-card.component.html',
  styleUrls: ['./thread-card.component.scss']
})
export class ThreadCardComponent{
  @Input() following = false;
  @Input() threadObject: Thread = {
    id: -1,
    title: '',
    author: '',
    tags: [],
    content: '',
    commentsId: []
  };
  url: string = '';

  constructor(private openTabsService: OpenTabsService) {}

  selectTab() {
    const newTab: Tab = {
      id: this.threadObject?.id,
      title: this.threadObject?.title
    }
    this.openTabsService.selectTab(newTab);
  }

  pushTab() {
    const newTab: Tab = {
      id: this.threadObject?.id,
      title: this.threadObject?.title
    }
    this.openTabsService.pushTab(newTab);
  }
}
