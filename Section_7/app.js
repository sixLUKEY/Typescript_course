"use strict";
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Milton");
textStorage.addItem("Kroos");
textStorage.removeItem("Milton");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(12);
numberStorage.addItem(200);
numberStorage.addItem(12.6);
console.log(numberStorage.getItems());
