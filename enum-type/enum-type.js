"use strict";
// enum 3 dhoroner type niye kaj kore
// 1 numeric,
// 2 string,
// 3 hetergenous
// numeric enum
var requestType1;
(function (requestType1) {
    requestType1[requestType1["GetData"] = 0] = "GetData";
    requestType1[requestType1["SaveData"] = 1] = "SaveData";
    requestType1[requestType1["DeletData"] = 2] = "DeletData";
})(requestType1 || (requestType1 = {}));
// console.log(requestType1);
var requestType2;
(function (requestType2) {
    requestType2["readData"] = "ReadData";
    requestType2["deleteData"] = "DeleteData";
})(requestType2 || (requestType2 = {}));
console.log(requestType2.deleteData);
// hetergenous enum
var requestType3;
(function (requestType3) {
    requestType3["readData"] = "readData";
    requestType3["deleteData"] = "deleteData";
    requestType3[requestType3["id"] = 89] = "id";
})(requestType3 || (requestType3 = {}));
// Enum হলো TypeScript-এর একটি Special Type, যা Related Constant Values-কে একটি Meaningful Name-এর অধীনে Group করে রাখে।
