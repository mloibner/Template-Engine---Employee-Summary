const Employee = require("./Employee");

class Engineer {
    constructor (github, id, name, email) {
        super (id, name, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer"
    }
}