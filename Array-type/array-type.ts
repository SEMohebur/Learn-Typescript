// ==============================
// Array Type in TypeScript
// ==============================

// String Array
let products: string[];
// OR
// let products: Array<string>;

products = ["Apple", "iPhone", "TV", "Fridge"];

// ------------------------------

// Number Array
let numbers: number[];
// OR
// let numbers: Array<number>;

numbers = [100, 200, 300, 400];

// ------------------------------

// Boolean Array
let isAvailable: boolean[];
// OR
// let isAvailable: Array<boolean>;

isAvailable = [true, false, true];

// ------------------------------
// Multiple Type Array (Union Type)
// ------------------------------

let mixedArray: (string | number)[];

mixedArray = ["Apple", 1200, "TV", 5000];

console.log(products);
console.log(numbers);
console.log(isAvailable);
console.log(mixedArray);

// type[] এবং Array<type>—দুটিই Array declare করার বৈধ Syntax। একই type-এর element হলে সাধারণ Array Type ব্যবহার করো, আর একাধিক type-এর element হলে Union Type (|) ব্যবহার করো।
