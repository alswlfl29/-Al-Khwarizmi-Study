// 주식 가격

function solution(prices) {
  var answer = [];

  for (let i = 0; i < prices.length; i++) {
    if (i == prices.length - 1) answer.push(0);

    let temp = prices[i];
    let num = 1;

    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] < temp) {
        answer.push(num);
        break;
      }

      if (j == prices.length - 1) {
        answer.push(num);
      }

      num++;
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 2, 3]));
