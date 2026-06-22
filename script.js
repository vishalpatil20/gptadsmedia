/* ========================================
   GPT Ads Media - Landing Page JS
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.service-card, .process-card, .testimonial-card, .about-card, .section-header, .about-content, .tool-content, .tool-visual, .faq-item');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal', 'active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    revealElements.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    // Stagger delays for grids
    const grids = [
        { selector: '.services-grid .service-card', delay: 100 },
        { selector: '.process-grid .process-card', delay: 100 },
        { selector: '.testimonials-grid .testimonial-card', delay: 100 }
    ];
    grids.forEach(({ selector, delay }) => {
        document.querySelectorAll(selector).forEach((el, i) => {
            el.style.transitionDelay = `${i * delay}ms`;
        });
    });

    // Animated counters
    const statNumbers = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                const duration = 2000;
                const start = performance.now();
                const animate = (now) => {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const easeOut = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.floor(easeOut * target);
                    if (progress < 1) requestAnimationFrame(animate);
                };
                requestAnimationFrame(animate);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    statNumbers.forEach(num => counterObserver.observe(num));

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    // Modal / Popup
    const modal = document.getElementById('toolModal');
    const openModalBtns = [
        document.getElementById('openToolHero'),
        document.getElementById('openToolSection'),
        document.getElementById('openToolCta')
    ];
    const closeModalBtn = document.getElementById('modalClose');
    const cancelModalBtn = document.getElementById('modalCancel');

    function openModal() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    openModalBtns.forEach(btn => {
        if (btn) btn.addEventListener('click', openModal);
    });
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (cancelModalBtn) cancelModalBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});
