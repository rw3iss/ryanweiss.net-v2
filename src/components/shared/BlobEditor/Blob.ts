export class Blob {
    id: string;
    type: string;
    title: string;
    content: {};

    constructor(id, type, title, content) {
        this.id = id;
        this.type = type;
        this.title = title;
        this.content = content;
    }
}