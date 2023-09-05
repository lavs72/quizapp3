function openSection(sectionNumber) {
    // Hide all sections
    const sections = document.querySelectorAll('.quiz-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(`section${sectionNumber}`);
    selectedSection.style.display = 'block';
}
