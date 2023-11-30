// 모음사전

function solution(word) {
  let char = ['A', 'E', 'I', 'O', 'U', ''];
  let index = 1;
  let i = 0;
  let cnt = 0;
  let answer;
  let test;

  for (let j = 0; j < 20; j++) {
    test = char[i].repeat(index);
    index++;
    cnt++;
    console.log(test, index);
    if (index > 5) {
      index--;
      let orgcnt = 1;
      let charcnt = 1;
      for (let a = 0; a < 10; a++) {
        test = char[i].repeat(index - orgcnt) + char[i + charcnt];
        charcnt++;
        cnt++;
        console.log(test, charcnt);
        if (charcnt > 4) {
          orgcnt++;
          charcnt = 1;
        }
      }
    }
    if (test === word) {
      return cnt;
    }
  }
  // while (char[i] !== '') {
  //   test = char[i].repeat(index);
  //   index++;
  //   cnt++;
  //   console.log(test, cnt);
  //   if (index === 5) {
  //     let orgcnt = 1;
  //     let charcnt = 1;
  //     test = char[i].repeat(index - orgcnt) - orgcnt + char[i + charcnt];
  //     charcnt++;
  //     cnt++;
  //     if (charcnt === 4) {
  //       orgcnt++;
  //       charcnt = 1;
  //     }
  //   }
  //   if (test === word) {
  //     return cnt;
  //   }
  // }
  return answer;
}

console.log(solution('AAAE'));

['AAAE', 'I', 'EIO'];
