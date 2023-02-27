import { ThreadComment } from "./thread-comments/comment.type";

export class Thread {
    constructor(
        public id: number, 
        public title: string, 
        public author: string, 
        public tags: string[], 
        public content: string, 
        public commentsId: number[]) { }
}