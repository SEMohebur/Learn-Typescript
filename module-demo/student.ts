export class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    ((this.userName = userName), (this.age = age));
  }
  userDisplay(): void {
    console.log(`Name : ${this.userName}, age : ${this.age}`);
  }
}
