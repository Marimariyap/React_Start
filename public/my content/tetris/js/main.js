import BLOCKS from "./block.js";

//DOM 선언
const playground = document.querySelector(".playground > ul");
const scoreDisplay = document.querySelector(".score");
const gameText = document.querySelector(".game-text");
const restartButton = document.querySelector(".game-text > button");

//Setting 선언
//변치 않는 값을 갖는 변수, const
const GAME_ROWS = 20;
const GAME_COLS = 10;

//variables 선언
//const와 다르게 다른 값이 재할당, let
let score = 0;
let downInterval;
let duration = 500;
let tempMovingItem;

const movingitem = {
    type: "",
    direction: 3,
    top: 0,
    left: 0,
};

init()

//Functions 선언
function init() {
    //객체 {} 안의 값을 편하게 꺼내 쓸 수 있는 문법, 전개연산자 {...}
    tempMovingItem = { ...movingitem };
    for (let i = 0; i < GAME_ROWS; i++) {
        prependNewLine()
    };
    genereteNewBlock()
};

function prependNewLine() {
    //자바스크립트를 이용하여 문서에 HTML 요소를 추가, createElement
    const li = document.createElement("li");
    const ul = document.createElement("ul");
    for (let j = 0; j < GAME_COLS; j++) {
        const matrix = document.createElement("li");
        //선택된 요소의 첫번째에 새로운 요소나 콘텐츠를 추가, .prepend
        ul.prepend(matrix);
    };
    li.prepend(ul);
    playground.prepend(li);
};

function renderBlocks(moveType = "") {
    const { type, direction, top, left} = tempMovingItem;
    const movingBlock = document.querySelectorAll(".moving");
    movingBlock.forEach(moving => {
        moving.classList.remove(type, "moving");
    });
    //배열의 1개 요소라도 특정 조건을 충족하는지 확인하는데 사용, some
    BLOCKS[type][direction].some(block => {
        const x = block[0] + left;
        const y = block[1] + top;
        //배열의 형태로 노드를 순서대로 반환, childNodes
        const target = playground.childNodes[y] ? playground.childNodes[y].childNodes[0].childNodes[x] : null;
        const isAvailable = checkEmpty(target);
        if (isAvailable) {
            //클래스 하나 추가, .add
            target.classList.add(type, "moving");
        } else {
            tempMovingItem = { ...movingitem };
            if(moveType === "retry") {
                //이전에 설정된 시간이 지정된 반복 작업을 취소, clearInterval
                clearInterval(downInterval);
                showGameoverText();
            }
            //일정 시간이 지난 후 정해진 코드를 실행, setTimeout
            setTimeout(() => {
                renderBlocks("retry");
                if(moveType === "top") {
                    seizBlock();
                }
                
            }, 0);
            return true;
        }
        
        
    });
    movingitem.left = left;
    movingitem.top = top;
    movingitem.direction = direction;
};

function seizBlock() {
    const movingBlock = document.querySelectorAll(".moving");
    //주어진 함수를 배열 요소 각각에 대해 실행, .forEach
    //ex) BLOCKS[type][direction].forEach
    movingBlock.forEach(moving => {
        moving.classList.remove("moving");
        moving.classList.add("seized");
    });
    checkMatch();
    
};

function checkMatch() {
    const childNodes = playground.childNodes;
    childNodes.forEach(child => {
        let matched = true;
        child.children[0].childNodes.forEach(li => {
            if(!li.classList.contains("seized")) {
                matched = false;
            }
        });
        if(matched) {
            child.remove();
            prependNewLine();
            score++;
            scoreDisplay.innerText = score;
            
        }
    })
    genereteNewBlock()
};

function genereteNewBlock() {
    clearInterval(downInterval);
    downInterval = setInterval(() => {
        moveBlock("top", 1);
    }, duration)
    //쌍을 담은 배열을 반환, Object.entries
    const blockArray = Object.entries(BLOCKS);
    const randomIndex = Math.floor(Math.random() * blockArray.length);
    
    movingitem.type = blockArray[randomIndex][0]
    movingitem.top = 0;
    movingitem.left = 3;
    movingitem.direction = 0;
    tempMovingItem = { ...movingitem };
    renderBlocks()
}

function checkEmpty(target) {
    //특정문자 포함 여부 확인, contains
    //OR = ||
    if(!target || target.classList.contains("seized")) {
        return false;
    }
    return true;
};

//event handling
function moveBlock(moveType, amount) {
    tempMovingItem[moveType] += amount;
    renderBlocks(moveType);
};

function chageDirection() {
    const direction = tempMovingItem.direction;
    direction === 3 ? tempMovingItem.direction = 0 : tempMovingItem.direction += 1;
    renderBlocks();
};

function dropBlock() {
    clearInterval(downInterval);
    downInterval = setInterval(() => {
        moveBlock("top", 1);
    }, 10);
};

function showGameoverText() {
    gameText.style.display = "flex"
};

//DOM요소에 이벤트 리스너를 등록, addEventListener
document.addEventListener("keydown", e => {
    //다른 조건에 따라 다른 작업을 수행하는 데 사용, switch
    switch(e.keyCode) {
        case 39:
            moveBlock("left", 1);
            break;
        case 37:
            moveBlock("left", -1);
            break;
        case 40:
            moveBlock("top", 1);
            break;
        case 38:
            chageDirection();
            break;
        case 32:
            dropBlock();
            break;
        default:
            break;
    }
    console.log(e);
});

restartButton.addEventListener("click", () => {
    playground.innerHTML = "";
    gameText.style.display = "none";
    init()
});