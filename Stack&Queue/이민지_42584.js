/**
 * 주식가격
 * 문제 설명: 초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.
 */
function solution(prices) {
  let answer = [];
  let priceStack = [];
  let priceLength = prices.length - 1;
  // prices 배열을 차례대로 순회
  prices.map((price, index) => {
    // price의 값이 priceStack의 마지막 값보다 큰 경우
    // priceStack 마지막 값 빼고(pop) 현재 들어온 price의 인덱스에서 priceStack 마지막 원소의 1번 인덱스(즉, prices에서의 인덱스 번호) 뺀 값 answer에 넣어주기
    // → 주식에서 떨어진 시간
    while (
      priceStack.length > 0 &&
      priceStack[priceStack.length - 1][0] > price
    ) {
      let popItem = priceStack.pop();
      answer[popItem[1]] = index - popItem[1];
    }
    priceStack.push([price, index]);
  });
  // priceStack에 데이터가 남아있는 경우 총 prices 길이에서 pirceStack에 넣은 인덱스 값(즉, prices에서의 인덱스 번호)을 빼주어 answer에 지난 시간 넣기
  if (priceStack.length > 0) {
    priceStack.map((price) => {
      answer[price[1]] = priceLength - price[1];
    });
  }
  return answer;
}

console.log(solution([1, 2, 3, 2, 3]));
