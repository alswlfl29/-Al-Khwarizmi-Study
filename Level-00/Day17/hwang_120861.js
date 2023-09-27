//캐릭터의 좌표

function solution(keyinput, board) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < keyinput.length; i++) {
    switch (keyinput[i]) {
      case 'up':
        if (y < Math.trunc(board[1] / 2)) {
          y++;
        }
        break;
      case 'down':
        if (y > Math.trunc(-board[1] / 2)) {
          y--;
        }
        break;
      case 'left':
        if (x > Math.trunc(-board[0] / 2)) {
          x--;
        }
        break;
      case 'right':
        if (x < Math.trunc(board[0] / 2)) {
          x++;
        }
        break;
      default:
        break;
    }
  }

  return [x, y];
}

console.log(solution(['down', 'down', 'down', 'down', 'down'], [7, 9]));
