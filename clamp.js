function clamp(number, lower, upper) {
  // if (lower <= number <= upper) { // 分開寫
  if (lower <= number && number <= upper) {
    // 也可else return number就好
    return number;
  } else if (number < lower) {
    return lower;
  } else if (number > upper) {
    return upper;
  }
}

console.log(clamp(7, 0, 9));
console.log(clamp(-12, -4, 5));
console.log(clamp(18, 3, 9));

// 範例解法二
// function clamp(number, lower, upper) {
//   return Math.min(upper, Math.max(lower, number));
// }
// 跟小比取小 跟大比取大
