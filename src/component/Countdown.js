import "./css/Countdown.css";
import React, { useRef, useEffect } from "react";
import useInterval from "./hook/useInterval";

export default function Countdown() {
  const yearRef = useRef(null);
  const dayRef = useRef(null);
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);
  const countRef = useRef(null);
  const loadingRef = useRef(null);

  const current = new Date().getFullYear();
  const newYearTime = new Date(`January 01 ${current + 1} 00:00:00`);

  useEffect(() => {
    yearRef.current.innerText = current + 1;
    setTimeout(() => {
      loadingRef.current.style.display = "none";
      countRef.current.style.display = "flex";
    }, 1000);
  }, [current]);

  useInterval(() => {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const D = Math.floor(diff / 1000 / 60 / 60 / 24);
    const H = Math.floor(diff / 1000 / 60 / 60) % 24;
    const M = Math.floor(diff / 1000 / 60) % 60;
    const S = Math.floor(diff / 1000) % 60;

    dayRef.current.innerHTML = D;
    hourRef.current.innerHTML = H < 10 ? "0" + H : H;
    minuteRef.current.innerHTML = M < 10 ? "0" + M : M;
    secondRef.current.innerHTML = S < 10 ? "0" + S : S;
  }, 1000);

  return (
    <div id="count">
      <div className="count">
        <div id="load" ref={loadingRef}>
          <img src="img/Main/spinner.gif" alt="Loading" />
        </div>

        <div ref={countRef}>
          <div className="year" id="year" ref={yearRef} />
        </div>

        <div id="countdown" ref={countRef} style={{ display: "none" }}>
          <h1>새해 카운트 다운</h1>

          <div>
            <h2 id="day" className="time" ref={dayRef}>
              0
            </h2>
            <div className="timetext">일</div>
          </div>

          <div>
            <h2 id="hou" className="time" ref={hourRef}>
              0
            </h2>
            <div className="timetext">시</div>
          </div>

          <div>
            <h2 id="min" className="time" ref={minuteRef}>
              0
            </h2>
            <div className="timetext">분</div>
          </div>

          <div>
            <h2 id="sec" className="time" ref={secondRef}>
              0
            </h2>
            <div className="time">초</div>
          </div>
        </div>
      </div>
    </div>
  );
}
