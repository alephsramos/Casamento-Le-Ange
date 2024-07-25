function toggleContent(pacoteId) {
    const content = document.querySelector(`#${pacoteId} .pacote-content`);
    const isVisible = window.getComputedStyle(content).display !== 'none';
    content.style.display = isVisible ? 'none' : 'flex';
}


function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    if (event.target.className === "modal") {
        closeModal(event.target.id);
    }
}

document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.animate');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(element => {
    observer.observe(element);
  });
});