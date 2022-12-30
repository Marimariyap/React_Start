const main= document.getElementById('main');
const addUserBtu= document.getElementById('add_User');
const doubleBtu= document.getElementById('double');
const showMillionBtu= document.getElementById('show_millionaires');
const sortBtu= document.getElementById('sort');
const calculate= document.getElementById('calculate_wealth');

let data= [];

getRandom();
getRandom();
getRandom();

async function getRandom(){
    const res= await fetch('https://randomuser.me/api');
    const data= await res.json();
    const user= data.results[0];
    const newUser= {
        name:`${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 10000)
    }
    addData(newUser);
}

function doubleMoney(){
    data= data.map(user => {
        return {...user, money: user.money *2}
    });
    updateDOM();
}

function sortByRichest(){
    console.log(123);
    data.sort((a, b)=> b.money - a.money);
    updateDOM();
}

function showMillionaires(){
    data= data.filter(user => user.money > 1000000);
    updateDOM();
}

function calculateWealth(){
    const wealth= data.reduce((total, user) => (total += user.money), 0);
    const wealthEl= document.createElement('div');

    wealthEl.innerHTML= `<h3>Total Wealth: <strong>${formatMoney(
        wealth)}</strong></h3>`;
        main.appendChild(wealthEl);
}

function addData(obj){
    data.push(obj);

}

function updateDOM(providedData = data){
    main.innerHTML= `<h2><strong>개인</strong>재산</h2>`;
    providedData.forEach(item => {
        const element= document.createElement('div');
        element.classList.add('Person');
        element.innerHTML= `<strong>${item.name}</strong> ${formatMoney(
            item.money
        )}`;
        main.appendChild(element);
    });
}

function formatMoney(number){
    return number.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "원";
}



addUserBtu.addEventListener('click', getRandom);
doubleBtu.addEventListener('click', doubleMoney);
sortBtu.addEventListener('click', sortByRichest);
showMillionBtu.addEventListener('click',showMillionaires);
calculate.addEventListener('click', calculateWealth);