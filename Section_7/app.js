"use strict";
function merge(objA, objB) {
    //@ts-ignore
    return Object.assign(objA, objB);
}
let objectA = {
    name: "Luke",
    age: 23,
    regions: ['ZA']
};
let objectB = {
    name: "AK",
    age: 47,
};
let mergedObject = merge(objectA, objectB);
console.log(mergedObject.name);
