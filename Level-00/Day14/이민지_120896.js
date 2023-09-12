/* 한 번만 등장한 문자
  문제 설명: 문자열 s가 매개변수로 주어집니다. 
          s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 
          한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.
*/
function solution(s) {
  var answer = "";
  s = s.split("");
  let newArr = [];
  let one = [];
  s.map((x) => {
    if (!newArr.includes(x)) {
      newArr.push(x);
      one.push(x);
    } else {
      if (one.includes(x)) one.splice(one.indexOf(x), 1);
    }
  });
  answer = one.sort().join("");
  return answer;
}
console.log(solution("abcabcadc"));
