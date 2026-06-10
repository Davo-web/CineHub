export function itemClick () {
    const sidebarList = document.querySelector('.sidebar__list');
    sidebarList.addEventListener('click', (event) => {
        if (event.target.classList.contains('sidebar__list') || event.target.closest('.sidebar__item').classList.contains('active')
            || !event.target.closest('.sidebar__item')) {
            return
        }
        else {
            const activeItem = sidebarList.querySelector('.active');
            activeItem.classList.remove('active');
            event.target.closest('.sidebar__item').classList.add('active');
        }
    })
}