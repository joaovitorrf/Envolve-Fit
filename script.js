// Loader Inicial
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => { loader.style.display = 'none'; }, 500);
});

// Navbar Inteligente (Shrink on Scroll)
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('main-nav');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Parallax Leve
const parallaxElements = document.querySelectorAll('.parallax-bg');
window.addEventListener('scroll', () => {
    parallaxElements.forEach(el => {
        const speed = 0.3; // Ajuste para parallax sutil
        const yPos = window.scrollY * speed;
        el.style.transform = `translateY(${yPos}px)`;
    });
});

// Scroll Reveal com IntersectionObserver
const revealOptions = { threshold: 0.2 };
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, revealOptions);

document.querySelectorAll('.reveal-section').forEach(el => revealObserver.observe(el));

// FAQ Accordion
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('active'));
        if (!isActive) item.classList.add('active');
    });
});

// Form Submission com Feedback Visual
document.getElementById('leadForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-cta');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span class="btn-text">Enviando...</span>';
    btn.disabled = true;

    // Simulação de envio (integre com API real aqui)
    setTimeout(() => {
        alert('Solicitação enviada! Entraremos em contato via WhatsApp em breve.');
        btn.innerHTML = originalText;
        btn.disabled = false;
        e.target.reset();
    }, 1500);
});

// Sticky CTA Mobile Visibilidade
const stickyCta = document.querySelector('.sticky-cta-mobile');
if (window.innerWidth <= 768) {
    stickyCta.style.display = 'block';
}

// Hover Premium para Cards (já no CSS, mas JS para extras se preciso)