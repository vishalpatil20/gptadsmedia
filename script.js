document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const backToTop = document.getElementById('backToTop');
    const modal = document.getElementById('toolModal');

    // Navbar + scroll spy + back to top
    function onScroll() {
        const y = window.scrollY;
        navbar.classList.toggle('scrolled', y > 40);
        backToTop.classList.toggle('visible', y > 500);

        document.querySelectorAll('.nav-links a').forEach(link => {
            const id = link.getAttribute('href').slice(1);
            const section = document.getElementById(id);
            if (!section) return;
            const top = section.offsetTop - 120;
            const bottom = top + section.offsetHeight;
            link.classList.toggle('active', y >= top && y < bottom);
        });
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    // Mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Reveal on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Counter animation
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                const start = performance.now();
                const animate = (now) => {
                    const p = Math.min((now - start) / 1800, 1);
                    const ease = 1 - Math.pow(1 - p, 3);
                    el.textContent = Math.floor(ease * target);
                    if (p < 1) requestAnimationFrame(animate);
                };
                requestAnimationFrame(animate);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.num[data-target]').forEach(n => counterObserver.observe(n));

    // FAQ accordion
    document.querySelectorAll('.faq-q').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.closest('.faq-item');
            const open = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            if (!open) item.classList.add('active');
        });
    });

    // Modal
    function openModal() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('#openToolHero, #openToolSection').forEach(btn => {
        if (btn) btn.addEventListener('click', openModal);
    });
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalCancel').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

    // Back to top
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Contact form
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        e.target.style.display = 'none';
        document.getElementById('successMsg').classList.add('visible');
    });

    // Close mobile menu on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});
