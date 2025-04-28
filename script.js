// Apparition animée des sections au scroll (haut -> bas et bas -> haut)
function revealSections() {
    const sections = document.querySelectorAll('.section');
    // Pour que l'animation s'applique toujours au chargement, on met le seuil à la hauteur totale de la fenêtre
    const triggerBottom = window.innerHeight * 1.0;
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
    animateCompetences();
}
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Animation personnalisée pour la section compétences
function animateCompetences() {
    const competenceSection = document.querySelector('.competences-section');
    if (!competenceSection) return;
    const competences = competenceSection.querySelectorAll('.competence');
    if (competenceSection.classList.contains('visible')) {
        // Ajoute la classe visible pour déclencher l'animation CSS
        competences.forEach((el, i) => {
            // Rien à faire ici, l'animation CSS gère tout via .visible
        });
    } else {
        // Retire l'animation si la section n'est plus visible
        competences.forEach(el => {
            el.style.animation = 'none';
            // Force le repaint pour réinitialiser l'animation si besoin
            void el.offsetWidth;
            el.style.animation = '';
        });
    }
}

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
