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
