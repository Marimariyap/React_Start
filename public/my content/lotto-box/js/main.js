const numbers= document.querySelector(".numbers");
const drawButt= document.querySelector("#draw");
const resetButt= document.querySelector("#reset");
const live= document.querySelector(".live");

const lottoNum= [];
const color= ["pink", "khaki", "aquamarine", "lightgray", "skyblue"];


function numberLog(num){
    const numDiv= document.createElement("div");
    let colorIndex= Math.floor(num / 10);

    numDiv.style.backgroundColor= (color[colorIndex]);
    numDiv.classList.add("numClass");
    numDiv.textContent= num;
    numbers.appendChild(numDiv);
}

function liveLog(liv){
    const liveDiv= document.createElement("div");
    let colorIndex= Math.floor(liv / 10);

    liveDiv.style.color= (color[colorIndex]);
    liveDiv.classList.add("liveClass");
    liveDiv.textContent= liv;
    live.appendChild(liveDiv);
    live.innerHTML=lottoNum;
}


drawButt.addEventListener("click", function(){
    console.log('나도 1등 되면 좋겠다');
    numbers.innerHTML= "";
    lottoNum.splice(0, 6);
    while(lottoNum.length < 6){
        let randomNum= Math.floor(Math.random() * 45) + 1
        if(lottoNum.indexOf(randomNum) === -1){
            lottoNum.push(randomNum);
            numberLog(randomNum);
            
        }
        liveLog(randomNum);
    }
    
});

