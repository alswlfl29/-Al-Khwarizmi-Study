/* 다항식 더하기
  문제 설명: 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 
          다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 
          덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 
          같은 식이라면 가장 짧은 수식을 return 합니다.
*/
function solution(polynomial) {
  var answer = "";
  let constant = 0;
  let first = 0;
  polynomial = polynomial.split(" + ");
  polynomial.map((x) =>
    x.includes("x")
      ? x.substr(0, 1) === "x"
        ? (first += 1)
        : (first += Number(x.replace("x", "")))
      : (constant += Number(x))
  );
  answer =
    first !== 0
      ? constant !== 0
        ? first === 1
          ? `x + ${constant}`
          : `${first}x + ${constant}`
        : first === 1
        ? `x`
        : `${first}x`
      : `${constant}`;
  return answer;
}

console.log(solution("x"));
