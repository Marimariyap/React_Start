// 사용변수

const GAME_TIME = 7;                    // GAME_TIME라는 변수 = 7
//변경이 일어나는 변수 let
let score = 0;                          // score라는 변수 = 0
let time = GAME_TIME;                   // time에 GAME_TIME라는 변수를 대입
let isPlaying = false;                  // isPlaying라는 변수 = false(거짓)
let timeInterval;                       // timeInterval라는 변수
let checkInterval;                      // checkInterval라는 변수
let words = [];                         // words라는 변수는 빈배열칸

const wordInput = document.querySelector('.word-input');            // 변수 wordInput에 .word-input라는 선택자를 불려온다
const wordDisplay = document.querySelector('.word-display');        // 변수 wordDisplay에 .word-display라는 선택자를 불러온다
const scoreDisplay = document.querySelector('.score');              // 변수 scoreDisplay에 .score라는 선택자를 불러온다
const timeDisplay = document.querySelector('.time');                // 변수 timeDisplay에 .time라는 선택자를 불러온다
const button = document.querySelector('.button');                   // 변수 button에 .button라는 선택자를 불러온다

init();                                                             // init이라는 함수 실행

function init(){                                              // init 함수 생성
    buttonChange('게임로딩중');                                // buttonChange라는 함수에 매개변수로 데이터값('게임로딩중')을 호출 후 실행
    getWords();                                               // getWords라는 함수 실행
    wordInput.addEventListener("input", checkMatch);          // wordInput라는 변수에 이벤트 추가(데이터를 입력 하면 checkMatch라는 함수 실행)

};

//게임 실행
function run(){                                              // run 함수 생성
    if(isPlaying){                                           // 만약에 isPlaying이 true일 경우
        return;                                              // 함수 강제 종료
    }
    isPlaying = true;                                        // 함수 종료 후 isPlaying에 true로 변경
    time = GAME_TIME;                                        // time이 GAME_TIME일때
    wordInput.focus();                                       // wordInput에 데이터 값을 입력할 때 커서를 위치시켜 바로 입력
    scoreDisplay.innerText = 0;                              // scoreDisplay의 텍스트 속성을 0으로 변경
    //주기적으로 인자를 실행하는 함수 setInterval() 
    timeInterval = setInterval(countDown, 1000);             // timeInterval은 countDown이라는 함수를 1000밀리초 간격으로 반복 실행
    checkInterval = setInterval(checkStatus, 50);            // checkInterval은 checkStatus이라는 함수를 50밀리초 간격으로 반복 실행
    buttonChange('게임중');                                  // buttonChange라는 함수에 매개변수로 데이터값('게임중')을 호출 후 실행
}

function checkStatus(){                                     // checkStatus 함수 생성
    //AND  = &&  비트연산자와 논리연산자의 차이점
    if(!isPlaying && time === 0){                           // 만약에 isPlaying가 !(not) true 이고 time이 0 일때
        buttonChange('게임시작');                           // buttonChange라는 함수에 매개변수로 데이터값('게임시작')을 호출 후 실행
        clearInterval(checkInterval);                       // 반복 실행 되고 있던 checkInterval를 종료
    };
}

//단어 불러오기
function getWords(){                                                                            // getWords 함수 생성
    axios.get('https://random-word-api.herokuapp.com/word?number=100')                          // axios.get으로 url에 있는 랜덤한 단어 100가지를 요청
        .then(function (response) {                                                             // 응답 성공시(.then) 함수 실행 매개변수(response) 지정
            //function 키워드 대신 화살표 =>를 사용해 함수를 간략히 정의한다, 화살표 함수 (영상)    
            response.data.forEach((word)=>{                                                     // 매개변수(response)를 순차적으로 따로따로(.forEach) 저장(.data)시킨 후 함수 실행 매개변수(word)
                if(word.length < 10){                                                           // 매개변수(word)의 길이가 10 보다 작을 때 
                    words.push(word);                                                           // words에 매개변수(word)값을 차례대로 삽입 후
                }
            })
            buttonChange('게임시작');                                                           // buttonChange라는 함수에 매개변수로 데이터값('게임시작')을 호춯 후 실행
        })

        .catch(function (error) {                                                              // 오류 발생 시 실행
            console.log(error);                                                                // 콘솔 로그에 오류 표시
        })
}

//단어 일치 체크
function checkMatch (){                                                                 // checkMatch 함수 생성
    if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){          // 민약에 입력값이 소문자이고 wordDisplay도 소문자 일 경우
        wordInput.value = "";                                                           // wordInput을 빈칸으로 변경 후
        if(!isPlaying){                                                                 // 만약에 isPlaying가 true일 경우
            return;                                                                     // 강제종료
        }
        score++;                                                                        // score를 증가
        scoreDisplay.innerText = score;                                                 // scoreDisplay의 텍스트 속성을 score로 변경 후
        time = GAME_TIME;                                                               // time을 GAME_TIME으로 변경
        //난수 지정 Math.random 
        const randomIndex = Math.floor(Math.random()* words.length);                    // randomIndex변수에 상수를 만들기 위한 Math.floor를 사용 후 난수 지정을 해준 후 * 데이터를 받아온 words의 길이
        wordDisplay.innerText = words[randomIndex];                                     // wordDisplay의 텍스트 속성을 words인덱스 값으로 난수를 지정해준 randomIndex를 입력 하면
    }                                                                                   // 지정해준 길이만큼 출력
     
}

function countDown(){                                                                   // countDown 함수 생성
// 삼항 연산자 사용법 -> (조건) ? 참일 경우 : 거짓일 경우 
    time > 0 ? time -- : isPlaying = false;                                             // time이 0보다 클경우 time을 감소시키고 아닐경우 isPlaying를 false로 변경
    if(!isPlaying){                                                                     // 만약에 isPlaying이 true일 경우
        clearInterval(timeInterval);                                                    // 반복 실행 되고 있던 timeInterval를 종료
    }
    timeDisplay.innerText = time;                                                       // timeDisplay의 텍스트 속성을 time을 변경
}

function buttonChange(text){                                                                        // buttonChange 함수 생성 매개변수(text)입력
    button.innerText = text;                                                                        // button의 텍스트 속성을 text(매개변수)로 변경
    text === '게임시작' ? button.classList.remove('loading') : button.classList.add('loading');     // 매개변수(text)가 '게임시작'과 같을 경우 버튼 클래스 스타일의 .loading값을 없애고 아닐 경우 버튼 클래스 스타일의 .loading값을 추가함
}