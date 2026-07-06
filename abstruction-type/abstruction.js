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
export {};
// ১. Abstraction কী?
// Abstraction হলো Implementation Details লুকিয়ে রেখে শুধুমাত্র প্রয়োজনীয় Functionality প্রকাশ করার প্রক্রিয়া।
// ২. Abstract Class কী?
// Abstract Class হলো এমন একটি Class যার Object তৈরি করা যায় না এবং যা Parent/Base Class হিসেবে ব্যবহৃত হয়।
// ৩. Abstract Method কী?
// Abstract Method হলো এমন Method যার Body থাকে না এবং Child Class-এ অবশ্যই Implement করতে হয়।
// ৪. Abstract Class-এর Object তৈরি করা যায় কি?
// না, করা যায় না।
// ৫. Abstract Class কেন ব্যবহার করা হয়?
// Code Reuse, Common Structure তৈরি করা এবং Child Class-কে নির্দিষ্ট Method Implement করতে বাধ্য করার জন্য।
//# sourceMappingURL=abstruction.js.map