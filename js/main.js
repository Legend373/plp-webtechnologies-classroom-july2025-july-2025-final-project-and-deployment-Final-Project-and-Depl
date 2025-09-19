// DOM Elements
const header = document.getElementById('header');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const projectCards = document.querySelectorAll('.project-card');
const aboutImage = document.querySelector('.about-image');
const aboutText = document.querySelector('.about-text');
const aboutSkills = document.querySelectorAll('.skill');
const aboutBtn = document.querySelector('.about-text .btn');
const contactInfo = document.querySelector('.contact-info');
const contactForm = document.querySelector('.contact-form');
const contactItems = document.querySelectorAll('.contact-item');
const formGroups = document.querySelectorAll('.form-group');
const socialLinks = document.querySelectorAll('.social-link');
const sectionTitles = document.querySelectorAll('.section-title');
const contactFormElement = document.getElementById('contactForm');
const scrollIndicator = document.querySelector('.scroll-indicator');

// Scroll to next section when indicator is clicked
scrollIndicator.addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Header scroll effect
window.addEventListener('scroll', utils.debounce(() => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Section animations
    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect();
        if (sectionPosition.top < window.innerHeight - 100 && sectionPosition.bottom >= 0) {
            section.classList.add('visible');

            // Animate section title
            const sectionTitle = section.querySelector('.section-title');
            if (sectionTitle) sectionTitle.classList.add('visible');

            // Animate buttons in section
            const buttons = section.querySelectorAll('.btn');
            buttons.forEach(btn => btn.classList.add('visible'));
        }
    });

    // About section animations
    const aboutSection = document.getElementById('about');
    const aboutPosition = aboutSection.getBoundingClientRect();
    if (aboutPosition.top < window.innerHeight - 100 && aboutPosition.bottom >= 0) {
        aboutImage.classList.add('visible');
        aboutText.classList.add('visible');

        // Animate skills with delay
        aboutSkills.forEach((skill, index) => {
            setTimeout(() => {
                skill.classList.add('visible');
            }, index * 100);
        });

        // Animate button
        setTimeout(() => {
            aboutBtn.classList.add('visible');
        }, aboutSkills.length * 100);
    }

    // Project card animations
    projectCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect();
        if (cardPosition.top < window.innerHeight - 100 && cardPosition.bottom >= 0) {
            card.classList.add('visible');
        }
    });

    // Contact section animations
    const contactSection = document.getElementById('contact');
    const contactPosition = contactSection.getBoundingClientRect();
    if (contactPosition.top < window.innerHeight - 100 && contactPosition.bottom >= 0) {
        contactInfo.classList.add('visible');
        contactForm.classList.add('visible');

        // Animate contact items with delay
        contactItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 200);
        });

        // Animate form groups with delay
        formGroups.forEach((group, index) => {
            setTimeout(() => {
                group.classList.add('visible');
            }, index * 200);
        });
    }

    // Footer animations
    const footer = document.querySelector('footer');
    const footerPosition = footer.getBoundingClientRect();
    if (footerPosition.top < window.innerHeight - 100 && footerPosition.bottom >= 0) {
        socialLinks.forEach((link, index) => {
            setTimeout(() => {
                link.classList.add('visible');
            }, index * 200);
        });
    }
}, 10));

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.innerHTML = navMenu.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';

        // Update active link
        navLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');

        // Scroll to section
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Form validation
contactFormElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Basic validation
    let isValid = true;

    if (!name) {
        isValid = false;
        document.getElementById('name').style.borderColor = 'red';
    } else {
        document.getElementById('name').style.borderColor = '';
    }

    if (!email || !utils.validateEmail(email)) {
        isValid = false;
        document.getElementById('email').style.borderColor = 'red';
    } else {
        document.getElementById('email').style.borderColor = '';
    }

    if (!subject) {
        isValid = false;
        document.getElementById('subject').style.borderColor = 'red';
    } else {
        document.getElementById('subject').style.borderColor = '';
    }

    if (!message) {
        isValid = false;
        document.getElementById('message').style.borderColor = 'red';
    } else {
        document.getElementById('message').style.borderColor = '';
    }

    if (isValid) {
        // Here you would normally send the form data to a server
        alert('Thank you for your message! I will get back to you soon.');
        contactFormElement.reset();
    } else {
        alert('Please fill in all fields correctly.');
    }
});

// Initialize animations on page load
window.addEventListener('DOMContentLoaded', () => {
    // Animate hero elements with a delay
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroCta = document.querySelector('.hero-cta');

    setTimeout(() => {
        heroTitle.style.animation = 'slideFromTop 1s ease forwards';
    }, 300);

    setTimeout(() => {
        heroSubtitle.style.animation = 'slideFromBottom 1s ease forwards';
    }, 600);

    setTimeout(() => {
        heroCta.style.animation = 'fadeIn 1s ease forwards';
    }, 900);

    // Animate header
    header.classList.add('scrolled');

    // Make sure hero section is visible on load
    document.getElementById('home').classList.add('visible');
});