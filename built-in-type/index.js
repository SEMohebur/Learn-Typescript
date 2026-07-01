"use strict";
// 🔹 Variable Type Annotation
// TypeScript-এ ভেরিয়েবলের টাইপ আগে থেকেই নির্দিষ্ট করে দেওয়া যায়। একে Type Annotation বলে।
let fName;
let age;
let currentRole;
fName = "Mohebur";
age = 99;
currentRole = true;
// যদি কোনো Function কিছু return না করে, তাহলে তার return type হবে void।
const getUserInfo = (fName, age, currentRole) => {
    console.log(`Amar name ${fName} age ${age} ami ${currentRole ? "student" : "job kori"}`);
};
getUserInfo(fName, age, currentRole);
