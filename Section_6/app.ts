type Admin = {
  name: string;
  priveleges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const employee: ElevatedEmployee = {
  name: "Luke",
  priveleges: [],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(employee: UnknownEmployee) {
  console.log(employee.name);
  if ("priveleges" in employee) {
    console.log(employee.priveleges);
  }
  if ("startDate" in employee) {
    console.log(employee.startDate);
  }
}

printEmployeeInformation(employee);

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck");
  }

  loadCargo() {
    console.log("Loading cargo...");
  }
}

type Vehicle = Car | Truck;

let v1 = new Car();
let v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo();
  }
}

useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(`Moving at an incredible speed of ${speed}!`);
}

let newBird: Bird = {
  type: "bird",
  flyingSpeed: 120,
};

moveAnimal(newBird);

let paragraph = document.querySelector("p");

let inputElement = <HTMLInputElement>document.getElementById("big-input");

//OR

let anotherParagraph = document.getElementById(
  "big-para"
) as HTMLParagraphElement;

inputElement.value = "A message!";
anotherParagraph.innerText = "hey";

interface ErrorContainer {
  // { email: 'Not a valid email' }
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid Email",
  username: "Must start with a capital letter",
};

// Optional Chaining
const fetchedUserData = {
  id: "u1",
  name: "Lukas",
  job: { title: "Boss", years: 2 },
};

console.log(fetchedUserData?.job?.title);

const userInput = '';

const storedData = userInput ?? 'Default';
console.log(storedData)