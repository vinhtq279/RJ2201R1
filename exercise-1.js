//Cho trước 1 mảng các trainee như sau:
const traineeIterator = [
  {
    id: 1,
    firtName: 'A',
    lastName: 'Nguyen',
    className: 'CGO-RJ2201R1',
    grade: 'C'
  },
  {
    id: 2,
    firtName: 'B',
    lastName: 'Tran',
    className: 'CGO-RJ2201R1',
    grade: 'D'
  },
  {
    id: 3,
    firtName: 'C',
    lastName: 'Dinh',
    className: 'CGO-RJ2201R1',
    grade: 'A'
  },
  {
    id: 4,
    firtName: 'D',
    lastName: 'Le',
    className: 'CGO-RJ2201R1',
    grade: 'B'
  },
  {
    id: 5,
    firtName: 'D',
    lastName: 'Hoang',
    className: 'CGO-RJ2201R1',
    grade: 'F'
  },
  {
    id: 6,
    firtName: 'E',
    lastName: 'Pham',
    className: 'CGO-RJ2201R1',
    grade: 'E'
  }
];

//1. Sử dụng forEach(), hãy console.log() ra full name (firstName + lastName) của tất cả các phần từ trong mảng trên
// *YOUR CODE HERRE *

traineeIterator.forEach(fullName);
function fullName(value, index, arr){
    console.log(value.firtName + arr[index].lastName);
}

//2. Sử dụng forEach(), hãy console.log() ra điểm số (grade) + full name (trong cùng 1 string, format: D Hoang / F) 
//của tất cả các phần từ trong mảng trên
// *YOUR CODE HERRE *

traineeIterator.forEach(gradeName);
function gradeName(value, index, arr){
    console.log(value.firtName + " " + value.lastName + " / " + arr[index].grade);
}

//3. Sử dụng map(), hãy tạo ra 1 mảng mới với tên gọi expectedTraineeArray, 
//trong đó các props của từng phần tử được đổi như sau:
// - newId: className-id
// - fullName: firstName lastName
// - rank: grade
//ex: {
//  newId: 'CGO-RJ2201R1-5,
//  fullName: 'D Hoang',
//  rank: 'F'
//}
// *YOUR CODE HERRE *

const expectedTraineeArray = traineeIterator.map(changeTraineeArray);
function changeTraineeArray(value, index, arr){
  value.newId = value.className + "-" + value.id;
  value.fullName = value.firtName + " " + value.lastName;
  value.rank = value.grade;
  return value;
}


//4, Sử dụng map(), hãy tạo ra 1 mảng mới với tên gọi newTraineeArray,
//trong đó các props của từng phần tử được đổi như sau:
// - id: id
// - codeName: [className] - firstName lastName
// - classification: xét điều kiện:
// -> nếu đạt A grade trả về: 'Excellent'
// -> nếu đạt B grade trả về: 'Good'
// -> nếu đạt C grade trả về: 'Medium'
// -> nếu đạt D grade trả về: 'Weak'
// -> nếu đạt E grade trả về: 'Poor'
// -> nếu đạt F grade trả về: 'Disbanded'
// => tip: tạo ra 1 hàm, với đầu vào là grade, trả về giá trị tương ứng, không xét điều kiện trong forEach() body
// *YOUR CODE HERRE *

const newTraineeArray = traineeIterator.map(createNewTraineeArray);
function createNewTraineeArray(value, index, arr){
    value.codeName = value.className + " - " + value.firtName + " " + value.lastName;
    switch (value.grade){
        case "A":
            value.classification = "Excellent";
            break;             
        case "B":
          value.classification = "Good";
          break;
         
        case "C":
          value.classification = "Medium";
          break;            
        case "D":
          value.classification = "Weak";
          break;            
        case "E":
          value.classification = "Poor";
          break;
        case "F":
          value.classification = "Disbanded";
          break;
      default:
          value.classification = "Undefined";
          break;
    }
    return value;
}


//5. Lọc ra các trainee với grade dưới B
// *YOUR CODE HERRE *

const weekTraineeArray = traineeIterator.filter(filterWeakTrainee);
function filterWeakTrainee(value, index, arr){
    return value.grade > "B";
}

console.log(weekTraineeArray);

//6. Lọc ra các trainee với grade trên C, sau đố xét điều kiện sau:
// -> nếu số các trainee với grade trên C >= 50% sĩ số lớp, alert ra "Effective training!"
// -> nếu số các trainee với grade trên C < 30% sĩ số lớp, alert ra "Average training!"
// -> nếu số các trainee với grade trên C = 0, alert ra "Failed training!"
// *YOUR CODE HERRE *

const mediumTraineeArray = traineeIterator.filter(filterMediumTrainee);
function filterMediumTrainee(value, index, arr){
    return value.grade < "C";
}

let eff = mediumTraineeArray.length;
switch (true){
          case eff - 0.5 * 60 >= 0:
            alert("Effective training!");
            break;
          case eff - 0.3 * 60 < 0:
            alert("Effective training!");
            break;
          case eff = 0:
              alert("Effective training!");
              break;
}

//7. Tìm ra thành viên có grade A, alert ra tên đầy đủ của thành viên đó
// *YOUR CODE HERRE *

const excelentTraineeArray = traineeIterator.filter(filterExcelentTrainee);
function filterExcelentTrainee(value, index, arr){
    return value.grade == "A";
}

excelentTraineeArray.forEach((value) => {alert(value.firtName + " " + value.lastName)});

//8. Tìm ra thành viên có grade F, alert ra tên đầy đủ của thành viên đó
// *YOUR CODE HERRE *

const disbandedTraineeArray = traineeIterator.filter(filterDisbandedTrainee);
function filterDisbandedTrainee(value, index, arr){
    return value.grade == "F";
}

disbandedTraineeArray.forEach((value) => {alert(value.firtName + " " + value.lastName)});

//9. Sử dụng reduce, hãy tạo ra 1 string cấu thành từ điểm số của các thành viên trong mảng đã cho
// *YOUR CODE HERRE *

let str = "";
str = traineeIterator.reduce(gradePrint);
    
function gradePrint(str, value){
   return str + value.grade;
}
console.log(str);

//10. (optional) Sử dụng reduce, hãy tạo ra 1 hàm tính được giai thừa của 1 số đầu vào. Ex: input 6 => 1*2*3*4*5*6 = 720
// *YOUR CODE HERRE *

function factorial(x){
  let result = 1;
  let arr = [];
  for (let i = 0; i < x; i++){
      arr[i] = i + 1;
  }
  result = arr.reduce((total, value) => total * value);
  
  console.log(result);
}

//11. (optional) Hãy tạo ra 1 mảng mới, sử dụng 1 trong các cấu trúc lặp đã học, trong đó có các phần tử 
// - grade thấp nhất
// - grade cao nhất
// - grade trung bình dạng số, biết các giá trị tương ứng của từng grade như sau: A=1, B=2, ... , F=5
// *YOUR CODE HERRE *



