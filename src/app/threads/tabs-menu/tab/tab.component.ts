import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OpenTabsService } from '../open-tabs.service';
import { Tab } from './Tab.model';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() tabObj: Tab = {
    id: -1, 
    title: '',
    url: ''
  };
  tabActive = false;

  constructor(
    private openTabsService: OpenTabsService, 
    private route: ActivatedRoute) {}

  
  ngOnInit(): void {
    
  }
  
  closeTab() {
    this.openTabsService.popTab(this.tabObj.id);
  }
}
