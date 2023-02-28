import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Tab } from './tab/Tab.model';

@Injectable({
  providedIn: 'root'
})
export class OpenTabsService {
  selectedTab: Tab | null = null;
  openTabs: Array<Tab> = [];
  allTabs: Array<Tab> = [];
  addingNewThread: boolean = false;
  tabsChanged = new Subject<Tab[]>();

  constructor(private router: Router) { }

  public selectTab(newTab: Tab) { // one click
    if (!this.openTabs.find(tab => tab.id === newTab.id)) {
      this.selectedTab = newTab;
      this.allTabs = [...this.openTabs, this.selectedTab];
      this.tabsChanged.next(this.allTabs.slice());
    }
  }

  public pushTab(newTab: Tab) { // double click
    if (!this.openTabs.find(tab => tab.id === newTab.id)) {
      this.openTabs.push(newTab);
      this.allTabs = [...this.openTabs];
      this.tabsChanged.next(this.allTabs.slice());
    }
  }

  public popTab(tabId: string) { // close
    let previousId = 0; // the new tab that will be opened
    this.openTabs = this.openTabs.filter((tab: Tab, index: number) => {
      if (tab.id !== tabId) {
        return true;
      }
      previousId = (index - 1) >= 0 ? index - 1 : index;
      return false;
    });

    this.allTabs = [...this.openTabs];
    
    if (this.selectedTab 
      && this.selectedTab.id !== tabId 
      && !this.openTabs.find(tab => tab.id === this.selectedTab?.id)) {
      this.allTabs.push(this.selectedTab);
    }

    this.tabsChanged.next(this.allTabs.slice());

    // navigate to the tab of that id
    if (this.openTabs.length === 0) {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['thread', this.openTabs[previousId].id]);
    }
  }

  public getOpenTabs(): Array<Tab> {
    return this.allTabs.slice();
  }
}
