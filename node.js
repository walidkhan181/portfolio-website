// Smooth Scroll to sections when navigation links are clicked
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = e.target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60, 
            behavior: 'smooth'
        });
    });
});


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) { 
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Download CV Button -
document.querySelectorAll('.btn-primary').forEach(button => {
    if (button.innerHTML.includes('Download CV')) {
        button.addEventListener('click', () => {
            alert('CV download initiated!');
        });
    }
});

// Handle Contact Form Submission (Simple form validation)
const contactForm = document.querySelector('footer form');
const contactMessageInput = contactForm.querySelector('textarea');
const contactNameInput = contactForm.querySelector('input[type="text"]');
const contactEmailInput = contactForm.querySelector('input[type="email"]');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactNameInput.value.trim();
    const email = contactEmailInput.value.trim();
    const message = contactMessageInput.value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
    } else {
      
        alert('Thank you for contacting me! I will get back to you soon.');

        contactForm.reset();
    }
});


function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); 
        }
    });
};

const animateElements = document.querySelectorAll('.section-title, .section-description, .skill, .experience');
const observer = new IntersectionObserver(observerCallback, observerOptions);

animateElements.forEach(element => {
    observer.observe(element);
});

const backToTopButton = document.createElement('button');
backToTopButton.classList.add('back-to-top');
backToTopButton.innerHTML = '↑';
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
