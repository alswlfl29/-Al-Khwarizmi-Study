/* 전화번호 목록
문제 설명
전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는지 확인하려 합니다.
전화번호가 다음과 같을 경우, 구조대 전화번호는 영석이의 전화번호의 접두사입니다.

구조대 : 119
박준영 : 97 674 223
지영석 : 11 9552 4421
전화번호부에 적힌 전화번호를 담은 배열 phone_book 이 solution 함수의 매개변수로 주어질 때, 어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 그렇지 않으면 true를 return 하도록 solution 함수를 작성해주세요. */

function solution(phone_book) {
  phone_book.sort(); // 전화번호를 사전순으로 정렬

  // for 루프를 사용하여 배열의 원소를 순회하며 인접한 전화번호끼리 비교하여 접두어인지 확인
  // -1을 하는 이유는 인접한 원소를 비교하기 때문에 마지막 원소는 비교할 필요가 없기 때문
  for (let i = 0; i < phone_book.length - 1; i++) {
    // startsWith 메서드: 문자열이 주어진 문자열로 시작하는지 여부를 확인
    //  i의 전화번호, 그 다음 인덱스인 i + 1의 전화번호를 비교
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false; // 접두어인 경우 false를 반환
    }
  }

  return true; // 접두어가 없는 경우 true를 반환
}

console.log(solution(['119', '97674223', '1195524421'])); // false
console.log(solution(['123', '456', '789'])); // true
console.log(solution(['12', '123', '1235', '567', '88'])); // false
