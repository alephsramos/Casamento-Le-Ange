function toggleContent(pacoteId) {
    const content = document.querySelector(`#${pacoteId} .pacote-content`);
    const isVisible = window.getComputedStyle(content).display !== 'none';
    content.style.display = isVisible ? 'none' : 'flex';
}


