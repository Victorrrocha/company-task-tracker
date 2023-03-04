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
    id: '', 
    title: '',
    url: ''
  };
  temporary = true;

  constructor(
    private openTabsService: OpenTabsService) {}

  ngOnInit(): void {
    this.temporary = !this.openTabsService.isPermanentlyOpened(this.tabObj.id);
  }
  
  closeTab() {
    this.openTabsService.popTab(this.tabObj.id);
  }
}
