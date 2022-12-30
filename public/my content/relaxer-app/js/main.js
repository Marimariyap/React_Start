const container= document.getElementById('container');
const text= document.getElementById('text');
const but= document.getElementById('but');
const loading= document.getElementById('load');

const total= 7500;
const breathe= (total / 5) *2;
const hold= total / 5;

animation();

function animation(){
    text.innerText= '숨쉬고';
    container.className= 'container grow';

    setTimeout(() => {
        text.innrText= 'Hold';

        setTimeout(() => {
            text.innerText= '숨내뱉고';
            container.className= 'container shrink';
        },hold);
    },breathe);
}

setInterval(animation, total);