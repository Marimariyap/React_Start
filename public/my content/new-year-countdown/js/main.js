const year= document.getElementById('year')
const day= document.getElementById('day');
const hour= document.getElementById('hou');
const minute= document.getElementById('min');
const second= document.getElementById('sec');

const count= document.getElementById('countdown');
const loading= document.getElementById('load');

const current= new Date().getFullYear();

const newYearTime= new Date(`January 01 ${current + 1} 00:00:00`);

year.innerText= current + 1;

function updateCount(){
    const currentTime= new Date();
    const diff= newYearTime - currentTime;

    const D= Math.floor(diff / 1000 / 60 / 60 / 24);
    const H= Math.floor(diff / 1000 / 60 / 60) % 24;
    const M= Math.floor(diff / 1000 / 60) % 60;
    const S= Math.floor(diff / 1000) % 60;

    day.innerHTML= D;
    hour.innerHTML= H<10 ? '0'+H : H;
    minute.innerHTML= M<10 ? '0'+M : M;
    second.innerHTML= S<10 ? '0'+S : S;
}

setTimeout(() => {
    loading.remove();
    count.style.display= 'flex';
}, 1000);

setInterval(updateCount, 1000);