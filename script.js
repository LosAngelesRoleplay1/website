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

