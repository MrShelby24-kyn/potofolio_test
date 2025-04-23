// Apparition des sections au scroll
function revealSections() {
    const sections = document.querySelectorAll('.section');
    const triggerBottom = window.innerHeight * 0.88;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom) {
            section.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Apparition animée des cartes projets
function revealProjets() {
    const projets = document.querySelectorAll('.carte-projet');
    const triggerBottom = window.innerHeight * 0.92;
    projets.forEach((carte, i) => {
        const top = carte.getBoundingClientRect().top;
        if(top < triggerBottom) {
            setTimeout(() => carte.classList.add('visible'), i * 120);
        }
    });
}
window.addEventListener('scroll', revealProjets);
window.addEventListener('load', revealProjets);

// Animation du formulaire (message envoyé)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-contact');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            form.reset();
            form.querySelector('button').textContent = 'Merci !';
            setTimeout(() => {
                form.querySelector('button').textContent = 'Envoyer';
            }, 1800);
        });
    }
});
