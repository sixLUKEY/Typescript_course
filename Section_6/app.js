"use strict";
const employee = {
    name: "Luke",
    priveleges: [],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(employee) {
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
let v1 = new Car();
let v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo();
    }
}
useVehicle(v2);
function moveAnimal(animal) {
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
let newBird = {
    type: "bird",
    flyingSpeed: 120,
};
moveAnimal(newBird);
