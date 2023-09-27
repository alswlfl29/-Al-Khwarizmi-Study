// 모스부호(1)

function solution(letter) {
  let morse = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
  };
  let ans = [];
  let code = letter.split(' ');
  code.map((a, i) => ans.push(morse[a]));

  return ans.join('');
}

// ans.join(morse[a]

console.log(solution('.... . .-.. .-.. ---'));

// reduce 넘 어렵
// https://velog.io/@teo_ryu/javascript-reduce-함수와-싸우기
// 그나마 쉽게 설명해줌
