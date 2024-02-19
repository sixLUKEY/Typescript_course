class Department {
   name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    return `Department: ${this.name}`;
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    return this.employees.length;
    return this.employees;
  }
}

const accounting = new Department("Accounting");

accounting.addEmployee("Phineas");
accounting.addEmployee("Kobus");
accounting.describe();
accounting.printEmployeeInformation();
