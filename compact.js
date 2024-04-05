function compact(array) {
  array.forEach((element, index) => {
    if (
      element === "" ||
      element === 0 ||
      typeof element === "undefined" || // 或者用Object.is(element, undefined)
      element === null ||
      element === false ||
      Object.is(element, NaN) === true // 不能用isNaN因為字串物件也會被消失
    ) {
      array.splice(index, 1);
    }
  });

  return array;
}

console.log(compact([0, 1, false, 2, "", 3, "hello"]));
console.log(compact([null, undefined, NaN, " "]));
console.log(compact([{ name: "Alice" }, null, { age: 30 }, undefined]));

// 範例解法一
// function compact(array) {
//     const result = []
//     for (const value of array) {
//       if (value) {
//         result.push(value)
//       }
//     }
//     return result
//   }
// 利用for of會是value然後去確認值存在與否後push另一個array

// 範例解法二
// function compact(array) {
//     return array.filter(Boolean);
//   }
// 最簡潔
