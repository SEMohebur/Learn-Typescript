interface User {
  name: string;
  age: number;
  isStudent: boolean;
}

const user1: User = {
  name: "Mohebur",
  age: 24,
  isStudent: true,
};

console.log(user1);
// ====================================

interface StudentInfo {
  name: string;
  age: number;
  isReguler: boolean;
  currentStudent?: string;
}

const student1: StudentInfo = {
  name: "sagur",
  age: 22,
  isReguler: true,
};
// =======================================
interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
  category: string;
  isAvailable: boolean;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: Product[];
}

const response: ApiResponse = {
  success: true,
  message: "Products fetched successfully",
  data: [
    {
      id: 1,
      title: "iPhone 15",
      price: 120000,
      stock: 10,
      category: "Mobile",
      isAvailable: true,
    },
    {
      id: 2,
      title: "MacBook Air M3",
      price: 180000,
      stock: 5,
      category: "Laptop",
      isAvailable: true,
    },
  ],
};

console.log(response.message);

response.data.forEach((product) => {
  console.log(product.title);
  console.log(product.price);
});

/*
==========================================
          TypeScript Interface Note
==========================================

✔ Interface কী?
---------------
Object, Class, Function বা Array-এর
structure (shape) define করার জন্য
interface ব্যবহার করা হয়।

✔ কেন ব্যবহার করা হয়?
----------------------
✅ Type Safety
✅ Code Reuse
✅ Readable Code
✅ Auto Suggestion
✅ Error দ্রুত ধরা যায়

✔ কোথায় ব্যবহার হয়?
----------------------
1. Object
2. Class (implements)
3. Function
4. Array
5. API Response

✔ Optional Property
-------------------
? ব্যবহার করলে property থাকতেও পারে,
না থাকলেও Error হবে না।

Example:
email?: string

✔ Readonly Property
-------------------
readonly ব্যবহার করলে পরে value
change করা যায় না।

Example:
readonly id: number

✔ Interface Extend
------------------
একটি interface অন্য interface-এর
property inherit করতে পারে।

Example:
interface Student extends User {}

✔ Interview Definition
-----------------------
Interface হলো TypeScript-এর একটি feature
যা Object-এর structure (shape) define
করতে ব্যবহার করা হয়।

==========================================
*/
