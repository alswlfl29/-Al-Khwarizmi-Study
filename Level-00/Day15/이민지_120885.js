/* 이진수 더하기
  문제 설명: 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.
*/

function solution(bin1, bin2) {
  var answer = "";
  let dec1 = parseInt(bin1, 2);
  let dec2 = parseInt(bin2, 2);

  let dec3 = Number(dec1) + Number(dec2);

  answer = dec3.toString(2);
  return answer;
}

console.log(solution("1001", "1111"));

/** 진법 변환
 *  1. 10진수 -> 2진수
 *    → 10진수.toString(2);
 *    ex) var dec = 10진수
 *        var bin = dec.toString(2);
 *  2. 2진수 -> 10진수
 *    → parseInt(2진수, 2);
 *    ex) var bin = 2진수 // string
 *        var dec = parseInt(bin, 2); // string
 *  3. 10진수 -> 16진수
 *     → 10진수.toString(16);
 *     ex) var dec = 10진수
 *         var bin = dec.toString(16);
 *  4. 16진수 -> 10진수
 *     → parseInt(16진수, 16);
 *     ex) var hex = 16진수 // string
 *         var dec = parseInt(hex, 16);
 *  5. 16진수 -> 2진수
 *     → 10진수 변환 후 2진수로 바꿈
 *       parseInt(16진수, 16).toString(2)
 *     ex) var hex = 16진수
 *         var bin = parseInt(hex, 16).toString(2);
 *  6. 2진수 -> 16진수
 *     → 10진수 변환 후 16진수로 바꿈
 *       parseInt(2진수, 2).toString(16)
 *     ex) var bin = 2진수
 *         var hex = parseInt(bin, 2).toString(16);
 */
