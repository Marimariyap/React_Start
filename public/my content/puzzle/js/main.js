const container= document.querySelector(".img_container");
const start= document.querySelector(".start");
const gametext= document.querySelector(".game_text");
const playtime= document.querySelector(".play_time");

const tileCount= 16;


let tiles= [];
const dragged= {
    el: null,
    class: null,
    index: null
}
let isPlay= false;
let timeInt= null;
let time= 0;

function check(){
    const current= [...container.children];
    const unMatch= current.filter((child, index) => Number(child.getAttribute('data_index')) !== index);
    console.log(unMatch);
    if(unMatch.length === 0){
        gametext.style.display= 'block';
        isPlay= false;
        clearInterval(timeInt);
    }
}

function setGame(){
    isPlay= true;
    time= 0;
    container.innerHTML= "";
    // gametext.style.display= 'none';
    clearInterval(timeInt);
    
    tiles= crearteImg();
    tiles.forEach(tile => container.appendChild(tile));
    setTimeout(()=>{
        container.innerHTML= "";
        show(tiles).forEach(tile => container.appendChild(tile))
        timeInt= setInterval(() => {
            playtime.innerText= time + "초";
            time++;
        }, 1000);
    }, 2000);
}

function crearteImg(){
    const tempArray= [];
    Array(tileCount).fill().forEach((_, index) => {
        const li= document.createElement("li");
        li.setAttribute('data_index', index);
        li.setAttribute('draggable', 'true');
        li.classList.add(`list${index}`);
        tempArray.push(li);
    })
    return tempArray;
}

function show(array){
    let index= array.length -1;
    while(index > 0){
        const randomIndex= Math.floor(Math.random() * (index+1));
        [array[index], array[randomIndex]] = [array[randomIndex], array[index]]
        index--;
    }
    return array;
}




container.addEventListener("dragstart", e => {
    console.log(e);
    if(!isPlay) return;
    const obj= e.target;
    dragged.el= obj;
    dragged.class= obj.className;
    dragged.index= [...obj.parentNode.children].indexOf(obj);
})

container.addEventListener("dragover", e => {
    e.preventDefault();
})

container.addEventListener("drop", e => {
    if(!isPlay) return;
    const obj= e.target;

    if(obj.classsName !== dragged.class){
        let originPlace;
        let isLast= false;

        if(dragged.el.nextSibling){
            originPlace= dragged.el.nextSibling;
        } else{
            originPlace= dragged.el.previousSibling;
            isLast= true;
        }        
        const dropIndex= [...obj.parentNode.children].indexOf(obj);
        dragged.index > dropIndex ? obj.before(dragged.el) : obj.after(dragged.el)
        isLast ? originPlace.after(obj) : originPlace.before(obj)    
    }
    check();
});

start.addEventListener('click', () => {
    setGame();
});