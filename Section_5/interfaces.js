"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
add(22, 23);
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
let user1 = new Person("Lucas");
user1.greet(`Hi there, I am`);
