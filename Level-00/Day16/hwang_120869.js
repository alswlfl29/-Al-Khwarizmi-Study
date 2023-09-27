//외계어 사전

function solution(spell, dic) {
  const sortSpell = spell.sort().join('');

  for (let i = 0; i < dic.length; i++) {
    const sortDic = dic[i].split('').sort().join('');
    if (sortDic === sortSpell) {
      return 1;
    }
  }
  return 2;
}

// return d.some(s => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;

console.log(solution(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw']));
