"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    userName;
    age;
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
}
class Student extends User {
    studentId;
    constructor(userName, age, studentId) {
        super(userName, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`Name: ${this.userName},
Age: ${this.age},
ID: ${this.studentId}`);
    }
}
const student1 = new Student("Mohibur", 24, 101);
student1.display();
//# sourceMappingURL=abstruction.js.map