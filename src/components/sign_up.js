export default () => {
const sign_up = document.querySelector('.sign_up_form');
const reg_form = document.querySelector('.reg_form');


const blur = document.querySelectorAll('.ll_blur, .bg_blur, .masha, .roma, .kla_logo, .game_logo, .test');

    document.addEventListener('click', (e) => {
        if (e.target.className == 'enter' || e.target.className == 'enter_title') {
            for(let i = 0; i < blur.length; i++){
                console.log(blur[i])
                blur[i].classList.add('blur');
            }
        
        sign_up.classList.add('activator')    
        }
    })
    
    document.addEventListener('click', function(e) {
        if(e.target.className == 'firstBlur') {
            for(let i = 0; i < blur.length; i++){
                console.log(blur[i])
                blur[i].classList.remove('blur');
            }
            console.log(324)
            sign_up.classList.remove('activator')
        }
        if(e.target.classList.contains('reg-btn')){
            sign_up.classList.remove('activator');
            reg_form.classList.add('activator')
        }
        if(e.target.className == 'header_logo_title' || e.target.className ==  'header_news' || e.target.className == 'table_nav '){
            for(let i = 0; i < blur.length; i++){
                console.log(blur[i])
                blur[i].classList.remove('blur');
            }
            sign_up.classList.remove('activator');
            reg_form.classList.remove('activator')
        }
    })
}