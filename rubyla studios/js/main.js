/* =====================================================
   RUBYLA STUDIOS - MAIN JAVASCRIPT
   ===================================================== */

// ============ DOM Elementleri ============
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// ============ HAMBURGER MENU ============
// Mobil menüyü aç/kapat
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Nav linklerine tıklandığında menüyü kapat
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ============ SMOOTH SCROLLING ============
// Sayfalar arası yumuşak geçiş
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============ PAGE ANIMATIONS ============
// Sayfa yükleme animasyonu
window.addEventListener('load', () => {
    document.querySelectorAll('.page').forEach(page => {
        if (page.classList.contains('active')) {
            page.style.animation = 'pageIn 0.5s ease forwards';
        }
    });
});

// ============ COUNTER ANIMATION ============
// Sayı sayıcı animasyonu
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Sayfa yüklendiğinde sayıcıyı başlat
document.addEventListener('DOMContentLoaded', () => {
    const countElement = document.querySelector('.count');
    if (countElement) {
        // Intersection Observer kullanarak görünüme geldiğinde başlat
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target, 8);
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(countElement);
    }
});

// ============ ACTIVE NAV LINK ============
// Aktif sayfa linkini güncelle
function updateActiveNav() {
    const currentPage = window.location.pathname;
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (currentPage.includes(link.getAttribute('data-page'))) {
            link.classList.add('active');
        }
    });

    // Anasayfada ise
    if (currentPage.endsWith('.html') === false || currentPage.includes('index.html')) {
        document.querySelector('[data-page="home"]')?.classList.add('active');
    }
}

// Sayfa yüklendiğinde ve değiştiğinde
window.addEventListener('load', updateActiveNav);
window.addEventListener('hashchange', updateActiveNav);

// ============ SCROLL EFFECT ============
// Kaydırma efektleri
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.6)';
    } else {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ============ PRELOAD ANIMATIONS ============
// Elemanlar görünüme girdiğinde animasyon
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Sayfa başlama elemanları gözlemle
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.counter-card, .about-section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// ============ CONSOLE LOG ============
// Hoşgeldiniz mesajı
console.log(
    '%c🎮 Rubyla Studios - Dijital Dünyalar İnşa Ediyoruz 🎮',
    'color: #FFD700; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px #FFD700;'
);
console.log(
    '%cTeknoloji: HTML5 • CSS3 • JavaScript (Modern)\nYaratıcılık: Minecraft • Oyun Geliştirme • Web Tasarım',
    'color: #f0f0f0; font-size: 12px;'
);
