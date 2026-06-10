const burgerCloseHtml = `
    <button class="burger-menu burger-menu--close" type="button">
        <div class="burger-menu__line burger-menu__first-line"></div>
        <div class="burger-menu__line burger-menu__second-line"></div>
    </button>
`;

export function burgerBtn() {
    const burger = document.querySelector('.burger-menu');
    const sidebar = document.querySelector('.sidebar');
    const sidebarLogo = sidebar.querySelector('.logo__img');
    // Открытие меню по клику на бургер
    burger.addEventListener('click', () => {
        if (document.querySelector('.burger-menu--close')) return;

        sidebarLogo.insertAdjacentHTML('beforebegin', burgerCloseHtml);
        sidebar.classList.add('visible');
    });

    //  Единый обработчик для закрытия (по кнопке или мимо меню)
    document.addEventListener('click', (event) => {
        // Если меню закрыто, ничего не делаем
        if (!sidebar.classList.contains('visible')) return;

        const isClickCloseBtn = event.target.closest('.burger-menu--close');
        const isClickOutside = !event.target.closest('.sidebar') && !event.target.closest('.burger-menu');

        // Закрываем, если кликнули на кнопку закрытия или вне сайдбара (и не по самому бургеру)
        if (isClickCloseBtn || isClickOutside) {
            sidebar.classList.remove('visible');
            
            // Безопасно ищем и удаляем кнопку, если она существует
            const closeBtn = document.querySelector('.burger-menu--close');
            if (closeBtn) closeBtn.remove();
        }
    });
}