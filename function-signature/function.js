// Function Signature = Function-এর parameter এবং return type আগে থেকেই নির্ধারণ করে দেওয়া।
// কোনো parameter নেই এবং কিছু return করবে না।
let userInfo;
// একটি string parameter নিবে, কিন্তু কিছু return করবে না।
let userInfo1;
// একটি string parameter নিবে এবং অবশ্যই string return করবে।
let userInfo2;
userInfo = () => {
    console.log("hello");
};
userInfo();
userInfo1 = (param) => {
    console.log(param);
};
userInfo1("userInfo1");
userInfo2 = (param) => {
    return param;
};
console.log(userInfo2("userInfo2"));
export {};
//# sourceMappingURL=function.js.map