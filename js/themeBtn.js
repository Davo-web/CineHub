import { settingsWindow } from './settingsBtn.js';
export function themeBtnClick () {

    const buttons = document.querySelectorAll('.sidebar__theme-btn');

    if (!localStorage.getItem('theme') || localStorage.getItem('theme') === 'dark') {
        // установка дефолтного значения в случае пустого LocalStorage
        changeLS('dark');
        changeActiveClass('dark');
        if (document.querySelector('.sidebar__theme-btn.dark.hidden')) {
            buttons.forEach(element => element.classList.toggle('hidden'));
        }
    }
    else if (localStorage.getItem('theme') === 'light') {
        if (document.querySelector('.sidebar__theme-btn.light.hidden')) {
            buttons.forEach(element => element.classList.toggle('hidden'));
        }
        changeActiveClass('light');
    }


    buttons.forEach((element) => {
        element.addEventListener('click', () => {
            if (localStorage.getItem('theme') === 'dark') {
                // Меняем на light
                changeLS('light');
                buttons.forEach(element => element.classList.toggle('hidden'));
                changeActiveClass('light');
            } else {
                // Возвращаем dark
                changeLS('dark'); 
                buttons.forEach(element => element.classList.toggle('hidden'));
                changeActiveClass('dark');
            }
        })
    })

    settingsWindow.addEventListener('click', (event) => {
        const { target } = event;
        const activeBtn = settingsWindow.querySelector('.active');
        if (target.closest('.theme__btn')) {
            activeBtn?.classList.remove('active');
            target.closest('.theme__btn').classList.add('active');
            if (target.closest('.first-btn')) {
                changeLS('dark');
                if (document.querySelector('.sidebar__theme-btn.dark.hidden')) {
                    buttons.forEach(element => element.classList.toggle('hidden'));
                }  
            }

            else if (target.closest('.second-btn')) {
                changeLS('light');
                if (document.querySelector('.sidebar__theme-btn.light.hidden')) {
                    buttons.forEach(element => element.classList.toggle('hidden'));
                } 
            }
        }
    });

    function changeLS(mode) {
        localStorage.setItem("theme", mode);
    }

    function changeActiveClass(mode) {
        if (mode === 'dark') {
            document.querySelector(`.second-btn`).classList.remove('active');
            document.querySelector(`.first-btn`).classList.add('active');
        }

        if (mode === 'light') {
            document.querySelector(`.first-btn`).classList.remove('active');
            document.querySelector(`.second-btn`).classList.add('active');
        }
    }
}