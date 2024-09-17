

function setBackgroundColor(element){
    if (element.style.color === 'white'){
        element.style.removeProperty('background-color');
        element.style.removeProperty('color');
        const ind = seats.indexOf(element.id);
        seats.splice(ind, 1);
        const newId = element.id.toLowerCase();
        popElement(newId);
         
    }
    else{
        element.style.backgroundColor = '#1DD100';
        element.style.color = 'white';
        seats.push(element.id);
        setElement(element.id);
          
    }
}


 function setElement(seat){
    const seatContainer = document.getElementById('seat-selected');
    const newId = seat.toLowerCase();
        seatContainer.innerHTML += `<div id="${newId}" class="flex justify-between py-4">
                                    <p>${seat}</p>
                                    <p>Economy</p>
                                    <p>550</p>
                                </div>`
    
 }
 function popElement( element ){
    document.getElementById(element).classList.add('hidden')
}
 