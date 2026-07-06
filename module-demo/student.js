export class User {
    userName;
    age;
    constructor(userName, age) {
        ((this.userName = userName), (this.age = age));
    }
    userDisplay() {
        console.log(`Name : ${this.userName}, age : ${this.age}`);
    }
}
//# sourceMappingURL=student.js.map