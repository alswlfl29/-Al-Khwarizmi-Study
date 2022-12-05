# 스택수열
# 성공여부: X
# 알고리즘 분류: 자료구조, 스택

# 파이썬 리스트 메소드 제공 :append(), pop()
import sys
N = int(sys.stdin.readline())
stack = [0]
current = 0 # 스택 맨 위의 값을 나타냄
result = []
for i in range(N):
    target = int(sys.stdin.readline()) # 스택에서 찾아내야할 값
    while current < target:
        current += 1
        stack.append(current)
        result.append('+')

        if current == target:
            stack.pop()
            result.append('-')
    if current > target:
        if stack[-1] < target:
            stack.append(-1)
            break
        while stack[-1] >= target:
            stack.pop()
            result.append('-')

if len(stack) != 1: #1이 아니면 숫자가 다 나가지 못했다는 뜻
    answer ='NO'
    print(answer)
else:
    for result in result:
        print(result)