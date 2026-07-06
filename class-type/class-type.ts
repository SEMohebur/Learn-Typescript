class ClassUser {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
  display(): void {
    console.log(this.userName, this.age);
  }
}

let tempUser = new ClassUser("mohebur", 55);
// tempUser.display();

class Student extends ClassUser {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
}

let student1 = new Student("Mohebur", 55, 3434);

console.log(student1.studentId);
