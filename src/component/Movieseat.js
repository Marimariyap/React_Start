import "./css/Movieseat.css";

export default function Movieseat() {
    // const container= document.querySelector('.container');
    // const seats= document.querySelectorAll('.row .seat:not(.occupied)');
    // const count= document.getElementById('count');
    // const total= document.getElementById('total');
    // const movie= document.getElementById('movies');
    // console.log(container);

    // populateUI();

    // let ticket= +movie.value;

    // function setMovie(movieIndex, moviePrice){
    //     localStorage.setItem('seleMovieIndex', movieIndex);
    //     localStorage.setItem('seleMoviePrice', moviePrice);
    // }

    // function updateSeleCount(){
    //     const selectedSeats= document.querySelectorAll('.row .seat.selected');
    //     const seatsIndex= [...selectedSeats].map(seat => [...seats].indexOf(seat));
    //     localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    //     const selectedSeatsCount= selectedSeats.length;

    //     count.innerText= selectedSeatsCount;
    //     total.innerText= selectedSeatsCount * ticket;

    //     setMovie(movie.selectedIndex, movie.value);
    // }

    // function populateUI(){
    //     const selectedSeats= JSON.parse(localStorage.getItem('selectedSeats'));

    //     if(selectedSeats !== null && selectedSeats.length > 0) {
    //         seats.forEach((seat, index) => {
    //             if(selectedSeats.indexOf(index) > -1){
    //                 seat.classList.add('selected');
    //             }
    //         });
    //     }

    //     const seleMovieIndex= localStorage.getItem('selectedMovieIndex');

    //     if(seleMovieIndex !== null){
    //         movie.selectedIndex= seleMovieIndex;
    //     }
    // }


    // movie.addEventListener('change', e => {
    //     ticket= +e.target.value;
    //     setMovie(e.target.selectedIndex, e.target.value);
    //     updateSeleCount();
    // });

    // container.addEventListener('click', e => {
    //     if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
    //         e.target.classList.toggle('selected');
    //         updateSeleCount();
    //     }
    // });

    // updateSeleCount();

    return (
        <div className="movies">
            <div className="movie">
                <label>영화를 골라주세요 : </label>
                <select id="movies">
                    <option value="15000">아바타 : 물의 길 (15,000￦) </option>
                    <option value="12000">올빼미 (12,000￦) </option>
                    <option value="9000">탄생 (9,000￦) </option>
                    <option value="8000">더 메뉴 (8,000￦) </option>
                </select>
            </div>

            <ul className="showcase">
                <li>
                <div className="seat"></div>
                    <small>빈좌석</small>
                </li>
                <li>
                <div className="seat selected"></div>
                    <small>선택한 좌석</small>
                </li>
                <li>
                <div className="seat occupied"></div>
                    <small>선택 불가</small>
                </li>
            </ul>

            <div className="containers">
                <div className="screen"></div>

                <div className="row">
                    <div className="seat occupied"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat occupied"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                </div>

                <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                </div>
                
                <div className="row">
                    <div className="seat"></div>
                    <div className="seat occupied"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat"></div>
                </div>
                
                <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                </div>
                
                <div className="row">
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                </div>

                <div className="row">
                    <div className="seat"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                    <div className="seat occupied"></div>
                </div>
            </div>

            <p className="text">
                <span id="count">0</span>개의 좌석을 선택 하셨습니다.<br/>
                총<span id="total">0</span>￦ 입니다.
            </p>
        </div>
    )
}