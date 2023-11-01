// 전화번호 목록

//참조
function solution(phoneBook) {
  const map = new Set();
  let min = 1;

  phoneBook.sort();

  for (const phone of phoneBook) {
    if (map.size > 0) {
      for (let i = min; i <= phone.length; i++) {
        const key = phone.substring(0, i);
        if (map.has(key)) {
          return false;
        }
      }
    }

    map.add(phone);

    if (phone.length < min) {
      min = phone.length;
    }
  }

  return true;
}

console.log(solution(['119', '97674223', '1195524421']));
