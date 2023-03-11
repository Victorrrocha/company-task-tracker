import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThreadComment } from '../comment.type';
import { CommentsService } from '../comments.service';
import { v4 as uuidv4 } from 'uuid';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { getInitials } from 'src/app/shared/utils';

@Component({
  selector: 'app-thread-comment',
  templateUrl: './thread-comment.component.html',
  styleUrls: ['./thread-comment.component.scss']
})
export class ThreadCommentComponent {
  @Input() commentId: string = '';
  comment: ThreadComment | undefined;
  inReplyMode = false;
  newComment: FormControl = new FormControl('');
  hasReplies = false;
  username = "";
  initials = "";

  constructor(private commentsService: CommentsService, private authService: AuthenticationService) {
    this.commentsService.commentsUpdated
      .subscribe((id: string) => {
        if (this.commentId === id) { 
          this.comment = this.commentsService.getComment(this.commentId);
          this.hasReplies = !!this.comment?.repliesId.length && this.comment?.repliesId.length  > 0;
        }
      })
  }

  ngOnInit(): void {
    this.comment = this.commentsService.getComment(this.commentId);
    this.hasReplies = !!this.comment?.repliesId.length && this.comment?.repliesId.length  > 0;
    if (this.comment) {
      this.initials = getInitials(this.comment.author);
    }
  }

  public activateReplyMode(id: number | string | undefined) {
    if (!!id) {
      this.inReplyMode = true;
    }
  }

  public deactivateReplyMode(id: number | string | undefined) {
    if (!!id) {
      this.inReplyMode = false;
    }
  }

  public postComment() {
    if (!!this.comment && !!this.authService.getLoggedUser()) {
      const newCommentId = uuidv4();
      const newComment: ThreadComment = {
        parentId: this.comment.id,
        id: newCommentId,
        author: this.authService.getLoggedUser() || "??",
        message: this.newComment.value + '',
        repliesId: []
      }
      this.commentsService.addComment(newComment);
      this.resetReplyMode();
    }
  }

  resetReplyMode() {
    this.newComment.setValue("");
    this.inReplyMode = false;
  }
}
