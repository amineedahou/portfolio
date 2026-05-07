/**
 * AMINE DAHOU PORTFOLIO - FINAL OPTIMIZED SCRIPT
 * Functionalities: Preloader, Scroll Reveal, Smooth Scroll, Formspree AJAX
 */

// 1. PRELOADER LOGIC
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('fade-out');
        document.body.style.overflow = 'auto'; // Enable scrolling
    }, 1500); 
});

// 2. SCROLL REVEAL ANIMATION
const scenes = document.querySelectorAll('.scene, .hero');
const observerOptions = { 
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px" 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

scenes.forEach(scene => observer.observe(scene));

// 3. SMOOTH SCROLLING FOR NAV LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start' 
            });
        }
    });
});

// 4. FORMSPREE AJAX SUBMISSION & CUSTOM TOAST
const form = document.getElementById("my-form");
const toast = document.getElementById("custom-alert");

if (form) {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        
        const data = new FormData(event.target);
        
        // Fetch submission to Formspree
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                // SUCCESS: Show Stylish Red Toast
                toast.classList.add('active');
                form.reset(); 
                
                // Auto-hide toast after 3 seconds
                setTimeout(() => {
                    toast.classList.remove('active');
                }, 3000);
            } else {
                alert("Oops! There was a problem submitting your form.");
            }
        }).catch(error => {
            alert("Oops! Network error. Please try again.");
        });
    });
}

console.log("Amine Dahou Portfolio: Fully Operational 🚀");