import "./css/Movieseat.css";
import React, { useState, useEffect } from "react";

// export default function Movieseat() {
//     return (

//         <div className="movies">
//             <div className="movie">
//                 <label>영화를 골라주세요 : </label>
//                 <select id="movies">
//                     <option value="15000">아바타 : 물의 길 (15,000￦) </option>
//                     <option value="12000">올빼미 (12,000￦) </option>
//                     <option value="9000">탄생 (9,000￦) </option>
//                     <option value="8000">더 메뉴 (8,000￦) </option>
//                 </select>
//             </div>

//             <ul className="showcase">
//                 <li>
//                 <div className="seat"></div>
//                     <small>빈좌석</small>
//                 </li>
//                 <li>
//                 <div className="seat selected"></div>
//                     <small>선택한 좌석</small>
//                 </li>
//                 <li>
//                 <div className="seat occupied"></div>
//                     <small>선택 불가</small>
//                 </li>
//             </ul>

//             <div className="containers">
//                 <div className="screen"></div>

//                 <div className="row">
//                     <div className="seat occupied"></div>
//                     <div className="seat"></div>
//                     <div className="seat"></div>
//                     <div className="seat"></div>
//                     <div className="seat occupied"></div>
//                     <div className="seat"></div>
//                     <div className="seat"></div>
//                     <div className="seat"></div>
//                 </div>

//                 <div className="row">
//                     <div className="seat"></div>
//                     <div className="seat"></div>
//                     <div className="seat"></div>
//                     <div className="seat"></div>
//                     <div className="seat"></div>
//                     <div className="seat"></div>
//                     <div className="seat occupied"></div>
//                     <div className="seat occupied"></div>
//                 </div>

//                 <div className="row">
//                     <div className="seat"></div>
//                     <div className="seat occupied"></div>
//                     <div className="seat"></div>
//                     <div className="seat"></div>
//                     <div className="seat"></div>
//                     <div className="seat occupied"></div>
//                     <div className="seat occupied"></div>
//                     <div className="seat"></div>
//                 </div>

//                 <div className="row">
//                     <div className="seat"></div>
//                     <div className="seat"></div>
//                     <div className="seat"></div>
//                     <div className="seat"></div>
//                     <div className="seat"></div>
//                     <div className="seat"></div>
//                     <div className="seat"></div>
//                     <div className="seat"></div>
//                 </div>

//                 <div className="row">
//                     <div className="seat occupied"></div>
//                     <div className="seat occupied"></div>
//                     <div className="seat occupied"></div>
//                     <div className="seat occupied"></div>
//                     <div className="seat occupied"></div>
//                     <div className="seat occupied"></div>
//                     <div className="seat"></div>
//                     <div className="seat"></div>
//                 </div>

//                 <div className="row">
//                     <div className="seat"></div>
//                     <div className="seat occupied"></div>
//                     <div className="seat occupied"></div>
//                     <div className="seat occupied"></div>
//                     <div className="seat occupied"></div>
//                     <div className="seat occupied"></div>
//                     <div className="seat occupied"></div>
//                     <div className="seat occupied"></div>
//                 </div>
//             </div>

//             <p className="text">
//                 <span id="count">0</span>개의 좌석을 선택 하셨습니다.<br/>
//                 총<span id="total">0</span>￦ 입니다.
//             </p>
//         </div>
//     )
// }

