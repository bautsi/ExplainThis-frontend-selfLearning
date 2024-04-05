// 完全不懂
// 了解函式參數的作用：首先理解傳遞給高階函式（如 dropWhile）的函式參數
//（在這裡是 predicate 函式）的作用。在 dropWhile 的例子中，predicate
//函式用於測試陣列中的每個元素是否符合特定條件（比如範例中的條件是 value < 4）。

// 觀察範例輸入：查看範例輸入中提供的函式，了解它的返回值類型和作用。在這個例子中，
//範例輸入的函式返回一個布林值（true 或 false），表示是否應該「丟棄」陣列中的當前元素。

// 在內部運用函式參數：在高階函式的內部，使用這個函式參數來對陣列的元素進行判斷。
//在 dropWhile 中，你會對陣列中的每個元素執行 predicate 函式，
//根據其返回值來決定是否保留該元素。

// 根據函式參數的結果進行操作：根據 predicate 函式的返回值來決定如何處理陣列的元素。
//在 dropWhile 的例子中，當 predicate 返回 true 時，你會「丟棄」該元素；
//當遇到第一個 predicate 返回 false 的元素時，停止丟棄並將剩餘的陣列元素收集起來作為結果返回。

//GPT
function dropWhile(array, predicate) {
  // 找到第一個不符合條件的元素的索引
  const firstNonMatchIndex = array.findIndex((element) => !predicate(element));
  // 如果沒有找到（即所有元素都符合條件），返回空陣列
  if (firstNonMatchIndex === -1) {
    return [];
  }
  // 從找到的索引開始到陣列末尾切割，並返回這部分
  return array.slice(firstNonMatchIndex);
}

console.log(dropWhile([1, 2, 3, 4, 5, 6], (value) => value < 4));

console.log(dropWhile([0, 1, 2], (value) => value < 5));

console.log(dropWhile([0, 6, 1, 2], (value) => value < 5));

// 範例解法一
// function dropWhile(array, predicate) {
//     let index = 0

//     while (index < array.length && predicate(array[index], index, array)) {
//       index++
//     }

//     return array.slice(index)
//   }

// 不理解函式參數 所以GPT手刻一個filter

// function myFilter(array, test) {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//       if (test(array[i], i, array)) {
//         result.push(array[i]);
//       }
//     }
//     return result;
//   }

// let numbers = [1, 2, 3, 4, 5];
// let oddNumbers = myFilter(numbers, function(number) {
//   return number % 2 !== 0;
// });

// console.log(oddNumbers); // [1, 3, 5]

// 所以就看要刻的函式需要甚麼參數，例如filter就跟array有關，會需要value(array[index])、
// index和array，那在function(number)中的number就會導航到array[i]

// 範例解法二
// function dropWhile(array, predicate) {
//     let droppedCount = 0;

//     for (let i = 0; i < array.length; i++) {
//       if (!predicate(array[i], i, array)) {
//         break;
//       }
//       droppedCount++;
//     }

//     return array.slice(droppedCount);
//   }

// slice 方法

// 功能：slice 用於「複製」陣列的一部分，並返回這個新的陣列片段，而不會改變原始陣列。

// 參數：它接受兩個參數，分別是開始和結束的索引（不包括結束索引所在的元素）。
// 如果省略結束索引，則複製從開始索引到陣列結尾的所有元素。

// 使用時機：當你需要獲得陣列的一部分，而不想影響原陣列時，可以使用 slice。

// splice 方法

// 功能：splice 用於「修改」陣列，通過刪除、替換或添加新元素來改變原始陣列。

// 參數：它接受至少一個參數，第一個是開始操作的索引，第二個是要刪除的元素數量（可選）
// ，之後的參數則是要添加到陣列中的新元素。

// 使用時機：當你需要在陣列中插入、刪除或替換元素，從而改變原始陣列時，應該使用 splice。
