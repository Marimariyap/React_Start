import React, { useState, useEffect } from "react";
import "./css/Exchangerate.css";

export default function Exchangerate() {
    const [currencyOne, setCurrencyOne]= useState("");
    const [currencyTwo, setCurrencyTwo]= useState("");
    const [amountOne, setAmountOne]= useState(0);
    const [amountTwo, setAmountTwo]= useState(0);
    const [rate, setRate]= useState(0);

    useEffect(() => {
      fetch("https://open.exchangerate-api.com/v6/latest")
        .then((response) => response.json())
        .then((data) => {
          const rate = data.rates[currencyTwo] / data.rates[currencyOne];
          setRate(rate);
          setAmountTwo((amountOne * rate).toFixed(2));
        });
    }, [currencyOne, currencyTwo, amountOne]);

    const handleCurrencyOneChange= (event) => {
      setCurrencyOne(event.target.value);
    };

    const handleCurrencyTwoChange= (event) => {
      setCurrencyTwo(event.target.value);
    };

    const handleAmountOneChange= (event) => {
      setAmountOne(event.target.value);
    };

    const handleAmountTwoChange= (event) => {
      setAmountTwo(event.target.value);
    };

    const swapCurrencies= () => {
      const temp= currencyOne;
      const tem= amountOne;
      setCurrencyOne(currencyTwo);
      setCurrencyTwo(temp);
      setAmountOne(amountTwo);
      setAmountTwo(tem);
    };

    return (
      <div>
        <div className="rate_main">
          <img src="img/Main/money.png" alt="money" className="money_img" />
          <h1>환율 계산기</h1>
          <p>환율을 받을 통화와 금액을 선택하십시오.</p>
        </div>

        <div className="container">
          <div className="currency">
            <select id="currency_one" value={currencyOne} onChange={handleCurrencyOneChange}>
              <option value="" selected>선택하십시오</option>
              <option value="AUD">호주 달러</option>
              <option value="EUR">유로</option>
              <option value="JPY">엔화</option>
              <option value="KRW">원화</option>
              <option value="USD">달러</option>
            </select>
            <input type="number" id="amount_one" placeholder="입력하십시오." value={amountOne} onChange={handleAmountOneChange}/>
          </div>

          <div className="swap_rate">
            <button className="btn" id="swap" onClick={swapCurrencies}>
              △▽
            </button>
            <div className="rate"> 1{currencyOne} = {(rate).toFixed(2)} {currencyTwo}</div>
          </div>

          <div className="currency">
            <select id="currency_two" value={currencyTwo} onChange={handleCurrencyTwoChange}>
              <option value="" selected>선택하십시오</option>
              <option value="AUD">호주 달러</option>
              <option value="EUR">유로</option>
              <option value="JPY">엔화</option>
              <option value="KRW">원화</option>
              <option value="USD">달러</option>
            </select>
            <input type="number" id="amount_two" placeholder="입력하십시오." value={amountTwo} onChange={handleAmountTwoChange}/>
          </div>
        </div>
      </div>
    )
  }
