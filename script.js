

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Button hover effects
function initButtonEffects() {
    const buttons = document.querySelectorAll('.cta-btn, .login-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });
}



// Parallax effect for background shapes
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('body::before, body::after');
        
        // Note: CSS pseudo-elements can't be directly manipulated with JavaScript
        // This is a placeholder for future implementation
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScrolling();
    initButtonEffects();
    initParallaxEffect();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});



// Add intersection observer for animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.hero-title, .hero-subtitle, .cta-buttons');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}); 

// Quiz functionality
document.addEventListener('DOMContentLoaded', function() {
    const quizCards = document.querySelectorAll('.quiz-card');
    const nextButtons = document.querySelectorAll('.btn-next');
    const backButtons = document.querySelectorAll('.btn-back');
    let currentQuestion = 1;

    // Next button functionality
    nextButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            if (currentQuestion < quizCards.length) {
                // Hide current card
                const currentCard = document.querySelector(`[data-question="${currentQuestion}"]`);
                currentCard.classList.remove('active');
                
                // Show next card
                currentQuestion++;
                const nextCard = document.querySelector(`[data-question="${currentQuestion}"]`);
                nextCard.classList.add('active');
                
                // Update back button state
                updateBackButton();
                
                // Update next button text for last question
                if (currentQuestion === quizCards.length) {
                    button.textContent = 'Finish';
                }
            } else {
                // Quiz completed
                alert('Quiz completed! Thank you for your responses.');
            }
        });
    });

    // Back button functionality
    backButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            if (currentQuestion > 1) {
                // Hide current card
                const currentCard = document.querySelector(`[data-question="${currentQuestion}"]`);
                currentCard.classList.remove('active');
                
                // Show previous card
                currentQuestion--;
                const prevCard = document.querySelector(`[data-question="${currentQuestion}"]`);
                prevCard.classList.add('active');
                
                // Update back button state
                updateBackButton();
                
                // Update next button text
                const nextButton = prevCard.querySelector('.btn-next');
                nextButton.textContent = 'Next';
            }
        });
    });

    // Update back button disabled state
    function updateBackButton() {
        const currentCard = document.querySelector(`[data-question="${currentQuestion}"]`);
        const backButton = currentCard.querySelector('.btn-back');
        
        if (currentQuestion === 1) {
            backButton.disabled = true;
        } else {
            backButton.disabled = false;
        }
    }

    // Initialize back button state
    updateBackButton();
});

// Topbar scroll animation
let lastScrollTop = 0;
const topbar = document.querySelector('.topbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down - hide topbar
        topbar.classList.add('hidden');
    } else if (scrollTop < lastScrollTop) {
        // Scrolling up - show topbar
        topbar.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop;
}); 