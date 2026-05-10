// 1. 导航栏滚动效果
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. 移动端菜单
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
    // 点击菜单链接关闭移动端菜单
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
}

// 3. 轮播组件初始化（如果页面有轮播）
function initCarousel(carouselId, interval = 3000) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;

    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById(`${carouselId}Prev`);
    const nextBtn = document.getElementById(`${carouselId}Next`);
    const indicators = document.querySelectorAll(`#${carouselId}Indicators .indicator`);
    let currentIndex = 0;

    function showSlide(index) {
        items.forEach(item => item.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));
        items[index].classList.add('active');
        indicators[index].classList.add('active');
        currentIndex = index;
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            showSlide(currentIndex);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % items.length;
            showSlide(currentIndex);
        });
    }

    indicators.forEach((ind, index) => {
        ind.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // 自动轮播
    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    }, interval);
}

// 页面加载完成后初始化轮播
window.addEventListener('DOMContentLoaded', () => {
    initCarousel('treasuresCarousel');
    initCarousel('artsCarousel');
});

// 4. 回到顶部
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}