abstract class Department {
  //   private name: string;
  static financialYear = 2024;
  protected employees: string[] = [];

  constructor(protected readonly id: number, public name: string) {
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // Some handling goes here
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    return `${this.employees.length}, ${this.employees}`;
  }
}

class ITDepartment extends Department {
  constructor(id: number, public admins: string[]) {
    super(id, "IT");
  }

  describe() {
    return `Department: (${this.id}) - ${this.name}`;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No reports were found!");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  private constructor(id: number, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment(25, []);
    return this.instance;
  }

  describe() {
    return `Department: (${this.id}) - ${this.name}`;
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printreports() {
    return this.reports;
  }
}

const accounting = AccountingDepartment.getInstance();
const infos = new ITDepartment(28, ["Max"]);

const firstEmployee = Department.createEmployee("Lukas");
console.log(firstEmployee);

accounting.addEmployee("Phineas");
accounting.addEmployee("Kobus");
console.log(accounting.printEmployeeInformation());
accounting.addReport("Balance Sheet");
console.log(accounting.describe());

// Getter function is called without brackets
console.log(accounting.mostRecentReport, Department.financialYear);

// Set the value of mostRecentReport using setter
accounting.mostRecentReport = "Some values changed";

console.log(infos.describe());
