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


document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const whatsapp = document.getElementById("whatsapp").value;
      const unidades = Array.from(document.querySelectorAll("input[name='unidade']:checked")).map(checkbox => checkbox.value).join(", ");
      const eventos = Array.from(document.querySelectorAll("input[name='evento']:checked")).map(checkbox => checkbox.value).join(", ");
      const eventDate = document.getElementById("event-date").value;

      fetch("https://script.google.com/macros/s/AKfycbwJ9VITwkRr7z4G7HhEUEHXaFOEaxfMPHT32IZ8RwoP4V2frc2Eua8C_p1oT5O5DkeUfg/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `name=${name}&whatsapp=${whatsapp}&unidade=${unidades}&evento=${eventos}&eventDate=${eventDate}`
      })
      .then(response => response.json())
      .then(data => {
        if (data.result === "success") {
          alert("Enviado com sucesso!");
          form.reset();
        } else {
          alert("Falha no envio, tente novamente!");
        }
      })
      .catch(error => console.error("Erro:", error));
    });
  });