// Enhanced smooth scrolling functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll polyfill for older browsers
    function smoothScrollTo(element, duration = 1000) {
        const targetPosition = element.offsetTop - 70; // Account for navbar height
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const startTime = Date.now();

        function scrollAnimation() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-in-out)
            const easeInOut = progress < 0.5 
                ? 2 * progress * progress 
                : -1 + (4 - 2 * progress) * progress;
            
            window.scrollTo(0, startPosition + distance * easeInOut);
            
            if (progress < 1) {
                requestAnimationFrame(scrollAnimation);
            }
        }
        
        requestAnimationFrame(scrollAnimation);
    }

    // Override default smooth scrolling for better control
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                smoothScrollTo(target, 800);
            }
        });
    });
});
