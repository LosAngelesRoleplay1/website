function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });

    section.classList.add('highlight');

    setTimeout(() => {
        section.classList.remove('highlight');
    }, 1000); 
}

