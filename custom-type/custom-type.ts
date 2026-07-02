type User = { fName: string; userId: number; isStudent?: boolean };

let user1: User = { fName: "mohebur", userId: 908787, isStudent: true };

// console.log(user1);

let usersInfo: User[] = [
  { fName: "mohebur", userId: 98989, isStudent: true },
  { fName: "choyon", userId: 787878 },
  { fName: "Nabil", userId: 908989 },
];

// console.log(usersInfo);

// type use kore variable request type
type RequestType = "GET" | "POST";
let getRequest: RequestType;

getRequest = "GET";

// function peramiter er khetre type check
const requestHandeler = (request: RequestType): void => {
  console.log(request);
};

requestHandeler("POST");

// nested custom type
type UserInfo = {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
    zip_code?: number;
  };
};

let user: UserInfo = {
  name: "mohebur",
  age: 78787,
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

console.log(user);
