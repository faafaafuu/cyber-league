export default () => {

const wheel_cards = document.querySelectorAll('.rs');
const choose_box = document.querySelector('.wheel_pic');
const rotateBox = document.querySelector('.box1')
const bgcolor = document.querySelector('.bgc')
const bg = document.querySelector('.ll_bg');
const game_logo = document.querySelector('.game_logo')
// const pseudo = window.getComputedStyle(document.querySelector('.choose_box'),':before');

document.body.addEventListener('mouseover', function(e) { 
    if( e.target.classList.contains('rs') || e.target.classList.contains('rotateFull')){
        rotateBox.style.webkitAnimationPlayState = 'paused'; 
        rotateBox.style.animationPlayState = 'paused'; 
        for(let i = 0; i < wheel_cards.length; i++) {
            wheel_cards[i].style.webkitAnimationPlayState = 'paused';  
            wheel_cards[i].style.animationPlayState = 'paused';  
        }
    }
})
//Останавливает и возообновляет анимацию при наведение(колесо и изоображения внутри)
document.body.addEventListener('mouseout', function(e) {
    if(e.target.classList.contains('rs') || e.target.classList.contains('rotateFull')){
        rotateBox.style.webkitAnimationPlayState = ''; 
        rotateBox.style.animationPlayState = '';  
        for(let i = 0; i < wheel_cards.length; i++) {
            wheel_cards[i].style.webkitAnimationPlayState = '';  
            wheel_cards[i].style.animationPlayState = ''; 
        }
    }
})
//Берет нужный класс стилей из элемента и добавляет его в фон и выбраную игру в колесе
document.addEventListener('click', function(e) {
    if(e.target.classList.contains('rs')) {
        for(let i = 0; i < wheel_cards.length; i++) {
            let el_class = wheel_cards[i].className.slice(3,5);
            // console.log(el_class)
            if(e.target.classList.contains(el_class)) {
                let choose_box_slice = choose_box.className.slice(0,9)
                choose_box.className = '';
                choose_box.classList.add(choose_box_slice, el_class + 's');
                bg.src = `./img/bg/${el_class}s.png`;
                game_logo.src = `./img/logos/${el_class}s_logo.png`;
                
            }
        }
    }
})

// function img_loader (img, data) {
//     img.addEventListener('load', () => {
//         img.src = data;
//         return img;
//     })
// }
// $('.rs'||'.bgc').hover(
//     function(){ $(this).removeClass('bgc') },
//     function(){ $(this).addClass('bgc')}
// );

}