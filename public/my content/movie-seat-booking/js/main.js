const container= document.querySelector('.container');
const seats= document.querySelectorAll('.row .seat:not(.occupied)');
const count= document.getElementById('count');
const total= document.getElementById('total');
const movie= document.getElementById('movies');
console.log(container);

populateUI();

let ticket= +movie.value;

function setMovie(movieIndex, moviePrice){
    localStorage.setItem('seleMovieIndex', movieIndex);
    localStorage.setItem('seleMoviePrice', moviePrice);
}

function updateSeleCount(){
    const selectedSeats= document.querySelectorAll('.row .seat.selected');
    const seatsIndex= [...selectedSeats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount= selectedSeats.length;

    count.innerText= selectedSeatsCount;
    total.innerText= selectedSeatsCount * ticket;

    setMovie(movie.selectedIndex, movie.value);
}

function populateUI(){
    const selectedSeats= JSON.parse(localStorage.getItem('selectedSeats'));

    if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected');
            }
        });
    }

    const seleMovieIndex= localStorage.getItem('selectedMovieIndex');

    if(seleMovieIndex !== null){
        movie.selectedIndex= seleMovieIndex;
    }
}


movie.addEventListener('change', e => {
    ticket= +e.target.value;
    setMovie(e.target.selectedIndex, e.target.value);
    updateSeleCount();
});

container.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        updateSeleCount();
    }
});

updateSeleCount();