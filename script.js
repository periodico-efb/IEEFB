// script.js actualizado

// Toggle menú hamburguesa
function toggleMenu() {
  const menu = document.getElementById('menu-lista');
  menu.classList.toggle('activa');
}

// Ver más sobre nosotros
function verMasSobreNosotros() {
  alert("Aquí podrás mostrar más información sobre el equipo del periódico, su misión, visión, etc.");
}

// Animación al hacer scroll hacia arriba
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const currentScroll = window.scrollY;
  if (currentScroll < lastScrollTop) {
    header.style.transform = "translateY(0)";
  } else {
    header.style.transform = "translateY(-100%)";
  }
  lastScrollTop = currentScroll;
});

// Contador real de visitas con CounterAPI
fetch("https://counterapi.com/api/hit/periodico2025/visitas")
  .then(response => response.json())
  .then(data => {
    const contador = document.getElementById("contador-visitas");
    if (contador) contador.textContent = `Visitas únicas: ${data.value}`;
  });
