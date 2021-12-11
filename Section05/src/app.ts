class Department {
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.id = id;
        // this.name = name;
    }

    describe(this: Department) {
        console.log(`Department(${this.id}): ${this.name}`)
    }

    addEmployee(employee: string) {
        // this.id = 'd2'; // <-- Error
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    admins: string[]
    constructor(id: string, admins: string[]){
        super(id, 'IT')
        this.admins = admins
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]){
        super(id, 'Accouting')
    }

    addEmployee(name: string) {
        this.employees.push(name)
    }

    addReport(text: string) {
        this.reports.push(text)
    }

    printReports() {
        console.log(this.reports)
    }
}

const it = new ITDepartment('d1', ['Mphnw']);

it.addEmployee('MAX');
it.addEmployee('Maphnew');

// accounting.employees[3] = 'Anna'

it.describe()
it.printEmployeeInformation();

console.log(it)

const accountingDepartment = new AccountingDepartment('d2', []);

accountingDepartment.addReport("Something went wrong...")
accountingDepartment.addEmployee('maphnew')

accountingDepartment.printReports();
accountingDepartment.printEmployeeInformation();


// const accountingCopy = { name: 's', describe: accounting.describe }

// accountingCopy.describe();

