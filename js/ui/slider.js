export function slider () {
    const slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.hero__dot');
    let pagination = document.querySelector('.hero__pagination');

    let currentIndex = 0;

    const widthWithoutScroll = document.documentElement.clientWidth;

    if (widthWithoutScroll <= 760) {
        pagination.remove();
        pagination = document.querySelector('.pagination-small-screen');
        dots = document.querySelectorAll('.hero__dot');
        dots[currentIndex].classList.add('hero__dot--active');
    }
    
    pagination.addEventListener('click', (event) => {
        for (let i = 0; i < dots.length; i++) {
            if (event.target === dots[i]) {
                currentIndex = i;
                
                const container = slides[currentIndex].parentElement;
                container.scrollTo({
                    left: slides[currentIndex].offsetLeft,
                    behavior: 'smooth'
                });

                dots.forEach(el => el.classList.remove('hero__dot--active'));
                dots[currentIndex].classList.add('hero__dot--active');
            }
        }
    })

    setInterval(() => {
        // Увеличиваем индекс, а при достижении конца — сбрасываем в 0
        currentIndex = (currentIndex + 1) % slides.length;

        // Прокручиваем к текущему слайду
        const container = slides[currentIndex].parentElement;
        container.scrollTo({
            left: slides[currentIndex].offsetLeft,
            behavior: 'smooth'
        });
        dots.forEach(el => el.classList.remove('hero__dot--active'));
        dots[currentIndex].classList.add('hero__dot--active');
    }, 10000);
}