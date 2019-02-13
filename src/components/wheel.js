export default () => {

const wheel_cards = document.querySelectorAll('.rs');
const choose_box = document.querySelector('.choose_box')
// const pseudo = window.getComputedStyle(document.querySelector('.choose_box'),':before');
    
document.body.addEventListener('mouseover', function(e) { 
    if(e.target.classList.contains('rs')){
        for(let i = 0; i < wheel_cards.length; i++) {
            wheel_cards[i].style.animationPlayState = 'paused';  
        }
    }
})

document.body.addEventListener('mouseout', function(e) {
    if(e.target.classList.contains('rs')){
        for(let i = 0; i < wheel_cards.length; i++) {
            wheel_cards[i].style.animationPlayState = '';  
        }
    }
})

document.addEventListener('click', function(e) {
    
    if(e.target.classList.contains('rs')) {
        for(let i = 0; i < wheel_cards.length; i++) {
            let el_class = wheel_cards[i].className.slice(3,5);
            
            if(e.target.classList.contains(el_class)) {
                let choose_box_slice = choose_box.className.slice(0,10)
                choose_box.className = '';
                let c = choose_box.classList.add(choose_box_slice, el_class + 's');
                console.log(choose_box.className)
                // return c;
            }
        }
    }
})
}