
//변수 지정
const currenEl_one= document.getElementById("currency_one");
const currenEl_two= document.getElementById("currency_two");
const amountEl_one= document.getElementById("amount_one");
const amountEl_two= document.getElementById("amount_two");
const rateEl= document.getElementById("rate");
const swap= document.getElementById("swap");


//함수
function calculate(){
    const currency_one= currenEl_one.value;
    const currency_two= currenEl_two.value;

    fetch("https://open.exchangerate-api.com/v6/latest")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const rate = data.rates[currency_two] / data.rates[currency_one];
            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
            amountEl_two.value = (amountEl_one.value * (rate)).toFixed(2);
        });
}


//이벤트
currenEl_one.addEventListener("change", calculate);
currenEl_two.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
amountEl_two.addEventListener("input", calculate);

swap.addEventListener("click", () => {
    const temp= currenEl_one.value;
    currenEl_one.value= currenEl_two.value;
    currenEl_two.value= temp;
    calculate();
})

calculate();