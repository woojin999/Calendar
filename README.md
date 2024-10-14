# React -  Calendar

- 리액트를 활용하여 Calendar 구현
- [Calendar 이용해보기](https://woojin-calendar.vercel.app/)

## ⏱ 개발기간 

2024.10.08 ~ 2024.10.14

## 📝 컴포넌트 분류

- **CalendarBox** : react-calendar 라이브러리를 사용하여 전체적인 일정 관리 
- **Schedule.jsx** : Schedule 탭에서 useState를 통해 list,detail,edit 상태 관리
- **TodoAddModal.jsx** : 클릭된 날짜를 props로 받아와 입력된 값을 로컬스토리지에 저장
- **TodoItem.jsx** : 해당 날짜의 데이터 값을 props 받아 온 후 map을 돌려 리스트 출력 
- **TodoDetail.jsx** : 해당 일정의 데이터 값을 props 받아 온 후 값 출력
- **TodoEdit.jsx** : useState로 받아온 값을 다시 입력된 값으로 로컬스토리지에 저장하여 변경

## 🛠 프로젝트 기능

- Calendar 일정 추가
- Schedule 리스트 확인
- Schedule 일정 상세보기
- Schedule 일정 수정
- Schedule 일정 삭제
- 로컬스토리지에 일정 저장
- 미디어 쿼리

## 구현 영상

**일정 추가**
<br/>
![todoAdd](https://github.com/user-attachments/assets/3d72e3d2-2b5a-491e-b002-59510c01aaf0)

**리스트 확인**
<br/>
![todoList](https://github.com/user-attachments/assets/1fa5b194-65fb-4b90-a28c-f358fce07733)

**상세보기**
<br/>
![todoDetail](https://github.com/user-attachments/assets/cc332c17-04ad-410c-ab37-b8c0ef0f7187)

**수정**
<br/>
![todoEdit](https://github.com/user-attachments/assets/f0de81c8-93bf-498c-8e2d-8c99b64f000d)

**삭제**
<br/>
![todoDelete](https://github.com/user-attachments/assets/01c2c52b-a957-40bf-a60e-ad189f82c67d)

