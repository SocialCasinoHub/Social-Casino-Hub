// script.js

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Simple form submission handler (demo - logs to console)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted:', new FormData(this));
            alert('Thank you for your message! (This is a demo and your message was not sent).');
            this.reset();
        });
    }

    // Age Verification Modal Logic
    const ageModal = document.getElementById('age-verification-modal');
    const confirmYesBtn = document.getElementById('confirm-age-yes');
    const confirmNoBtn = document.getElementById('confirm-age-no');

    // Check if age is already verified in this session
    if (sessionStorage.getItem('ageVerified') !== 'true') {
        if(ageModal) {
            ageModal.classList.add('active');
        }
    }

    if (confirmYesBtn) {
        confirmYesBtn.addEventListener('click', () => {
            sessionStorage.setItem('ageVerified', 'true');
            ageModal.classList.remove('active');
        });
    }
    
    if (confirmNoBtn) {
        confirmNoBtn.addEventListener('click', () => {
            document.body.innerHTML = '<div style="color: white; text-align: center; padding: 50px; font-family: sans-serif;"><h1>Access Denied</h1><p>You must be 18 or older to view this content.</p></div>';
        });
    }
});