document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const observerOptions = {
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

    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });

    // Dynamic Glitch Text Effect (Optional enhanced randomness)
    const glitchText = document.querySelector('.glitch');
    if(glitchText) {
        setInterval(() => {
            const r = Math.random();
            if(r > 0.9) {
                glitchText.style.textShadow = `${Math.random() * 10 - 5}px 0 red, ${Math.random() * 10 - 5}px 0 blue`;
                setTimeout(() => {
                    glitchText.style.textShadow = 'none';
                }, 100);
            }
        }, 2000);
    }
});
