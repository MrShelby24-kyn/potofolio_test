// Apparition animée des sections au scroll (haut -> bas et bas -> haut)
function revealSections() {
    const sections = document.querySelectorAll('.section');
    const triggerBottom = window.innerHeight * 0.88;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        // Affiche si dans la fenêtre, sinon retire l'animation
        if (sectionTop < triggerBottom && sectionBottom > 80) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Apparition animée des cartes projets (haut -> bas et bas -> haut)
function revealProjets() {
    const projets = document.querySelectorAll('.carte-projet');
    const triggerBottom = window.innerHeight * 0.92;
    projets.forEach((carte, i) => {
        const top = carte.getBoundingClientRect().top;
        const bottom = carte.getBoundingClientRect().bottom;
        if (top < triggerBottom && bottom > 80) {
            setTimeout(() => carte.classList.add('visible'), i * 120);
        } else {
            carte.classList.remove('visible');
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
