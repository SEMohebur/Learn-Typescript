// Function Signature = Function-এর parameter এবং return type আগে থেকেই নির্ধারণ করে দেওয়া।

// কোনো parameter নেই এবং কিছু return করবে না।
let userInfo: () => void;

// একটি string parameter নিবে, কিন্তু কিছু return করবে না।
let userInfo1: (param: string) => void;

// একটি string parameter নিবে এবং অবশ্যই string return করবে।
let userInfo2: (param: string) => string;

userInfo = () => {
  console.log("hello");
};

userInfo();

userInfo1 = (param: string) => {
  console.log(param);
};

userInfo1("userInfo1");

userInfo2 = (param: string) => {
  return param;
};

console.log(userInfo2("userInfo2"));
