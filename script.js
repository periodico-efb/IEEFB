/* ================================
    CLICK-EDUARDO - script.js
    ================================ */

const ARTICLES = [
    { id:'art-001', title:'Inauguración del nuevo laboratorio de ciencias', category:'institucion', excerpt:'La comunidad educativa participó en la apertura del nuevo laboratorio con equipos modernos y proyectos estudiantiles destacados. Una jornada de aprendizaje.', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit animi id est laborum.', author:'Equipo Click-Eduardo', date:'2025-09-15', image:'https://picsum.photos/seed/lab/800/600', score: 5, tags:['recientes','destacados', 'institucion'] },
    { id:'art-002', title:'Torneo Intercolegial: crónica y resultados', category:'deporte', excerpt:'Resumen del torneo, goles, momentos destacados y la entrega de trofeos al equipo campeón.', content:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.', author:'Redacción Deportes', date:'2025-09-10', image:'https://picsum.photos/seed/deporte/800/600', score: 4.8, tags:['recientes','deporte', 'calificados'] },
    { id:'art-003', title:'Cinco hábitos para una vida estudiantil saludable', category:'salud', excerpt:'Consejos prácticos sobre alimentación, sueño y manejo del estrés para estudiantes en época de exámenes.', content:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.', author:'Equipo Salud', date:'2025-08-22', image:'https://picsum.photos/seed/salud/800/600', score: 4.5, tags:['recientes','salud'] },
    { id:'art-004', title:'Obra teatral del taller de arte: reseña', category:'cultura', excerpt:'Una reseña sobre la función que emocionó a la comunidad y los aprendizajes del semillero de teatro.', content:'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.', author:'Cultura', date:'2025-06-18', image:'https://picsum.photos/seed/cultura/800/600', score: 4.2, tags:['cultura'] },
    { id:'art-005', title:'Feria de ciencias: proyectos destacados', category:'eventos', excerpt:'Proyectos del grado 10 y 11 que mostraron creatividad y pensamiento crítico en experimentos y prototipos.', content:'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', author:'Eventos', date:'2025-05-30', image:'https://picsum.photos/seed/eventos/800/600', score: 4.9, tags:['destacados', 'calificados'] },
    { id:'art-006', title:'Campaña solidaria: recolecta de útiles escolares', category:'social', excerpt:'Acción solidaria organizada por estudiantes para beneficiar a familias de la comunidad.', content:'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.', author:'Acción Social', date:'2025-04-10', image:'https://picsum.photos/seed/social/800/600', score: 4.6, tags:['social'] },
    { id:'art-007', title:'Notas curiosas: Meme de la semana y pasatiempo', category:'notas-curiosas', excerpt:'Un espacio para reír y relajarse entre clases: memes, pasatiempos y trivias cortas para jugar con amigos.', content:'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.', author:'Equipo Rinconcito', date:'2025-09-01', image:'https://picsum.photos/seed/rinconcito/800/600', score: 4.1, tags:['recientes','notas-curiosas'] },
    { id:'art-008', title:'Iniciativa de reciclaje en el campus', category:'ecologia', excerpt:'Estudiantes lideran una campaña para reducir el uso de plásticos y fomentar el reciclaje en las instalaciones escolares.', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', author:'Equipo Ecología', date:'2025-10-01', image:'https://picsum.photos/seed/reciclaje/800/600', score: 4.7, tags:['recientes', 'institucion'] },
    { id:'art-009', title:'Taller de robótica: creando el futuro', category:'tecnologia', excerpt:'Un vistazo al taller de robótica, donde los estudiantes diseñan, construyen y programan sus propios robots.', content:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.', author:'Redacción Tecnología', date:'2025-09-25', image:'https://picsum.photos/seed/robotica/800/600', score: 4.9, tags:['destacados','calificados'] },
    { id:'art-010', title:'Visita al Museo de Historia Natural', category:'paseo', excerpt:'Una crónica de la emocionante excursión al museo, donde los alumnos aprendieron sobre la evolución y la biodiversidad.', content:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.', author:'Guía de Paseos', date:'2025-08-15', image:'https://picsum.photos/seed/museo/800/600', score: 4.3, tags:['cultura'] },
    { id:'art-011', title:'Celebración del Día del Maestro', category:'institucion', excerpt:'Un emotivo homenaje a los profesores de la escuela, con discursos de los estudiantes y sorpresas especiales.', content:'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.', author:'Comité de Eventos', date:'2025-05-15', image:'https://picsum.photos/seed/maestro/800/600', score: 4.8, tags:['destacados','institucion'] },
    { id:'art-012', title:'Clases de natación para principiantes', category:'deporte', excerpt:'Se abren las inscripciones para el nuevo curso de natación, una oportunidad para aprender y mejorar habilidades acuáticas.', content:'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', author:'Redacción Deportes', date:'2025-04-20', image:'https://picsum.photos/seed/natacion/800/600', score: 4.2, tags:['deporte'] },
    { id:'art-013', title:'Charla sobre ciberseguridad para padres', category:'salud', excerpt:'Un experto en seguridad informática compartió consejos vitales para proteger a los niños en línea.', content:'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', author:'Equipo Salud', date:'2025-03-10', image:'https://picsum.photos/seed/ciberseguridad/800/600', score: 4.5, tags:['salud'] },
    { id:'art-014', title:'Festival de música y talentos', category:'cultura', excerpt:'Un resumen del festival anual, que contó con actuaciones de estudiantes de todos los grados.', content:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.', author:'Cultura', date:'2025-02-28', image:'https://picsum.photos/seed/festival/800/600', score: 4.7, tags:['cultura'] },
    { id:'art-015', title:'Resultados de la Olimpiada de Matemáticas', category:'eventos', excerpt:'Se anuncian los ganadores y participantes destacados de la competencia académica de este año.', content:'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.', author:'Eventos', date:'2025-01-20', image:'https://picsum.photos/seed/olimpiada/800/600', score: 4.9, tags:['destacados','calificados'] },
    { id:'art-016', title:'Donación de alimentos para el banco de comidas local', category:'social', excerpt:'La comunidad escolar se unió para recolectar alimentos y ayudar a quienes más lo necesitan.', content:'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', author:'Acción Social', date:'2024-12-05', image:'https://picsum.photos/seed/donacion/800/600', score: 4.6, tags:['social'] },
    { id:'art-017', title:'Consejos para estudiar y relajarse', category:'notas-curiosas', excerpt:'Técnicas de estudio efectivas y trucos para manejar el estrés durante la temporada de exámenes.', content:'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', author:'Equipo Rinconcito', date:'2024-11-18', image:'https://picsum.photos/seed/estudio/800/600', score: 4.1, tags:['notas-curiosas'] },
    { id:'art-018', title:'Conferencia sobre el futuro de la energía', category:'ciencia', excerpt:'Un experto en energías renovables visitó la escuela para hablar de nuevas tecnologías y cómo impactarán nuestro futuro.', content:'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.', author:'Redacción Ciencia', date:'2024-10-30', image:'https://picsum.photos/seed/energia/800/600', score: 4.8, tags:['institucion'] },
    { id:'art-019', title:'Exposición de arte de los más pequeños', category:'cultura', excerpt:'Las obras de los estudiantes de preescolar y primaria se exhibieron en una emotiva muestra para padres y maestros.', content:'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', author:'Cultura', date:'2024-09-22', image:'https://picsum.photos/seed/arte/800/600', score: 4.5, tags:['cultura'] },
    { id:'art-020', title:'Campeonato de baloncesto: la gran final', category:'deporte', excerpt:'El equipo de la escuela se coronó campeón en un emocionante partido contra sus rivales de siempre.', content:'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', author:'Redacción Deportes', date:'2024-08-10', image:'https://picsum.photos/seed/baloncesto/800/600', score: 4.9, tags:['destacados','deporte'] }
];

/* ---------------------------
    Utility: DOM helpers
    --------------------------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

/* ---------------------------
    Init
    --------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();
    handleVisits();
    renderCarousels();
    setupMainCarousel();
    setupHamburger();
    setupModal();
    setupLazy();
    setupLikes();
});

function handleVisits() {
    const visitsKey = 'clickedu-visits';
    let visits = parseInt(localStorage.getItem(visitsKey) || '0', 10);
    visits++;
    localStorage.setItem(visitsKey, String(visits));
    const visitsEl = document.getElementById('visits-count');
    if (visitsEl) visitsEl.textContent = visits;
}

/* ---------------------------
    Render carousels: create cards per section
    --------------------------- */
function renderCarousels() {
    const carouselEls = document.querySelectorAll('.carousel');
    carouselEls.forEach(car => {
        const section = car.dataset.section;
        const track = car.querySelector('.carousel-track');
        if (!track) return;

        let items;
        if (section === 'all-articles') {
            items = ARTICLES.sort((a,b) => new Date(b.date) - new Date(a.date));
        } else if (section === 'calificados') {
            items = ARTICLES.filter(a => a.tags.includes('calificados')).sort((a,b) => b.score - a.score);
        } else {
            items = ARTICLES.filter(a => a.tags.includes(section));
        }
        
        if (items.length === 0) {
            car.closest('.section-row')?.remove();
            return;
        }

        items.forEach(a => {
            const card = createCard(a, section === 'all-articles');
            track.appendChild(card);
        });
    });
}

/* ---------------------------
    Create card element
    --------------------------- */
function createCard(a, isHeroCard = false) {
    const el = document.createElement('article');
    el.className = isHeroCard ? 'hero-card' : 'card';
    el.dataset.id = a.id;

    el.innerHTML = `
        <img data-src="${a.image}" alt="${escapeHtml(a.title)}" class="lazy">
        <div class="card-body">
            ${isHeroCard ? `<small class="category">${escapeHtml(a.category)}</small>` : ''}
            <h3>${escapeHtml(a.title)}</h3>
            <p>${isHeroCard ? '' : escapeHtml(a.excerpt)}</p>
            <div class="card-meta">
                <small class="meta">${escapeHtml(a.author)} • ${a.date}</small>
                ${isHeroCard ? '' : `
                <button class="like-btn" data-article-id="${a.id}" aria-label="Me gusta">
                <span>❤</span>
                </button>`}
            </div>
        </div>
    `;

    // Evita que el modal se abra si el clic fue en el botón de "Me gusta"
    el.addEventListener('click', (e) => {
        if (e.target.closest('.like-btn')) {
            e.stopPropagation();
            return;
        }
        openArticleModal(a.id);
    });

    let lastClick = 0;
    el.addEventListener('dblclick', () => {
        const now = Date.now();
        if (now - lastClick < 500) {
            const likeBtn = el.querySelector('.like-btn');
            if (likeBtn && !likeBtn.classList.contains('liked')) {
                likeBtn.click();
            }
        }
        lastClick = now;
    });

    return el;
}

/* ---------------------------
    Main carousel behavior
    --------------------------- */
function setupMainCarousel() {
    const carousel = $('.hero-carousel');
    if (!carousel) return;

    const track = carousel.querySelector('.carousel-track');
    const allArticles = ARTICLES.sort(() => 0.5 - Math.random());
    const heroArticles = allArticles.slice(0, 5);
    let currentIndex = 0;
    
    if (heroArticles.length === 0) return;

    heroArticles.forEach(a => {
        const card = createCard(a, true);
        track.appendChild(card);
    });

    const totalCards = heroArticles.length;
    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalCards;
        // Se obtiene el ancho de la tarjeta y el espacio entre tarjetas para un cálculo más preciso.
        const cardWidth = track.firstElementChild.offsetWidth;
        const gap = parseFloat(window.getComputedStyle(track).gap);
        track.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
    }, 5000); // Cambia de slide cada 5 segundos
}

/* ---------------------------
    Like handling (solo corazón, con animación y persistencia)
    --------------------------- */
function setupLikes() {
    const likesStoreKey = 'clickedu-likes';
    const likes = JSON.parse(localStorage.getItem(likesStoreKey) || '{}');

    $$('.like-btn').forEach(btn => {
        const articleId = btn.dataset.articleId;

        // Restaurar estado guardado
        if (likes[articleId]) {
            btn.classList.add('liked');
        }

        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // evita abrir el modal al dar clic

            const isLiked = btn.classList.toggle('liked');
            likes[articleId] = isLiked;
            localStorage.setItem(likesStoreKey, JSON.stringify(likes));

            // Reinicia animación si ya estaba likeado
            if (isLiked) {
                btn.classList.remove('liked');
                void btn.offsetWidth; // forzar reflow
                btn.classList.add('liked');
            }
        });
    });
}

/* ---------------------------
    Modal behavior and open article
    --------------------------- */
function setupModal() {
    const modal = $('#modal');
    const close = $('#modalClose');
    close?.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

function openArticleModal(id) {
    const a = ARTICLES.find(x => x.id === id);
    if (!a) return;
    const modal = $('#modal');
    const target = $('#modalContent');

    target.innerHTML = `
        <h2 style="margin-top:0; color:var(--primary-color);">${escapeHtml(a.title)}</h2>
        <p style="color:#6b7280;margin-bottom:8px">${escapeHtml(a.author)} • ${a.date}</p>
        <img src="${a.image}" alt="${escapeHtml(a.title)}" style="width:100%;height:auto;border-radius:8px;margin-bottom:12px">
        <div><p>${escapeHtml(a.content)}</p></div>
        <div style="margin-top:12px;display:flex;gap:8px;align-items:center">
            <button class="btn primary" id="shareBtn">Compartir</button>
            <button class="btn outline" id="downloadPdf">Descargar PDF</button>
        </div>
    `;

    setTimeout(() => {
        const shareBtn = $('#shareBtn');
        shareBtn?.addEventListener('click', () => {
            if (navigator.share) {
                navigator.share({ title: a.title, text: a.excerpt, url: location.href });
            } else {
                alert('Compartir no soportado en este navegador');
            }
        });
        $('#downloadPdf')?.addEventListener('click', () => downloadPDF(a));
    }, 50);

    modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
    const modal = $('#modal');
    modal.setAttribute('aria-hidden', 'true');
}

function downloadPDF(article) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.setFontSize(22);
    doc.text(article.title, 10, 20);
    
    doc.setFontSize(12);
    doc.text(`Por: ${article.author} • ${article.date}`, 10, 30);
    
    const splitText = doc.splitTextToSize(article.content, 180);
    doc.text(splitText, 10, 40);
    
    doc.save(`${article.title}.pdf`);
}

/* ---------------------------
    Hamburger (mobile) behavior
    --------------------------- */
function setupHamburger() {
    const burger = $('#hamburger');
    const nav = $('.nav');

    if (!burger || !nav) return;

    burger.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('show');
        burger.classList.toggle('active', isOpen);
        burger.setAttribute('aria-expanded', String(isOpen));
    });

    // Cierra el menú de hamburguesa cuando se hace clic en un enlace de navegación
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        if (window.innerWidth < 769) { // Se cierra solo en dispositivos móviles
            nav.classList.remove('show');
            burger.classList.remove('active');
            burger.setAttribute('aria-expanded', 'false');
        }
    }));
}

/* ---------------------------
    Lazy load images (IntersectionObserver)
    --------------------------- */
function setupLazy() {
    const lazyImgs = $$('img.lazy');
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        }, { rootMargin: '200px' });
        lazyImgs.forEach(img => io.observe(img));
    } else {
        lazyImgs.forEach(img => img.src = img.dataset.src);
    }
}

/* ---------------------------
    Helpers
    --------------------------- */
function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]));
}