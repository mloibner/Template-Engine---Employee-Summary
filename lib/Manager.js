const Employee = require("./Employee.js");

class Manager {
    constructor (officeNumber, id, name, email){
        super (id, name, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber () {
        return this.officeNumber;
    }
}