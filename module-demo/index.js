import { User } from "./student.js";
class Student extends User {
    studentId;
    constructor(userName, age, studentId) {
        super(userName, age);
        this.studentId = studentId;
    }
    studentDisplay() {
        console.log(`Name:${this.userName}, age:${this.age}, student id:${this.studentId}`);
    }
}
// let userInfo = new User("Mohebur", 55);
// console.log(userInfo.userName);
let student = new Student("Mohebur", 55, 3388433);
student.userDisplay();
student.studentDisplay();
//# sourceMappingURL=index.js.map