#11286번 절댓값 힙 구현
# 의사코드
# 1. 연산개수 입력, 연산개수=N
# 2. 우선순위 큐 생성, priqueue
# 3. for N :  N만큼 반복
# 4.    x 입력 받기 (0과 0이 아닌 수로 구분)
# 5.    if x==0: x가 0이면
# 6.        if priqueue가 비어 있으면
# 7.            0출력
# 8.        else 비어 있지 않으면
# 9.            큐 앞단 원소 출력 후 큐에서 제거
# 10.   else: x가 아닐 경우
# 11.       큐에 해당 원소 삽입

from queue import PriorityQueue
N=int(input()) #연산 개수입력
priqueue=PriorityQueue() #우선순위 큐 생성

for i in range(N):  #N만큼 반복
    x=int(input())  #x 입력 받기
    if x==0: #x가 0인 경우
        if priqueue.empty(): #큐가 비어 있는 경우, 0출력
            # result.append(0)
            print("0")
        else: #큐가 비어 있지 않은 경우, 앞단에 있는 원소 출력 후 제거
            num=priqueue.get()
            print(str(num[1]))
            # result.append(num[1])
    else: #x가 0이 아닌 경우
        priqueue.put((abs(x),x)) #해당 원소 큐에 삽입

# print("\n------결과------")
# #결과 출력
# for i in range(len(result)):
#     print(result[i])