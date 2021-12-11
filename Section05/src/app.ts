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
    private lastReport: string;

    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport
        }
        throw new Error("No report found.")
    } 

    set mostRecentReport(value: string) {
        if(!value){
            throw new Error("Please pass in a valid value!")
        }
        this.addReport(value)
    }

    constructor(id: string, private reports: string[]){
        super(id, 'Accouting')
        this.lastReport = reports[0]
    }

    addEmployee(name: string) {
        this.employees.push(name)
    }

    addReport(text: string) {
        this.reports.push(text)
        this.lastReport = text
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

// accountingDepartment.mostRecentReport = '';
accountingDepartment.addReport("Something went wrong...")
accountingDepartment.mostRecentReport = "Year End Report";
console.log(accountingDepartment.mostRecentReport)
accountingDepartment.addEmployee('maphnew')

accountingDepartment.printReports();
accountingDepartment.printEmployeeInformation();


// const accountingCopy = { name: 's', describe: accounting.describe }

// accountingCopy.describe();

