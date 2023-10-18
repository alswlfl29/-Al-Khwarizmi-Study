// k번째 수

function solution(array, commands) {
  let ans = [];
  commands.map(([i, j, k]) => {
    let res = insertionSort(array.slice(i - 1, j));
    ans.push(res[k - 1]);
  });
  return ans;
}

function insertionSort(arr) {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    let currentElement = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentElement;
  }
  return arr;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
