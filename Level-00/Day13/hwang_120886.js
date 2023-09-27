// A로B로 만들기

function solution(before, after) {
  return [...before].sort().join('') == [...after].sort().join('') ? 1 : 0;
}

console.log(solution('olleh', 'hello'));

// 처음에 배열끼리 비교했었는데 실패해서  배열끼리 비교할 때는 메모리 주소를 비교하기 때문에 같은 요소를 가지고 있더라도
// 메모리 주소가 다르므로 배열을 문자열로 변환 후 비교해야 한다.
