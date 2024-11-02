function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });

    section.classList.add('highlight');

    setTimeout(() => {
        section.classList.remove('highlight');
    }, 1000); 
}

document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.dropdown');
    const menuIcon = document.querySelector('.menu-icon');

    // Close the dropdown and reset the hamburger icon if clicking outside
    if (!dropdown.contains(event.target) && !event.target.closest('.menu-icon')) {
        dropdown.classList.remove('show');
        menuIcon.classList.remove('open');
    }
});

// Show loading animation on page load and before navigation
window.addEventListener('beforeunload', function() {
    document.getElementById('loadingOverlay').classList.remove('hidden');
});

// Hide loading animation after the page has fully loaded
window.addEventListener('load', function() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.classList.add('hidden');
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
        const target = event.target.getAttribute('href');
        if (target && !target.startsWith('http')) { // For internal links only
            document.getElementById('loadingOverlay').classList.remove('hidden');
        }
    });
});

