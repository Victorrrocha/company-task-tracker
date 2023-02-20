export class Thread {
    public id: number;
    public title: string;
    public author: string; // Eployee
    public tags: Array<string>;
    public content: string;
    public messages?: Array<string>;

    constructor(id: number, title: string, author: string, tags: Array<string>, content: string, messages: Array<string>) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.tags = tags;
        this.content = content;
        this.messages = messages;
    }
}