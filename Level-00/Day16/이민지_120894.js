/* 영어가 싫어요
  문제 설명: 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 
          문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.
*/

function solution(numbers) {
  let eng = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  eng.forEach((nums, index) => {
    numbers = numbers.split(nums).join(index);
  });
  return Number(numbers);
}

/**
 * 틀린 코드
 * function solution(numbers) {
      let eng = {
        zero: "0",
        one: "1",
        two: "2",
        three: "3",
        four: "4",
        five: "5",
        six: "6",
        seven: "7",
        eight: "8",
        nine: "9",
      };
      var answer = "";
      while (numbers.length > 0) {
        Object.keys(eng).map((x) => {
          if (numbers.includes(x)) {
            answer += eng[x];
            numbers = numbers.replace(x, "");
          }
        });
      }
      return Number(answer);
    }
 */

console.log(solution("onefourzerosixseven"));
// 풀이 참고
