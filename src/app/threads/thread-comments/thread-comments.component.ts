import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-thread-comments',
  templateUrl: './thread-comments.component.html',
  styleUrls: ['./thread-comments.component.scss']
})
export class ThreadCommentsComponent {
  @Input() commentsId: number[] | undefined = [];
  @Input() customClasses: string = '';
  
  constructor() { }
}
