#2164번 카드 게임
from collections import deque
N=int(input()) #카드 개수 입력
mydeque=deque()

for i in range(1, N+1):
    mydeque.append(i)

while len(mydeque) != 1 : #덱에 카드 한 장만 남을 때까지 반복
    mydeque.popleft() #홀수 번째는 카드 그냥 제거
    num=mydeque.popleft() #짝수 번째의 카드는 num에 저장한 후
    mydeque.append(num) #덱의 마지막에 다시 삽입

print(mydeque[0])  #최종적으로 남은 카드의 번호 출력
