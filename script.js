// ================================
// Smooth Scroll Navigation
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// Navbar Scroll Effect
// ================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ================================
// Scroll Animation Observer
// ================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            // Optional: Unobserve after animation to improve performance
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
});

// ================================
// Typing Effect for Hero Title (Optional Enhancement)
// ================================
const heroTitle = document.querySelector('.hero-text h1');
if (heroTitle) {
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < originalText.length) {
            heroTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}

// ================================
// Project Cards Stagger Animation
// ================================
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// ================================
// Skill Items Hover Effect Enhancement
// ================================
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-2px) scale(1.05)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// ================================
// Dynamic Year in Footer
// ================================
const footer = document.querySelector('footer p');
if (footer) {
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; ${currentYear} Adarsh G. All rights reserved.`;
}

// ================================
// Parallax Effect for Hero Background
// ================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.getElementById('hero');

    if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ================================
// Contact Button Click Analytics (Optional)
// ================================
const contactButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
contactButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Add a subtle click animation
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 150);
    });
});

// ================================
// Load Animation for Hero Image
// ================================
window.addEventListener('load', () => {
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'scale(0.8)';

        setTimeout(() => {
            heroImage.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'scale(1)';
        }, 300);
    }
});

// ================================
// Timeline Animation Enhancement
// ================================
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'all 0.6s ease-out';
    timelineObserver.observe(item);
});

// ================================
// Education Card Flip Effect on Mobile
// ================================
if (window.innerWidth <= 768) {
    const educationCards = document.querySelectorAll('.education-card');
    educationCards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = card.style.transform === 'rotateY(180deg)'
                ? 'rotateY(0deg)'
                : 'rotateY(180deg)';
        });
    });
}

// ================================
// Performance: Lazy Loading for Images
// ================================
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });
}

console.log('🚀 Portfolio loaded successfully!');
