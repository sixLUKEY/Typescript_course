class Department {
  //   private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: number, public name: string) {
    // this.name = n;
  }

  describe() {
    return `Department: (${this.id}) ${this.name}`;
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    return this.employees.length;
    return this.employees;
  }
}

class ITDepartment extends Department {
  constructor(id: number, public admins: string[]) {
    super(id, "IT");
  }
}

class AccountingDepartment extends Department {
  constructor(id: number, private reports: string[]) {
    super(id, "Accounting");
  }

  addEmployee(name: string) {
    if (name === "Max") {
        return
    }
    this.employees.push(name)
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printreports() {
    return this.reports;
  }
}

const accounting = new AccountingDepartment(25, ["General Ledger"]);
const infos = new ITDepartment(28, ["Max"]);

accounting.addEmployee("Phineas");
accounting.addEmployee("Kobus");
accounting.describe();
accounting.printEmployeeInformation();
accounting.addReport("Balance Sheet");
