//로그인 성공?

function solution(id_pw, db) {
  for (let i of db) {
    const [id, pw] = i;

    if (id === id_pw[0] && pw === id_pw[1]) {
      return 'login';
    } else if (id === id_pw[0]) {
      return 'wrong pw';
    }
  }
  return 'fail';
}

console.log(
  solution(
    ['meosseugi', '1234'],
    [
      ['rardss', '123'],
      ['yyoom', '1234'],
      ['meosseugi', '1234'],
    ]
  )
);
