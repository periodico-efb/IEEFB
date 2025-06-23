// script.js

document.getElementById("articleForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const sectionId = document.getElementById("section").value;

  const section = document.getElementById(sectionId);

  const article = document.createElement("article");
  const h3 = document.createElement("h3");
  h3.textContent = title;

  const p = document.createElement("p");
  p.textContent = content;

  article.appendChild(h3);
  article.appendChild(p);

  section.appendChild(article);

  // Limpiar formulario
  document.getElementById("articleForm").reset();
});