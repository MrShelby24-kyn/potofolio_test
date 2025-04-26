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

// ====== Dark Mode Toggle ======
(function() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  if (!darkModeToggle) {
    console.warn('Bouton darkModeToggle introuvable dans le DOM.');
    return;
  } else {
    console.log('Bouton darkModeToggle trouvé, script actif.');
  }

  function setDarkMode(enabled) {
    if (enabled) {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }

  darkModeToggle.addEventListener('click', () => {
    const isDark = body.classList.contains('dark-mode');
    setDarkMode(!isDark);
    console.log('Dark mode toggled:', !isDark);
  });

  // Initialisation : appliquer le thème sauvegardé ou le thème système
  (function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    } else if (savedTheme === 'light') {
      setDarkMode(false);
    } else {
      // Si pas de préférence, suivre le système
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
    console.log('Thème initial appliqué.');
  })();
})();
