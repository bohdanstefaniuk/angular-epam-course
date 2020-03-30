export class CartItem {
  productId: number;
  name: string;
  count = 0;
  total = 0;
  pricePerOne = 0;

  decrease() {
    this.count--;
    this.total = this.pricePerOne * this.count;
  }

  increase() {
    this.count++;
    this.total = this.pricePerOne * this.count;
  }
}
