// 프로세스

// 내 코드
function solution(priorities, location) {
  let queue = [];
  let stack = [];
  priorities.map((pri, que) => {
    queue.push([que, pri]);
  });

  while (queue.length !== 0) {
    console.log('queue 의 변화 = ', queue);
    console.log('stack 의 변화 = ', stack);
    let shiftResult = queue.shift();
    let temp = shiftResult[1];
    for (let i = 0; i < queue.length - 1; i++) {
      if (shiftResult[1] < queue[i][1]) {
        temp = queue[i][1];
        break;
      }
    }
    if (shiftResult[1] == temp) {
      stack.push(shiftResult);
    } else {
      queue.push(shiftResult);
    }
  }
  console.log('되돌아옴 = ', queue);
  console.log('스택 = ', stack);
  for (let i = 0; i < stack.length; i++) {
    if (stack[i][0] == location) {
      return i + 1;
    }
  }
}

// 초라해지는 내 코드
function solution(priorities, location) {
  var list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));
  var count = 0;
  while (true) {
    var cur = list.splice(0, 1)[0];
    if (list.some((t) => t.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
  }
}

// 나와 비슷한 느낌
// 특정 조건을 만족하는지 배열 내부의 원소를 순회하면서 검사
// some(조건 만족하는 값 있으면 true return),
// every(만족하지 않는 값 발견시 false return)
function solution(priorities, location) {
  var arr = priorities.map((priority, index) => {
    return {
      index: index,
      priority: priority,
    };
  });

  var queue = [];

  while (arr.length > 0) {
    var firstEle = arr.shift();
    var hasHighPriority = arr.some((ele) => ele.priority > firstEle.priority);
    if (hasHighPriority) {
      arr.push(firstEle);
    } else {
      queue.push(firstEle);
    }
  }

  return queue.findIndex((queueEle) => queueEle.index === location) + 1;
}

console.log(solution([2, 1, 3, 2], 2));
