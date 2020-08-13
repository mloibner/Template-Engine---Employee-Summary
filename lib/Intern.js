const Employee = require("./Employee.js");

class Intern {
    constructor (school, id, name, email){
        super(id, name, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern"
    }
}