function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });

    // Highlight the section
    section.classList.add('highlight');

    // Remove highlight after 1 second
    setTimeout(() => {
        section.classList.remove('highlight');
    }, 1000); // Adjusted to 1 second
}

