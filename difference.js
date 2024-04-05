function difference(array1, array2) {
  const result = [];
  array1.forEach((value, index) => {
    if (array2.indexOf(value) === -1) {
      //indexOf複習
      result.push(value);
    }
  });

  return result;
}

console.log(difference([], []));
console.log(difference([1, 1, 2, 3], [2, 3]));
console.log(difference([1, 2, 3], [1, 2, 3, 4]));
console.log(difference([4, 3, 2, 1], [1, 2, 3]));

// 範例解法二
// function difference(array, values) {
//     const valuesSet = new Set(values);
//     return array.filter((value) => !valuesSet.has(value));
//   }
// Set 在 JavaScript 基於哈希表，只存儲value
// Map 是一種鍵值對集合數據結構，其中的每個元素都是一個鍵值對

// 在 Set 中，雖然只存儲了值（沒有鍵值對），但每個值都會被哈希函數處理，
// 並在內部數據結構中獲得一個唯一的位置。因此，無論是添加新元素、
// 檢查元素是否存在、還是刪除元素，操作的平均時間複雜度都是 O(1)
