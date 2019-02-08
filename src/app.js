import './assets/block1.scss';
import './assets/block2.scss';
import './assets/block3.scss';
import './assets/people.scss';
import './assets/style.scss';
import './assets/wheel.scss';
import './assets/media.scss';


const news = document.querySelector('.news');
const table_grid = document.querySelector('.table_nav');

//active на кнопки хэдэра
document.addEventListener('click', (e) => {
    if(e.target.textContent == 'Новости') {
        table_grid.classList.remove('active_nav')
        return news.classList.add('active_nav')
    }
    if(e.target.textContent == 'Расписание/сетка') {
        news.classList.remove('active_nav')
        return table_grid.classList.add('active_nav')
    }
})