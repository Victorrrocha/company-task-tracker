
export class Tab {
    public id: string;
    public title: string;
    public url?: string; 

    constructor(id: string, title: string, url: string) {
        this.id = id;
        this.title = title;
        this.url = url;
    }
}