/**
 * 전화번호 목록
 * 문제 설명: 전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는지 확인하려 합니다.
 *          전화번호가 다음과 같을 경우, 구조대 전화번호는 영석이의 전화번호의 접두사입니다.
 *          - 구조대 : 119
 *          - 박준영 : 97 674 223
 *          - 지영석 : 11 9552 4421
 *          전화번호부에 적힌 전화번호를 담은 배열 phone_book 이 solution 함수의 매개변수로 주어질 때, 어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 그렇지 않으면 true를 return 하도록 solution 함수를 작성해주세요.
 *  */
function solution(phone_book) {
  // 1. 배열 phone_book을 정렬한다.
  // 주의할 점: 사전순으로 정렬해야함
  phone_book.sort();
  // 2. 배열 phone_book 요소를 돌면서 다른 곳에 포함되어 있으면 false 반환
  // 주의할 점: 접두어이어야함
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) return false;
  }
  return true;
}

console.log(solution(["119", "97674223", "1195524421"])); // false
// console.log(solution(["123", "456", "789"])); // true
console.log(solution(["12", "123", "1235", "567", "88"])); // false
