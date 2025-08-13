abstract class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public displayInfo(): void {
    console.log(`Name: ${this.name}`);
  }
}

class Student extends Person {
  public id: string;

  constructor(name: string, id: string) {
    super(name);
    this.id = id;
  }

  public override displayInfo(): void {
    console.log(`Student ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
  }
}


class Teacher extends Person {
  public subject: string;

  constructor(name: string, subject: string) {
    super(name);
    this.subject = subject;
  }

  public override displayInfo(): void {
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
