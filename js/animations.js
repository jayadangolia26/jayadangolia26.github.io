// Advanced animation controls
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS-like animations
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('[data-animate]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const animationType = element.getAttribute('data-animate');
                    const delay = element.getAttribute('data-delay') || 0;
                    
                    setTimeout(() => {
                        element.classList.add('animate-' + animationType);
                        element.classList.add('visible');
                    }, delay);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        animatedElements.forEach(el => observer.observe(el));
    }
    
    // Add data attributes to elements for animation
    function addAnimationAttributes() {
        // Skills cards
        document.querySelectorAll('.skill-card').forEach((el, index) => {
            el.setAttribute('data-animate', 'fadeInUp');
            el.setAttribute('data-delay', index * 200);
        });
        
        // Project cards
        document.querySelectorAll('.project-card').forEach((el, index) => {
            el.setAttribute('data-animate', 'fadeInUp');
            el.setAttribute('data-delay', index * 150);
        });
        
        // Achievement cards
        document.querySelectorAll('.achievement-card').forEach((el, index) => {
            el.setAttribute('data-animate', 'fadeInUp');
            el.setAttribute('data-delay', index * 100);
        });
        
        // Timeline items
        document.querySelectorAll('.timeline-item').forEach((el, index) => {
            el.setAttribute('data-animate', 'slideInLeft');
            el.setAttribute('data-delay', index * 200);
        });
    }
    
    // Particle effect for hero section
    function createParticles() {
        const hero = document.querySelector('.hero');
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        particlesContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            pointer-events: none;
            z-index: 1;
        `;
        
        // Create floating particles
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: var(--primary-color);
                border-radius: 50%;
                opacity: 0.3;
                animation: float 6s ease-in-out infinite;
                animation-delay: ${Math.random() * 6}s;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
            `;
            particlesContainer.appendChild(particle);
        }
        
        if (hero) {
            hero.appendChild(particlesContainer);
        }
    }
    
    // Typewriter effect
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Initialize all animations
    addAnimationAttributes();
    initScrollAnimations();
    createParticles();
    
    // Typewriter effect for hero subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        setTimeout(() => {
            typeWriter(heroSubtitle, originalText, 50);
        }, 2000);
    }
    
    // Mouse cursor effect
    function initCursorEffect() {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: var(--primary-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.5;
            transition: transform 0.1s ease;
            display: none;
        `;
        
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
            cursor.style.display = 'block';
        });
        
        document.addEventListener('mouseenter', () => {
            cursor.style.display = 'block';
        });
        
        document.addEventListener('mouseleave', () => {
            cursor.style.display = 'none';
        });
        
        // Scale cursor on hover over interactive elements
        document.querySelectorAll('a, button, .btn').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
            });
        });
    }
    
    // Initialize cursor effect only on desktop
    if (window.innerWidth > 768) {
        initCursorEffect();
    }
});
