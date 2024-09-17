

function setBackgroundColor(element){
    if (element.style.color === 'white'){
        element.style.removeProperty('background-color');
        element.style.removeProperty('color');
        const ind = seat.indexOf(element.id);
        seat.splice(ind, 1);
    }
    else{
        element.style.backgroundColor = '#1DD100';
        element.style.color = 'white';
        seat.push(element.id);
    }
}