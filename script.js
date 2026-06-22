document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const backToTop = document.getElementById('backToTop');
    const modal = document.getElementById('toolModal');
    const closeModalBtn = document.getElementById('modalClose');
    const cancelModalBtn = document.getElementById('modalCancel');

    let ticking = false;
    let lastKnownScrollY = 0;

    function onScroll() {
        lastKnownScrollY = window.scrollY;
        if (!ticking) {
            requestAnimationFrame(() => {
                handleScroll(lastKnownScrollY);
                ticking = false;
            });
            ticking = true;
        }
    }

    function handleScroll(scrollY) {
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        if (scrollY > 600) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
        document.querySelectorAll('.nav-link').forEach(link => {
            const section = document.getElementById(link.getAttribute('href').slice(1));
            if (section) {
                const top = section.offsetTop - 150;
                const bottom = top + section.offsetHeight;
                link.classList.toggle('active', scrollY >= top && scrollY < bottom);
            }
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });

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

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal', 'active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const parent = entry.target.closest('.services-grid, .process-grid, .testimonials-grid');
                if (parent) {
                    parent.querySelectorAll('.stagger').forEach((el, i) => {
                        el.style.transitionDelay = `${i * 100}ms`;
                        el.classList.add('reveal', 'active');
                    });
                } else {
                    entry.target.classList.add('reveal', 'active');
                }
                staggerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.stagger').forEach(el => staggerObserver.observe(el));

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                const duration = 2000;
                const start = performance.now();
                requestAnimationFrame(function animate(now) {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const easeOut = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.floor(easeOut * target);
                    if (progress < 1) requestAnimationFrame(animate);
                });
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number').forEach(num => counterObserver.observe(num));

    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.closest('.faq-item');
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    function openModal() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('#openToolHero, #openToolSection, #openToolBand').forEach(btn => {
        if (btn) btn.addEventListener('click', openModal);
    });

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (cancelModalBtn) cancelModalBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            contactForm.style.display = 'none';
            formSuccess.classList.add('visible');
        });
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});
