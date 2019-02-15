export default () => {
    const header_news3 = document.querySelector('.header_news3');
    const schedule_btn = document.querySelector('.schedule_btn');
    const grid_btn = document.querySelector('.grid_btn');
    const team_grid = document.querySelector('.grid');
    const table_block = document.querySelector('.table_block');
    const table_grid = document.querySelector('.table_nav');
    const modal = document.querySelector('.modal');
    const main_page = document.querySelector('.main_page');
    const news_page = document.querySelector('.news_page');
    const main_header = document.querySelector('.main_header');


    const sign_up = document.querySelector('.sign_up_form');
    const reg_form = document.querySelector('.reg_form');

    const vk_btn = document.querySelector('.vk_btn');
    const news_modal = document.querySelector('#modal-name');
    const news_modal_pic = document.querySelector('.news-modal-pic');
    const arrow = document.querySelector('.arrow')


    // Убирает стрелку якорь на сафари, position: sticky не работает
    const checkBrowser = () => {
        navigator.sayswho= (function(){
            var ua= navigator.userAgent, tem,
            M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if(/trident/i.test(M[1])){
                tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
                return 'IE '+(tem[1] || '');
            }
            if(M[1]=== 'Chrome'){
                tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
                if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
            }
            M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
            if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
            return M.join(' ');
            
        })();
        if(navigator.sayswho.slice(0,6) == 'Safari') {
            arrow.classList.remove('arrow');
            arrow.firstElementChild.remove('arrow-top');
            arrow.lastElementChild.remove('arrow-bottom');        }
    }

    checkBrowser();

    //active на кнопки хэдэра
    document.body.addEventListener('click', function(e)  {
        let etc = e.target;
        // header navigation
        if(etc.className == 'header_news') {
            news_modal.classList.remove('active_modal'); //modal hide

            table_grid.classList.remove('active_nav')
            header_news3.classList.add('active_nav')

            main_page.classList.remove('activator')
            return news_page.classList.add('activator')
        }
        if (etc.className == 'table_nav' || etc.className == 'header_logo_title') {
            
            // table grid click hide header 
        if (etc.className == 'table_nav'){
            main_header.style.position = 'absolute'
            header_news3.classList.remove('active_nav')
            table_grid.classList.add('active_nav')
        }
            reg_form.classList.remove('activator')
            news_page.classList.remove('activator')
            return main_page.classList.add('activator')
        }

        if(etc.classList.contains('schedule_btn')) {
            schedule_btn.classList.add('active_nav')
            grid_btn.classList.remove('active_nav')

            team_grid.classList.remove('activator');
            return table_block.classList.add('table_block_active')
        }

        if(etc.classList.contains('grid_btn')) {
            grid_btn.classList.add('active_nav')
            schedule_btn.classList.remove('active_nav')

            table_block.classList.remove('table_block_active');
            return team_grid.classList.add('activator')
        }

        //modal(news)
        if(etc.className == 'card-img-top' || etc.className == 'card-text' || etc.className == 'card-date'){
            news_modal.classList.add('active_modal');
            
            setTimeout(() => {news_modal_pic.style.background = `url('${e.target.currentSrc}')`;},0)
            console.log(news_modal_pic)
        }
        if(etc.className == 'close-modal') {
            news_modal.classList.remove('active_modal');
        }

    })

    vk_btn.addEventListener('click', () => {
        return window.open = 'https://vk.com/alfaleads';
    })

}

















    // function addClass (e, name, el, act) {
    //     el = el;
    //     if(etc.className == name) {
    //         console.log('yep')
    //         el.classList.add(act)
    //     }
    //     removeClass(main_page, '.activator')
    // }

    // function removeClass(el, act) {
    //     console.log('w')
    //     return el.classList.remove(act)
    // }   