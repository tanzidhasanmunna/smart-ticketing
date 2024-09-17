
let seats = [];
const price = 550;




function offerChecker(){
    const cuppon = document.getElementById("cuppon-value").value;
    if (seats.length === 4 && cuppon === "NEW15"){
        let totalPrice = parseInt(document.getElementById("total-price").innerText);
        totalPrice = totalPrice - (totalPrice * 0.15);
        setTextById("grand-total", totalPrice);
        document.getElementById("apply-cuppon").disabled =true;
    }
    else if (seats.length === 2 && cuppon === "Couple 20"){
        let totalPrice = parseInt(document.getElementById("total-price").innerText);
        totalPrice = totalPrice - (totalPrice * 0.20);
        setTextById("grand-total", totalPrice);
        document.getElementById("apply-cuppon").disabled =true;
    }
}