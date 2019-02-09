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
// import './assets/md.sass';


const news = document.querySelector('.news');
const table_grid = document.querySelector('.table_nav');
const modal = document.querySelector('.modal')


//active на кнопки хэдэра
document.addEventListener('click', (e) => {
    console.log(e.target)
    if(e.target.textContent == 'Новости') {
        table_grid.classList.remove('active_nav')
        return news.classList.add('active_nav')
    }
    if(e.target.textContent == 'Расписание/сетка') {
        news.classList.remove('active_nav')
        return table_grid.classList.add('active_nav')
    }

    let etc = e.target.className;

    if(etc == "card-img-top" || etc == "card-body" || etc == "card-text" || etc == "card-date") {
        console.log(e.target.className)
        return modal.style.display = "block";
    }   
    if(etc ==  'close-modal'|| etc == 'modal-sandbox') {
        return modal.style.display = 'none';
    }
})

// sign up modal
(function(){
    //Show Modal
   $('#exampleModalLong').on('show.bs.modal', function (e) {
     console.log('show');
     $('.firstBlur').addClass('modalBlur');
   })
   
   //Remove modal
   $('#exampleModalLong').on('hide.bs.modal', function (e) {
      console.log('hide');
     $('.firstBlur').removeClass('modalBlur');
   })
 })();
 