interface SizeItem {
  thin: string;
  thick: string;
  stuffed: string;
}
export class Crust {
  size: SizeItem;
  constructor(size: SizeItem) {
    this.size = size;
  }
  private listMenu():{key:string}
  thin() {}
  thick() {}
  stuffed() {}
}
