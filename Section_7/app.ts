interface Objectibles {
  name: string;
  age: number;
  regions?: string[];
}

function merge<T, U>(objA: T, objB: U) {
    //@ts-ignore
  return Object.assign(objA, objB);
}

let objectA: Objectibles = {
  name: "Luke",
  age: 23,
  regions: ['ZA']
};

let objectB: Objectibles = {
  name: "AK",
  age: 47,
};

let mergedObject = merge(objectA, objectB);
console.log(mergedObject.name);
