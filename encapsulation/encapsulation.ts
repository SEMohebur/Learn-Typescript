class User {
  public userName: string;
  protected age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log("hii ancapsulation");
  }
}

class Student extends User {
  private studentId: number;
  readonly religion: string;

  constructor(
    userName: string,
    age: number,
    studentId: number,
    religion: string,
  ) {
    super(userName, age);
    this.studentId = studentId;
    this.religion = religion;
  }
  display(): void {
    console.log(
      `user Name : ${this.userName} age: ${this.age} Student Id ${this.studentId} religion ${this.religion}`,
    );
  }

  setStudentId(studentId: number): void {
    this.studentId = studentId;
  }
  getStudentId() {
    return console.log(this.studentId);
  }
}

let student1 = new Student("mohebur", 55, 9899729, "islam");

// user name public rakhate object name diye access kora jay and reassign kora jay
student1.userName = "labib";

//private variable bahire acces kora jay na extand koreo acces ba change kora jayna but jei classe declear kora hoice oi classei method er madhome set kora jay ba change kora jay ar shei method diye bahir theke change kora passible
student1.setStudentId(333333333);

// protected variable bhir theke access kora jayna reassign kora jayna but extand korle oita use kora jabe difference classe
// student1.age = 45

student1.getStudentId();

student1.display();

// readonly variable sodho pora jabe read kora jabe but eta kono bhabei change kora jabena ba reassign kora jabena
console.log(student1.religion);

// ======================================================

// sohoje recap korar jonno

// class User {
//   // ✅ public
//   // Default access modifier.
//   // Class এর ভিতরে, child class এ এবং object দিয়েও access ও modify করা যায়.
//   public userName: string;

//   // ✅ protected
//   // Class এর ভিতরে এবং child class এ access করা যায়.
//   // কিন্তু object দিয়ে বাইরে থেকে access বা modify করা যায় না.
//   protected age: number;

//   constructor(userName: string, age: number) {
//     this.userName = userName;
//     this.age = age;
//   }

//   display(): void {
//     console.log("hii ancapsulation");
//   }
// }

// class Student extends User {
//   // ✅ private
//   // শুধুমাত্র এই class এর ভিতরেই access করা যায়.
//   // Child class বা object কোথাও থেকেই সরাসরি access করা যায় না.
//   // দরকার হলে getter/setter method দিয়ে access বা modify করতে হয়.
//   private studentId: number;

//   // ✅ readonly
//   // একবার value assign করার পর আর কখনো change করা যায় না.
//   // শুধু read করা যায়.
//   readonly religion: string;

//   constructor(
//     userName: string,
//     age: number,
//     studentId: number,
//     religion: string,
//   ) {
//     super(userName, age);
//     this.studentId = studentId;
//     this.religion = religion;
//   }

//   display(): void {
//     console.log(
//       `user Name : ${this.userName} age: ${this.age} Student Id ${this.studentId} religion ${this.religion}`,
//     );
//   }

//   // private property update করার জন্য setter
//   setStudentId(studentId: number): void {
//     this.studentId = studentId;
//   }

//   // private property দেখার জন্য getter
//   getStudentId() {
//     return console.log(this.studentId);
//   }
// }

// let student1 = new Student("mohebur", 55, 9899729, "islam");

// // ======================================================
// // Encapsulation Recap
// // ======================================================

// // ✅ public
// // object দিয়ে access ও modify করা যায়.
// student1.userName = "labib";

// // ✅ private
// // সরাসরি access করা যাবে না.
// // student1.studentId ❌

// // private property change করতে setter ব্যবহার করতে হয়.
// student1.setStudentId(333333333);

// // private property দেখতে getter ব্যবহার করতে হয়.
// student1.getStudentId();

// // ✅ protected
// // object দিয়ে access করা যায় না.
// // কিন্তু child class এর ভিতরে ব্যবহার করা যায়.
// // student1.age = 45 ❌

// // ✅ readonly
// // value শুধু read করা যাবে.
// // reassign করলে error হবে.
// // student1.religion = "Hindu" ❌
// console.log(student1.religion);

// // method call
// student1.display();
