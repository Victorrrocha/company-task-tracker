import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OpenTabsService } from './open-tabs.service';
import { Tab } from './tab/Tab.model';

@Component({
  selector: 'app-tabs-menu',
  templateUrl: './tabs-menu.component.html',
  styleUrls: ['./tabs-menu.component.scss']
})
export class TabsMenuComponent implements OnInit, OnDestroy {
  openTabs: Array<Tab> = []
  tabsSubscription: Subscription = Subscription.EMPTY;

  constructor(private openTabsService: OpenTabsService) {}
  
  ngOnInit(): void {
    this.tabsSubscription = this.openTabsService.tabsChanged
      .subscribe((tabs: Tab[]) => {
        this.openTabs = tabs;
      }
    );
    this.openTabs = this.openTabsService.getOpenTabs();
  }

  ngOnDestroy(): void {
    this.tabsSubscription.unsubscribe();
  }
}
