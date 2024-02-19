"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        // this.name = n;
    }
    static createEmployee(name) {
        return { name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        return `${this.employees.length}, ${this.employees}`;
    }
}
//   private name: string;
Department.financialYear = 2024;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        return `Department: (${this.id}) - ${this.name}`;
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No reports were found!");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    describe() {
        return `Department: (${this.id}) - ${this.name}`;
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printreports() {
        return this.reports;
    }
}
const accounting = new AccountingDepartment(25, ["General Ledger"]);
const infos = new ITDepartment(28, ["Max"]);
const firstEmployee = Department.createEmployee("Lukas");
console.log(firstEmployee);
accounting.addEmployee("Phineas");
accounting.addEmployee("Kobus");
accounting.describe();
console.log(accounting.printEmployeeInformation());
accounting.addReport("Balance Sheet");
console.log(accounting.describe());
// Getter function is called without brackets
console.log(accounting.mostRecentReport, Department.financialYear);
// Set the value of mostRecentReport using setter
accounting.mostRecentReport = "Some values changed";
console.log(infos.describe());
