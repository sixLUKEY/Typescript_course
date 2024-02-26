interface Objectibles {
  name: string;
  age: number;
  regions?: string[];
}

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

let objectA: Objectibles = {
  name: "Luke",
  age: 23,
  regions: ["ZA"],
};

let objectB: Objectibles = {
  name: "AK",
  age: 47,
};

let mergedObject = merge(objectA, objectB);
console.log(mergedObject);

let anotherMergedObject = merge({ name: "Felix", size: 35 }, { age: 300 });
console.log(anotherMergedObject);

// Extending with Generic Functions
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value!";

  if (element.length === 1) {
    descriptionText = "Got 1 character.";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} characters.`;
  }

  return [element, descriptionText];
}

console.log(countAndDescribe("Goodday"));

// Using Keyof Constraint
interface TestObject {
  name: string;
  age: number;
  length?: number;
}

function extractAndConvert<T extends TestObject, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

let newObj: TestObject = {
  name: "New Object",
  age: 22,
  length: 25,
};

let anotherNewObj: TestObject = {
  name: "Another One",
  age: 30,
};

let lastObj = {
  name: "pilib",
  age: 80,
  drive: 60,
};

console.log(extractAndConvert(newObj, "age"));
console.log(extractAndConvert(anotherNewObj, "length"));
console.log(extractAndConvert(lastObj, 'drive'));
