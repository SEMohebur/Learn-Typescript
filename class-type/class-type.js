class ClassUser {
    userName;
    age;
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    display() {
        console.log(this.userName, this.age);
    }
}
let tempUser = new ClassUser("mohebur", 55);
// tempUser.display();
class Student extends ClassUser {
    studentId;
    constructor(userName, age, studentId) {
        super(userName, age);
        this.studentId = studentId;
    }
}
let student1 = new Student("Mohebur", 55, 3434);
console.log(student1.studentId);
export {};
//# sourceMappingURL=class-type.js.map