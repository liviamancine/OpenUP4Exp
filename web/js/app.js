// ===== MOBILE MENU =====
function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

// ===== SMOOTH SCROLL & ACTIVE NAV =====
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }

        // Update active state
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        // Close mobile menu
        document.querySelector('.nav').classList.remove('active');
    });
});

// ===== SCROLL SPY =====
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Header shadow on scroll
    const header = document.querySelector('.header');
    if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// ===== ANIMATE ON SCROLL =====
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards
document.querySelectorAll('.process-card, .eval-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelector('.nav').classList.remove('active');
    }
});

// ===== CONSOLE =====
console.log('OpenUPExp - Framework para Requisitos de Explicabilidade em IA');
console.log('Para adicionar diagramas, publique pelo Bizagi Modeler na pasta web/bizagi-publish/');