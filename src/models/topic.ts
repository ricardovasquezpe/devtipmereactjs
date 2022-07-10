export class Topic{
    private title: string;
    private link: string;
    private total: number;

    constructor(title: string, link: string, total:number) {
      this.title = title;
      this.link = link;
      this.total = total;
    }
}