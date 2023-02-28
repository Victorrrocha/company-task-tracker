import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ThreadComment } from './comment.type';
import { Comments } from 'src/app/data/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  #isCommenting = false;
  #targetComment: number = -1;
  commentBeingEditIdUpdated = new Subject<number>();
  commentsUpdated = new Subject<string>();
  comments: ThreadComment[] = Comments;

  constructor() { }

  get isCommenting() {
    return this.#isCommenting;
  }

  get targetComment() {
    return this.#targetComment;
  }

  public initiateComment(id: number) {
    this.#targetComment = id;
    this.commentBeingEditIdUpdated.next(id);
  }

  public exitCommentMode() {
    this.#isCommenting = false;
    this.#targetComment = -1;
    this.commentBeingEditIdUpdated.next(this.#targetComment);
  }

  public getComment(id: string): ThreadComment | undefined {
    return this.comments.find((comment: ThreadComment) => comment.id === id);
  }

  public addComment(comment: ThreadComment) {
    const parentId = comment.parentId;
    const parent = this.comments.find((comment: ThreadComment) => comment.id === parentId);
    this.comments.push(comment);
    if (!!parent) {
      parent.repliesId.push(comment.id);
    }
    this.commentsUpdated.next(parentId);
  }

  public findCommentsById(id: string): string[] {
    const foundIds = this.comments.reduce((acc, cur: ThreadComment) => {
      cur.parentId === id && acc.push(cur.id);
      return acc;
    }, new Array());

    return foundIds;
  }
}
