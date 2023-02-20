import { Component, Input } from '@angular/core';
import { Thread } from '../thread.model';

@Component({
  selector: 'app-thread-card',
  templateUrl: './thread-card.component.html',
  styleUrls: ['./thread-card.component.scss']
})
export class ThreadCardComponent {
  @Input() title = "";
  @Input() tags: Array<string> = ["tag1", "tag2", "tag3"];
  @Input() following = false;
  @Input() threadObject: Thread | undefined;
}
