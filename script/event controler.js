document.getElementById("buy-tickets").addEventListener("click", function () {
  const buyTicketsElement = document.getElementById("order-section");
  buyTicketsElement.scrollIntoView({ behavior: "smooth", block: "start" });
});
let seat = [];

function addSeat(value) {


  
  setBackgroundColor(value);
  console.log(seat)
}
