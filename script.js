// Image counter
let counter=1

// Selectors
const drawingsBtn=document.getElementById('drawings_btn')
const drawings = Array.from(document.querySelectorAll('.pic img'))

// Event Listeners
drawingsBtn.addEventListener('click', changeDrawing)
function changeDrawing(){
    if(counter>=drawings.length){
        drawings[counter-1].style.display="none"
        counter=0;
    }
    for(let i=0;i<counter;i++){
        drawings[i].style.display="none"
    }
    drawings[counter].style.display="block"
    counter++
}