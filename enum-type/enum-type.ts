// enum 3 dhoroner type niye kaj kore
// 1 numeric,
// 2 string,
// 3 hetergenous

// numeric enum
enum requestType1 {
  GetData,
  SaveData,
  DeletData,
}

// console.log(requestType1);

enum requestType2 {
  readData = "ReadData",
  deleteData = "DeleteData",
}

console.log(requestType2.deleteData);

// hetergenous enum
enum requestType3 {
  readData = "readData",
  deleteData = "deleteData",
  id = 89,
}

// Enum হলো TypeScript-এর একটি Special Type, যা Related Constant Values-কে একটি Meaningful Name-এর অধীনে Group করে রাখে।
