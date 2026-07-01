"use strict";
// Union Type (|)
// Union Type একটি variable বা function parameter-এ একাধিক type allow করে।
let userId;
userId = 78;
const displayId = (userId) => {
    console.log(userId);
};
displayId(userId);
// একটি variable বা parameter যদি একাধিক type-এর value গ্রহণ করতে পারে, তাহলে Union Type (|) ব্যবহার করা হয়।
