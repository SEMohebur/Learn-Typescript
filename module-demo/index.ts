import { User } from "./student.js";

class Student extends User {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  studentDisplay(): void {
    console.log(
      `Name:${this.userName}, age:${this.age}, student id:${this.studentId}`,
    );
  }
}

// let userInfo = new User("Mohebur", 55);
// console.log(userInfo.userName);

let student = new Student("Mohebur", 55, 3388433);

student.userDisplay();
student.studentDisplay();
