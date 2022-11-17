# 수들의 합 5
# 성공 여부:

import sys
N = int(sys.stdin.readline())
sum = 0
count = 0
for i in range(1, N+1):
    if N - i > i + 1:
        sum = sum + i
        print(i)
    if sum == N:
        count += 1

print(count)