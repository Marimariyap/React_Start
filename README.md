## Visual Studio Code 설치

    google 검색 -> Visual Studio Code 설치

## Visual Studio Code 확장프로그램 설치

    확장(Ctrl + Shift + X) -> Code Runner(Jun Han), Korean Language Pack for Visual Studio Code(Microsoft)
                              Live Server(Ritwick Dey), open in browser(TechER) 설치
    *Prettier(Prettier) 설치 -> 왼쪽 아래 설정(톱니바퀴) -> 검색창에 editor format on save 검색 후 Editor: Format On Save 체크
     검색창에 editor Default Formatter 검색 후 (Prettier)esbenp.prettier-vscode 선택
     그 후 안될 경우 F1을 누른후 Format Document 검색 -> 문서 서식 프로그램 선택 -> Default 값을 Prettier - Code Formatter 선택
     그 후에도 안될 경우 VScode 재실행

## Node.js 설치

    Window용 다운로드(x64) 최신 Current 설치

## React JS 설치

    Window CMD(Window key + R) or Visual Studio Code 내의 터미널 실행 -> npx create-react-app (Project Name) 설치

## React JS 실행

    Project의 위치가 맞지 않다면 cd (Project경로)로 경로 설정 -> npm start -> Browser Open

## React JS 종료

    터미널에서 Ctrl + C -> Y

## React JS 파일 설명

    node_modules - 현재 Project를 실행할 때 쓰이는 module이 모여있는 곳
                   폴더를 지우게 되면 Project 실행 불가
                   삭제 되더라도 npm install만 해주면 그대로 다시 설치 가능

    public - index.html 안 id='root'밑으로 React Code가 실행되어
             만들어진 DOM이 구현

    src - 대부분의 작업은 src폴더 안에서 진행
          App.js - 코드 구현(작성 및 수정, 교정)을 하게 되면 Browser에 바로 반영(Hot Module Replacement - HMR)
          index.css - css코드 구현

    package.json - node_moules의 내용이 기록 되어 있는 곳

## React-Router-Dom 설치

    터미널 -> npm install react-router-dom

## Json-Sever, REST API 만들기

    터미널 -> 왼쪽 상단 + 버튼 -> npm install -g json-sever -> json-sever --watch ./src/db/data.json(경로 설정) --port 3001
    \{^_^}/ hi! (실행 성공) -> 하단의 Resources의 링크 클릭 -> 확인

## REST API 설명

    URI 주소와 Method로 C(reate) R(ead) U(pdate) D(elete) 요청
    Create : POST
    Read : GET
    Update : PUT
    Delete : DELETE

## GIT으로 파일 GIT HUB로 옮기기

    GIT 설치 -> GIT 초기 설정 -> 터미널에서 git init ->  가입이름과 이메일 작성 -> GIT HUB의 Repository의 주소 복사
    git add로 파일 추가 -> git commit -m "커밋 메세지" -> git push -u origin master (origin : GIT HUB의 Repository의 주소)
    GITHUB 로그인

### public 파일 안 img 파일은 이메일에서 가져오기
