class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Milton");
textStorage.addItem("Kroos");
textStorage.removeItem("Milton");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(12);
numberStorage.addItem(200);
numberStorage.addItem(12.6);
console.log(numberStorage.getItems());