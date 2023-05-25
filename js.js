    const seats = Array(20).fill(true);

    const selectedSeats = {};

    function toggleSeat(index) {
    if (seats[index]) {
    if (selectedSeats[index]) {
    delete selectedSeats[index];
} else {
    selectedSeats[index] = true;
}
    renderSeats();}
}

    function renderSeats() {
    const seatMap = document.getElementById('seat-map');
    seatMap.innerHTML = '';

    seats.forEach((available, index) => {
    const seat = document.createElement('div');
    seat.className = `seat${selectedSeats[index] ? ' selected' : ''}${!available ? ' unavailable' : ''}`;
    seat.addEventListener('click', () => toggleSeat(index));
    seatMap.appendChild(seat);
});

    const selectedSeatsElement = document.getElementById('selected-seats');
    selectedSeatsElement.textContent = `Selected Seats: ${Object.keys(selectedSeats).length}`;

    const messageElement = document.getElementById('message');
    if (Object.keys(selectedSeats).length > 5) {
    messageElement.textContent = 'You can only select up to 5 seats.';
} else {
    messageElement.textContent = '';
}
}

    function bookTickets() {
    const numSelectedSeats = Object.keys(selectedSeats).length;
    if (numSelectedSeats === 0) {
    alert('Please select at least one seat.');
} else if (numSelectedSeats > 5) {
    alert('You can only select up to 5 seats.');
} else {
    const selectedSeatNumbers = Object.keys(selectedSeats);
    alert(`Congratulations! You have booked seat(s): ${selectedSeatNumbers.join(', ')}`);

    renderSeats();
}
}

    renderSeats();

    const bookButton = document.getElementById('book-button');
    bookButton.addEventListener('click', bookTickets);