export default function MovieSeatPicker() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(null);
  const [selectedMoviePrice, setSelectedMoviePrice] = useState(null);
  const [seats, setSeats] = useState([
    [
      { label: "A1", occupied: false },
      { label: "A2", occupied: true },
      { label: "A3", occupied: true },
      { label: "A4", occupied: true },
      { label: "A5", occupied: true },
      { label: "A6", occupied: false },
      { label: "A7", occupied: true },
      { label: "A8", occupied: true },
    ],
    [
      { label: "B1", occupied: true },
      { label: "B2", occupied: true },
      { label: "B3", occupied: true },
      { label: "B4", occupied: true },
      { label: "B5", occupied: true },
      { label: "B6", occupied: true },
      { label: "B7", occupied: true },
      { label: "B8", occupied: true },
    ],
    [
      { label: "C1", occupied: true },
      { label: "C2", occupied: true },
      { label: "C3", occupied: true },
      { label: "C4", occupied: true },
      { label: "C5", occupied: false },
      { label: "C6", occupied: true },
      { label: "C7", occupied: false },
      { label: "C8", occupied: false },
    ],
    [
      { label: "D1", occupied: true },
      { label: "D2", occupied: true },
      { label: "D3", occupied: true },
      { label: "D4", occupied: false },
      { label: "D5", occupied: true },
      { label: "D6", occupied: true },
      { label: "D7", occupied: true },
      { label: "D8", occupied: true },
    ],
    [
      { label: "E1", occupied: true },
      { label: "E2", occupied: true },
      { label: "E3", occupied: false },
      { label: "E4", occupied: true },
      { label: "E5", occupied: true },
      { label: "E6", occupied: true },
      { label: "E7", occupied: true },
      { label: "E8", occupied: true },
    ],
    [
      { label: "F1", occupied: true },
      { label: "F2", occupied: false },
      { label: "F3", occupied: true },
      { label: "F4", occupied: true },
      { label: "F5", occupied: true },
      { label: "F6", occupied: true },
      { label: "F7", occupied: true },
      { label: "F8", occupied: true },
    ],
  ]);

  useEffect(() => {
    // populate UI with data from local storage
    const seats = JSON.parse(localStorage.getItem("selectedSeats"));
    if (seats) {
      setSelectedSeats(seats);
    }
    const movieIndex = localStorage.getItem("selectedMovieIndex");
  }, []);

  function handleSeatClick(seatIndex) {
    let newSelectedSeats = [...selectedSeats];
    if (newSelectedSeats.indexOf(seatIndex) > -1) {
      newSelectedSeats = newSelectedSeats.filter((i) => i !== seatIndex);
    } else {
      newSelectedSeats.push(seatIndex);
    }
    setSelectedSeats(newSelectedSeats);
    localStorage.setItem("selectedSeats", JSON.stringify(newSelectedSeats));
  }

  function handleMovieChange(event) {
    const movieIndex = event.target.selectedIndex;
    const moviePrice = event.target.value;

    setSelectedMoviePrice(moviePrice);
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);
  }

  return (
    <div className="movie-seat-picker">
      <label>영화를 골라주세요 : </label>
      <div className="movie">
        <select id="movies" onChange={handleMovieChange}>
          <option value="15000">아바타 : 물의 길 (15,000￦) </option>
          <option value="12000">올빼미 (12,000￦) </option>
          <option value="9000">탄생 (9,000￦) </option>
          <option value="8000">더 메뉴 (8,000￦) </option>
        </select>
      </div>

      <ul class="showcase">
        <li>
          <div class="seat"></div>
          <small>빈좌석</small>
        </li>
        <li>
          <div class="seat selected"></div>
          <small>선택한 좌석</small>
        </li>
        <li>
          <div class="seat occupied"></div>
          <small>선택 불가</small>
        </li>
      </ul>
      <div class="container">
        <div className="screen"></div>
        <div className="seats">
          {seats.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              {row.map((seat, seatIndex) => (
                <div
                  className={`seat ${
                    seat.occupied
                      ? "occupied"
                      : selectedSeats.indexOf(seatIndex) > -1
                      ? "selected"
                      : ""
                  }`}
                  key={seatIndex}
                  onClick={() => handleSeatClick(seatIndex)}
                >
                  {seat.label}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="text">
        <span id="count">{selectedSeats.length - 1}</span>개의 좌석을 선택
        하셨습니다.
        <br />총{" "}
        <span id="total">
          {(selectedSeats.length - 1) * selectedMoviePrice}
        </span>
        원 입니다.
      </p>
    </div>
  );
}
