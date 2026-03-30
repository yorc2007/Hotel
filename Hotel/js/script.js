// Efecto de cambio de color en el Header al hacer Scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Selector de menú móvil (opcional si añades el icono de barras)
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if(mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Suavizado de scroll para los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
    const slider = document.getElementById('services-slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Cuánto se moverá el carrusel al hacer clic (aprox. el ancho de una card + gap)
const scrollAmount = 300; 

nextBtn.addEventListener('click', () => {
    slider.scrollLeft += scrollAmount;
});

prevBtn.addEventListener('click', () => {
    slider.scrollLeft -= scrollAmount;
});
});