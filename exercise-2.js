//Cho các đối tượng sau
const obj = {
  id: 1,
  name: 'Trainer',
  age: 33,
  skills: ['Javascript', 'React', 'NextJS', 'Typescript']
};

const anotherObj = {
  id: 2,
  name: 'Trainee',
  age: 22,
  isFinite: false,
  isBeingTrained: true
};

//1. Hãy clone 2 đối tượng trên bằng tất cả các cách mà bạn biết
// *YOUR CODE HERRE *

const obj1 = { ...obj };
const anotherObj1 = { ...anotherObj };

const obj2 = Object.assign({}, obj);
const anotherObj2 = Object.assign({}, anotherObj);

const obj3 = JSON.parse(JSON.stringify(obj));
const anotherObj3 = JSON.parse(JSON.stringify(anotherObj));

//2. Đoán thử kết quả sau đây, không chạy thử
const copiedObj = obj;
copiedObj.skills = ['React', 'Typescript'];
console.log(obj.skills);
// * YOUR ANSWER HERE *

['React', 'Typescript'];

//3. Hãy merge 2 đối tượng đã cho thành 1 đối tượng mới bằng tất cả các cách mà bạn biết
// *YOUR CODE HERRE *

const mergeObj = { ...obj, ...anotherObj };
const mergeObj1 = Object.assign({}, obj, anotherObj);

//4.  Sử dụng Map trong ES6, hãy tạo ra 1 biến có giá trị như sau:
/*
[
  ["whole numbers": [1 ,2 ,3 ,4]],
  ["Decimal numbers": [1.1, 1.2, 1.3, 1.4]],
  ["negative numbers": [-1, -2, -3, -4]]
]
*/
// *YOUR CODE HERRE *

const map1 = new map([
  ["whole numbers", [1, 2, 3, 4]],
  ["Decimal numbers", [1.1, 1.2, 1.3, 1.4]],
  ["negative numbers", [-1, -2, -3, -4]]
]);




//5. Sử dụng Map trong ES6, hãy tạo ra 1 map từ 2 đối tượng đã cho trên
// *YOUR CODE HERRE *




