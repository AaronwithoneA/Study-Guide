//  //
// const isValidMeeting = (meeting, schedule) => {
//   if (schedule.length <= 1) {
//     return isConflict(meeting, schedule[0]);
//   } else {
//     return isValidMeeting(meeting, schedule.slice(1)) || isConflict(meeting, schedule[0])
//
//   }
// };
//
const isConflict = (meeting1, meeting2) => {
  if ((meeting1[0] < meeting2[1]) && (meeting2[0] < meeting1[1])) {
    return true;
  }
  return false;
};

let meeting = [1,3];
let schedule = [[4,6], [7,9], [10, 12], [1,3], [5,8] ];

//
//
//
const detectConflict = (schedule2) => {
  if (schedule2.length <= 1) {
    return false;
  }

  let first = schedule2.shift();
  for(let i = 0; i < schedule2.length; i++) {
    if(isConflict(first, schedule2[i])) {
      return true;
    }
  }
  return detectConflict(schedule2);
};

console.log(detectConflict(schedule));

const recFactorial = (num) => {
  if (num <= 1) {
    return num;
  }
  return num * recFactorial(num-1);
};

console.log(recFactorial(3));
//
const recRange = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  return [num1].concat(recRange(num1 + 1, num2));
};

console.log(recRange(1,8));
//
const recSum = (arr) => {
  if (arr.length <= 1) {
    return arr[0];
  }
  return arr[0] + recSum(arr.slice(1));
};

console.log(recSum([1,2,3,4]));
//
const recFib = n => {
  if (n === 2) {
    return [0,1];
  }
  if (n === 1) {
    return [1];
  }
  if (n === 0) {
    return [];
  }
  let previousFib = recFib(n-1);
  let last = previousFib[previousFib.length -1] + previousFib[previousFib.length -2];

  return previousFib.concat(last);
};

console.log(recFib(8));

//
const recMap = (arr, cb) => {

  if (arr.length < 1) {
    return [];
  }
  return [cb(arr[0])].concat(recMap(arr.slice(1), cb));
};

console.log(recMap([1,2,3,4,5], (num) => num + 1));
//
const recReverse = str => {
  if (str.length <= 1) {
    return str;
  }

  return str[str.length - 1] + recReverse(str.slice(0, str.length - 1));
};

console.log(recReverse('abcde'));

const recPrintStars = (n) => {
  if (n===1) {
    console.log('*');
    return;
  }
  let stars = "";
  for(var i = 0; i < n; i++) {
    stars += '*';
  }
  recPrintStars(n-1);

  console.log(stars);
};

const isPrime = n => {
  for(let i = 2; i <= n/2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(7));
console.log(isPrime(11));
console.log(isPrime(4));
console.log(isPrime(22));
console.log(isPrime(2));
