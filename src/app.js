import './assets/sign_up_form.scss'
import './assets/block1.scss';
import './assets/block2.scss';
import './assets/block3.scss';
import './assets/people.scss';
import './assets/style.scss';
import './assets/wheel.scss';
import './assets/media.scss';
import './assets/modal.scss';
import './assets/news.scss';
import './assets/reg.scss';
// import './assets/md.sass';


const news = document.querySelector('.header_news');
const table_grid = document.querySelector('.table_nav');
const modal = document.querySelector('.modal')
const main_page = document.querySelector('.main_page');
const news_page = document.querySelector('.news_page')


//active на кнопки хэдэра
document.addEventListener('click', (e) => {
    if(e.target.textContent == 'Новости') {
        table_grid.classList.remove('active_nav')
        news.classList.add('active_nav')
        main_page.classList.remove('active_page')
        return news_page.classList.add('active_page')
    }
    if(e.target.textContent == 'Расписание/сетка') {
        news.classList.remove('active_nav')
        table_grid.classList.add('active_nav')
        news_page.classList.remove('active_page')
        return main_page.classList.add('active_page')

    }
})

document.addEventListener('click', (e) => {
    let etc = e.target.className;
    console.log(etc)
    if(etc == "card-img-top" ) {
        modal.style.display = 'block';
        // modal.classList.add("active-modal");
    }   
    // if(etc ==  'close-modal'|| etc == 'modal-sandbox') {
    //     modal.classList.remove('.fade')
    //     return modal.style.display = 'none';
    // }
})


$(function(){
    $menuWrap = $('.menu-wrap');
    $menuItem = $('.menu').find('.item');
    
    itemDeg = 360 / $menuItem.length;
    $menuItem.each(function(r){
        $(this).css('transform', 'rotate(' + ( itemDeg / 2 - itemDeg * r ) + 'deg) skew(' + ( - 90 + itemDeg ) + 'deg)');
        $(this).children('.item-inner').css('transform', 'skew(' + ( 90 - itemDeg ) + 'deg)');
    });
});