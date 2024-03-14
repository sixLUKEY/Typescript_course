//@ts-ignore
function Logger(target: any, propertyName: string | symbol) {
  console.log("Property Decorator!!");
  console.log(target, propertyName);
}

class Product {
  @Logger
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
