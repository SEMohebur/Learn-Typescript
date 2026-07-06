// শুধু object লিখলে TypeScript শুধু বুঝবে এটি একটি Object। Property-এর Type Check করবে না।

// 1ta object er jonno
let user1: object;
user1 = { name: "mdsd" };

// array of object er jonno
let user2: object[];
user2 = [{ name: "mohebur" }, { name: "mamo" }];

// nijer icchay type seftyr jonno eibhabe asign korte hoy ar jei type golo rakha hoice sob golor jonnoi value rakte hobe ektao miss korle error dibe jar jonno ?mark dile oita na dileo somossa hoyna
let user3: { userName: string; userId: number; isActive?: boolean };
user3 = { userName: "Mohebur", userId: 787, isActive: true };
// isActive? মানে Property থাকলেও হবে, না থাকলেও Error হবে না।

let employee: {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
  };
};

employee = {
  name: "Mohebur",
  age: 25,
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

console.log(employee);

// Object Type ব্যবহার করা হয় Object-এর Structure এবং Property-এর Type নির্দিষ্ট করার জন্য। এতে Type Safety বজায় থাকে এবং ভুল Property বা ভুল Type Assign করলে TypeScript Error দেখায়।
