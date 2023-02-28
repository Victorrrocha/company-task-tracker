import { Component, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { OpenTabsService } from '../tabs-menu/open-tabs.service';
import { Tab } from '../tabs-menu/tab/Tab.model';
import { ThreadComment } from '../thread-comments/comment.type';
import { CommentsService } from '../thread-comments/comments.service';
import { Thread } from '../thread.model';
import { ThreadService } from '../thread.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-thread-page',
  templateUrl: './thread-page.component.html',
  styleUrls: ['./thread-page.component.scss']
})
export class ThreadPageComponent implements OnDestroy {
  constructor(
    private threadService: ThreadService, 
    private route: ActivatedRoute, 
    private openTabsService: OpenTabsService,
    private commentsService: CommentsService) { }
  
  pageRouteSubscription: Subscription = Subscription.EMPTY;
  commentsUpdatedSubscrition: Subscription = Subscription.EMPTY;
  commentControl: FormControl = new FormControl('', [Validators.required]);
  commentsId: string[] = [];
  thread_id: string = '';
  thread: Thread = {
    id: '',
    title: '',
    author: '',
    tags: [],
    content: ''
  };
  
  ngOnInit(): void {
    this.pageRouteSubscription = this.route.params.subscribe((params: Params) => {
      this.thread_id = params['id']
      const foundThread = this.threadService.getThreadById(this.thread_id);

      if (foundThread) {
        this.thread = foundThread;
        this.commentsId = this.commentsService.findCommentsById(this.thread_id);
        this.openTab();
      }
    });

    this.commentsUpdatedSubscrition = this.commentsService.commentsUpdated
      .subscribe((id: string) => {
          this.commentsId = this.commentsService.findCommentsById(this.thread_id);
      })
  }

  openTab() {
    const newTab: Tab = {
      id: this.thread_id,
      title: this.thread.title,
    }
    this.openTabsService.selectTab(newTab);
  }

  addComment() {
    const newCommentId = uuidv4();
    const newComment: ThreadComment = {
      parentId: this.thread_id,
      id: newCommentId,
      author: 'John Doe',
      message: this.commentControl.value + '',
      repliesId: []
    }
    this.commentsService.addComment(newComment);
    this.commentControl.setValue('');
  }

  ngOnDestroy(): void { 
    this.pageRouteSubscription.unsubscribe();
  }
}
