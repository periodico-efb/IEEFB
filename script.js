//firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBnGTVfJAhpYnjWVkXLJvWrIlXt_nsWwvw",
  authDomain: "click-eduardo.firebaseapp.com",
  projectId: "click-eduardo",
  storageBucket: "click-eduardo.firebasestorage.app",
  messagingSenderId: "416038064067",
  appId: "1:416038064067:web:f431ec2f73563fc1203776",
  measurementId: "G-36V6139BB1"
};

const app = initializeApp(firebaseConfig);

// Conectar a Firestore y Analytics
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Hacer accesible la base de datos desde otros scripts
window.firebaseDB = db;

// 📝 EJEMPLO de cómo guardar un artículo (solo si tienes un formulario o datos)
async function guardarArticulo(titulo, contenido, categoria) {
  try {
    await addDoc(collection(db, "articulos"), {
      titulo,
      contenido,
      categoria,
      fecha: new Date()
    });
    console.log("Artículo guardado exitosamente");
  } catch (e) {
    console.error("Error al guardar el artículo: ", e);
  }
}

document.getElementById("form-articulo").addEventListener("submit", async (e) => {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value;
  const contenido = document.getElementById("contenido").value;
  const categoria = document.getElementById("categoria").value;

  try {
    await addDoc(collection(db, "articulos"), {
      titulo,
      contenido,
      categoria,
      fecha: new Date()
    });
    alert(" Artículo publicado correctamente");
    document.getElementById("form-articulo").reset();
  } catch (error) {
    console.error("Error al publicar artículo:", error);
    alert(" Hubo un error. Intenta nuevamente.");
  }
});

async function cargarArticulos() {
  const querySnapshot = await getDocs(collection(db, "articulos"));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    mostrarArticulo(data);
  });
}

function mostrarArticulo({ titulo, contenido, categoria }) {
  const seccion = document.getElementById(categoria); // ejemplo: "destacados"
  if (!seccion) return;

  const div = document.createElement("div");
  div.className = "articulo";
  div.innerHTML = `<h3>${titulo}</h3><p>${contenido}</p>`;
  seccion.appendChild(div);
}


// actualizar directamente desde firebase 
window.addEventListener('DOMContentLoaded', async () => {
  const db = window.firebaseDB;
  const querySnapshot = await getDocs(collection(db, 'articulos'));

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const seccion = document.getElementById(data.categoria);
    if (seccion) {
      const div = document.createElement('div');
      div.classList.add('articulo');
      div.innerHTML = `<h3>${data.titulo}</h3><p>${data.contenido}</p>`;
      seccion.appendChild(div);
    }
  });
});



// Toggle menú hamburguesa
function toggleMenu() {
  const menu = document.getElementById('menu-lista');
  menu.classList.toggle('activa');
}

// fecha actual
document.addEventListener("DOMContentLoaded", (event) => {
    const fecha = document.getElementById("fecha");
    const now = new Date();
    const opciones = { day: 'numeric', month: 'long', year: 'numeric' };
    fecha.innerText = now.toLocaleDateString('es-ES', opciones);
  });

// Ver más sobre nosotros
function verMasSobreNosotros() {
  alert("información sobre nuestro equipo desarrollador, nuestra misión, visión");
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

  document.addEventListener("DOMContentLoaded", () => {
  cargarArticulos();
});
