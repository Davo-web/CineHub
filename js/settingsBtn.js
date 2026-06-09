export const settingsWindow = document.querySelector('.header-actions__settings-window');

export function settingsBtnClick() {
    document.addEventListener('click', (event) => {
        const { target } = event;

        if (target.closest('.header-actions__settings') || target.closest('.section-header__btn')) {
                settingsWindow.classList.toggle('active');
        }

        const clickOut = target.closest('.header-actions__settings-window') || target.closest('.header-actions__settings');
        if (settingsWindow.classList.contains('active') && !clickOut) 
                settingsWindow.classList.remove('active');
    })
}