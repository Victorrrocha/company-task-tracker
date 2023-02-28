import { ThreadComment } from "./thread-comments/comment.type";

export class Thread {
    constructor(
        public id: string, 
        public title: string, 
        public author: string, 
        public tags: string[], 
        public content: string) { }
}