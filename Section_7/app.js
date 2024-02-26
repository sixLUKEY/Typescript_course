"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
let objectA = {
    name: "Luke",
    age: 23,
    regions: ["ZA"],
};
let objectB = {
    name: "AK",
    age: 47,
};
let mergedObject = merge(objectA, objectB);
console.log(mergedObject);
let anotherMergedObject = merge({ name: "Felix", size: 35 }, { age: 300 });
console.log(anotherMergedObject);
function countAndDescribe(element) {
    let descriptionText = "Got no value!";
    if (element.length === 1) {
        descriptionText = "Got 1 character.";
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} characters.`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Goodday"));
function extractAndConvert(obj, key) {
    return obj[key];
}
let newObj = {
    name: "New Object",
    age: 22,
    length: 25,
};
let anotherNewObj = {
    name: "Another One",
    age: 30,
};
console.log(extractAndConvert(newObj, "age"));
console.log(extractAndConvert(anotherNewObj, "length"));
