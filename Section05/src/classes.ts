abstract class Department {
    static fiscalYear = '2020';
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = name;
    }

    static createEmployee(name: string){
        return {name:name}
    }

    abstract describe(this: Department): void;

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

    describe(){
        console.log("IT Department ID: " + this.id)
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

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

    private constructor(id: string, private reports: string[]){
        super(id, 'Accouting')
        this.lastReport = reports[0]
    }

    static getInstance() {
        if(AccountingDepartment.instance) {
            return this.instance
        }
        this.instance = new AccountingDepartment('d2', [])
        return this.instance;
    }

    describe(){
        console.log('Accounting Department ID: ' + this.id )
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

const employee1 = Department.createEmployee('Maph')
console.log(employee1, Department.fiscalYear) // {name: 'Maph'} '2020'

const it = new ITDepartment('d1', ['Mphnw']);

it.addEmployee('MAX');
it.addEmployee('Maphnew');

// accounting.employees[3] = 'Anna'

it.describe()
it.printEmployeeInformation();

console.log(it)

// const accountingDepartment = new AccountingDepartment('d2', []);
const accountingDepartment = AccountingDepartment.getInstance();
const accountingDepartment2 = AccountingDepartment.getInstance();

console.log(accountingDepartment, accountingDepartment2)

// accountingDepartment.mostRecentReport = '';
accountingDepartment.addReport("Something went wrong...")
accountingDepartment.mostRecentReport = "Year End Report";
console.log(accountingDepartment.mostRecentReport)
accountingDepartment.addEmployee('maphnew')

// accountingDepartment.printReports();
// accountingDepartment.printEmployeeInformation();
accountingDepartment.describe();

// const accountingCopy = { name: 's', describe: accounting.describe }

// accountingCopy.describe();

