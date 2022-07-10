export class Topic{
    public title: string;
    public link: string;
    public total: number;

    constructor(title: string, link: string, total:number) {
      this.title = title;
      this.link = link;
      this.total = total;
    }
}