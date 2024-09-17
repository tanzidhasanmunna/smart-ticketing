document.getElementById("buy-tickets").addEventListener("click", function () {
  const buyTicketsElement = document.getElementById("order-section");
  buyTicketsElement.scrollIntoView({ behavior: "smooth", block: "start" });
});



function addSeat(value) {
  if( seats.length  < 4) {
    setBackgroundColor(value);
    console.log(seats);
    setTextById('total-seat-select',seats.length);
    setTextById('seat-left',40 - seats.length);
    setTextById('total-price',price * seats.length);
    setTextById("grand-total", price * seats.length);
    customerInfoChecker();
  }
  else{
    const ind = seats.indexOf(value.id);
    seats.splice(ind, 1);
    const newId = element.id.toLowerCase();
    popElement(newId);
  }

}

