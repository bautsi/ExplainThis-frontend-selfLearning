// function inRange(value, start, end) {
//   console.log(value);
//   console.log(start);
//   console.log(end);
// }

// inRange(3, 2, 4);
// inRange(4, 8);

//知道若輸入二數end為undefined

function inRange(value, start, end) {
  if (!end) {
    if (value > 0 && value < start) {
      return true;
    } else {
      return false;
    }
  } else {
    if (value > start && value < end) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(inRange(3, 2, 4));
console.log(inRange(4, 8));
console.log(inRange(4, 2));
console.log(inRange(2, 2));
console.log(inRange(1.2, 2));

// 範例解法
// function inRange(value, start, end = 0) {
//     return value >= Math.min(start, end) && value < Math.max(start, end)
//   }
// 可以將參數預設為0
// 只要輸入大於且小於任一個數即可
