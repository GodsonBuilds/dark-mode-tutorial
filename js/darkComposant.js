document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');
    const userTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Fonction pour gérer l'affichage des icônes
    const toggleIcons = (isDark) => {
        iconSun.classList.toggle('hidden', !isDark);
        iconMoon.classList.toggle('hidden', isDark);
    };

    // Fonction pour appliquer le thème
    const applyTheme = (isDark) => {
        document.documentElement.classList.toggle('dark', isDark);
        toggleIcons(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };

    // Initialisation du thème au chargement
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
        applyTheme(true);
    } else {
        applyTheme(false);
    }

    // Gestion du clic
    themeToggleBtn.addEventListener('click', () => {
        const isDark = !document.documentElement.classList.contains('dark');
        applyTheme(isDark);
    });
});
