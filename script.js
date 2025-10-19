 document.addEventListener('DOMContentLoaded', function() {
            // Header scroll effect
            const header = document.getElementById('header');
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            
            // Mobile menu toggle
            const mobileToggle = document.querySelector('.mobile-toggle');
            const navLinks = document.querySelector('.nav-links');
            
            mobileToggle.addEventListener('click', function() {
                mobileToggle.classList.toggle('active');
                navLinks.classList.toggle('active');
            });
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    if (this.getAttribute('href') === '#') return;
                    
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        // Close mobile menu if open
                        mobileToggle.classList.remove('active');
                        navLinks.classList.remove('active');
                        
                        window.scrollTo({
                            top: target.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Newsletter form submission
            const newsletterForm = document.querySelector('.newsletter-form');
            
            if (newsletterForm) {
                newsletterForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const email = this.querySelector('input[type="email"]').value;
                    
                    // Simulate form submission
                    this.querySelector('button').textContent = 'Subscribing...';
                    
                    setTimeout(() => {
                        alert('Thank you for subscribing to our newsletter!');
                        this.reset();
                        this.querySelector('button').textContent = 'Subscribe';
                    }, 1500);
                });
            }
            
            // Product card hover effect for touch devices
            const productCards = document.querySelectorAll('.product-card');
            
            productCards.forEach(card => {
                card.addEventListener('touchstart', function() {
                    this.classList.add('hover');
                }, {passive: true});
                
                card.addEventListener('touchend', function() {
                    this.classList.remove('hover');
                }, {passive: true});
            });
            
            // Animation on scroll
            const animateOnScroll = function() {
                const elements = document.querySelectorAll('.product-card, .feature-item, .about-img');
                
                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if (elementPosition < screenPosition) {
                        element.style.opacity = 1;
                        element.style.transform = 'translateY(0)';
                    }
                });
            };
            
            // Set initial state for animated elements
            document.querySelectorAll('.product-card, .feature-item, .about-img').forEach(element => {
                element.style.opacity = 0;
                element.style.transform = 'translateY(50px)';
                element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
            
            window.addEventListener('scroll', animateOnScroll);
            // Trigger once on load
            animateOnScroll();
        });