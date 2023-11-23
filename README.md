## 0. 프로그램 실행 권장 환경

- OS: MAC OS, Linux
    - Window 환경에서 VS Code 에디터로 실행 할 경우 제대로 빌드 되지 않는 문제가 생길 수 있어 관리자 권한으로 cmd 혹은 powercell 환경에서 작업해길 권장합니다.
    - 프로그램 폴더 경로에 중간에 한글이 없는 환경을 권장합니다.
- BuildTool: pmpn(권장) or npm
    - pmpn 설치 방법: https://pnpm.io/installation

### 1. 프로그램 압축해제

<img width="725" alt="image" src="https://github.com/suhanlim/Ebugi-Time/assets/51906310/7d5e71b8-ef32-4c1b-9096-ffc5779b8eb3">

### 2. VS code로 폴더 열기

<img width="721" alt="image" src="https://github.com/suhanlim/Ebugi-Time/assets/51906310/a21ddbae-94ad-477f-a934-7911dd7966db">


### 3. env 파일 이름 변경하기 env → .env

<img width="530" alt="image" src="https://github.com/suhanlim/Ebugi-Time/assets/51906310/512334e8-ef26-4e7a-be56-8bb5c7f49e2b">


### 4. 프로그램 의존성 모듈 설치

```jsx
pnpm install
```

<img width="774" alt="image" src="https://github.com/suhanlim/Ebugi-Time/assets/51906310/42d3a251-32c8-4476-8658-6c4147ad716b">



### 5. 프로그램 실행

```jsx
pnpm run dev
```

### 5-1. 만약 Error: @prisma/client did not initialize yet. Please run "prisma generate" and try to import it again. 가 발생한다면

1. prisma/db.sqlite 파일 삭제

<img width="410" alt="image" src="https://github.com/suhanlim/Ebugi-Time/assets/51906310/c0e16cd9-ce08-49c3-9921-1d712de170bd">


```jsx
// prisma db table 생성 후 초기 데이터 생성 작업
pnpx prisma generate
pnpm db:push
pnpm db-seed
pnpx prisma studio
```

1. http://localhost:5555/
2. user 테이블 항목의 id 값 복사
3. /src/app/_components/_common/navigationBar.tsx

<img width="717" alt="image" src="https://github.com/suhanlim/Ebugi-Time/assets/51906310/23c7b06b-928e-4d24-bd74-328aa7a9d1d9">

/profile/{복사한 id 값 붙여넣기}

1. /src/app/_components/_home/personalPanel.tsx

<img width="717" alt="image" src="https://github.com/suhanlim/Ebugi-Time/assets/51906310/892a5629-fa64-4eec-825e-56eb19898f46">


const session = “{복사한 id값 붙여넣기}”

```jsx
pnpm run dev
```

### 6. [http://localhost:3000](http://localhost:3000/)
