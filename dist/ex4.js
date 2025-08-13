"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Student ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Subject: ${this.subject}`);
    }
}
const student = new Student("Alice", "SV001");
const teacher = new Teacher("Mr. Bob", "Mathematics");
console.log("Student Info:");
student.displayInfo();
console.log("\nTeacher Info:");
teacher.displayInfo();
