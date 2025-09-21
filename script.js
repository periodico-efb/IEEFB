/* ==========================================================================
   Project: Clic-Eduardo
   Description: Core JavaScript functionality for the digital newspaper.
   Author: Refactored by Gemini AI
   ========================================================================== */

/**
 * Módulo de Almacenamiento de Datos.
 * Gestiona el acceso a los datos estáticos y del localStorage.
 */
const Data = (() => {
    // Definición de los artículos, simulando una base de datos.
    const ARTICLES = [
        { id: 'art-001', title: 'Inauguración del nuevo laboratorio de ciencias', category: 'institucion', excerpt: 'La comunidad educativa participó en la apertura del nuevo laboratorio con equipos modernos y proyectos estudiantiles destacados. Una jornada de aprendizaje.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit animi id est laborum.', author: 'Equipo Click-Eduardo', date: '2025-09-15', image: 'https://picsum.photos/seed/lab/800/600', score: 5, tags: ['recientes', 'destacados', 'institucion'] },
        { id: 'art-002', title: 'Torneo Intercolegial: crónica y resultados', category: 'deporte', excerpt: 'Resumen del torneo, goles, momentos destacados y la entrega de trofeos al equipo campeón.', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.', author: 'Redacción Deportes', date: '2025-09-10', image: 'https://picsum.photos/seed/deporte/800/600', score: 4.8, tags: ['recientes', 'deporte', 'calificados'] },
        { id: 'art-003', title: 'Cinco hábitos para una vida estudiantil saludable', category: 'salud', excerpt: 'Consejos prácticos sobre alimentación, sueño y manejo del estrés para estudiantes en época de exámenes.', content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.', author: 'Equipo Salud', date: '2025-08-22', image: 'https://picsum.photos/seed/salud/800/600', score: 4.5, tags: ['recientes', 'salud'] },
        { id: 'art-004', title: 'Obra teatral del taller de arte: reseña', category: 'cultura', excerpt: 'Una reseña sobre la función que emocionó a la comunidad y los aprendizajes del semillero de teatro.', content: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.', author: 'Cultura', date: '2025-06-18', image: 'https://picsum.photos/seed/cultura/800/600', score: 4.2, tags: ['cultura'] },
        { id: 'art-005', title: 'Feria de ciencias: proyectos destacados', category: 'eventos', excerpt: 'Proyectos del grado 10 y 11 que mostraron creatividad y pensamiento crítico en experimentos y prototipos.', content: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', author: 'Eventos', date: '2025-05-30', image: 'https://picsum.photos/seed/eventos/800/600', score: 4.9, tags: ['destacados', 'calificados'] },
        { id: 'art-006', title: 'Campaña solidaria: recolecta de útiles escolares', category: 'social', excerpt: 'Acción solidaria organizada por estudiantes para beneficiar a familias de la comunidad.', content: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.', author: 'Acción Social', date: '2025-04-10', image: 'https://picsum.photos/seed/social/800/600', score: 4.6, tags: ['social'] },
        { id: 'art-007', title: 'Notas curiosas: Meme de la semana y pasatiempo', category: 'notas-curiosas', excerpt: 'Un espacio para reír y relajarse entre clases: memes, pasatiempos y trivias cortas para jugar con amigos.', content: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.', author: 'Equipo Rinconcito', date: '2025-09-01', image: 'https://picsum.photos/seed/rinconcito/800/600', score: 4.1, tags: ['recientes', 'notas-curiosas'] },
        { id: 'art-008', title: 'Iniciativa de reciclaje en el campus', category: 'ecologia', excerpt: 'Estudiantes lideran una campaña para reducir el uso de plásticos y fomentar el reciclaje en las instalaciones escolares.', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', author: 'Equipo Ecología', date: '2025-10-01', image: 'https://picsum.photos/seed/reciclaje/800/600', score: 4.7, tags: ['recientes', 'institucion'] },
        { id: 'art-009', title: 'Taller de robótica: creando el futuro', category: 'tecnologia', excerpt: 'Un vistazo al taller de robótica, donde los estudiantes diseñan, construyen y programan sus propios robots.', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.', author: 'Redacción Tecnología', date: '2025-09-25', image: 'https://picsum.photos/seed/robotica/800/600', score: 4.9, tags: ['destacados', 'calificados'] },
        { id: 'art-010', title: 'Visita al Museo de Historia Natural', category: 'paseo', excerpt: 'Una crónica de la emocionante excursión al museo, donde los alumnos aprendieron sobre la evolución y la biodiversidad.', content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.', author: 'Guía de Paseos', date: '2025-08-15', image: 'https://picsum.photos/seed/museo/800/600', score: 4.3, tags: ['cultura'] },
        { id: 'art-011', title: 'Celebración del Día del Maestro', category: 'institucion', excerpt: 'Un emotivo homenaje a los profesores de la escuela, con discursos de los estudiantes y sorpresas especiales.', content: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.', author: 'Comité de Eventos', date: '2025-05-15', image: 'https://picsum.photos/seed/maestro/800/600', score: 4.8, tags: ['destacados', 'institucion'] },
        { id: 'art-012', title: 'Clases de natación para principiantes', category: 'deporte', excerpt: 'Se abren las inscripciones para el nuevo curso de natación, una oportunidad para aprender y mejorar habilidades acuáticas.', content: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', author: 'Redacción Deportes', date: '2025-04-20', image: 'https://picsum.photos/seed/natacion/800/600', score: 4.2, tags: ['deporte'] },
        { id: 'art-013', title: 'Charla sobre ciberseguridad para padres', category: 'salud', excerpt: 'Un experto en seguridad informática compartió consejos vitales para proteger a los niños en línea.', content: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', author: 'Equipo Salud', date: '2025-03-10', image: 'https://picsum.photos/seed/ciberseguridad/800/600', score: 4.5, tags: ['salud'] },
        { id: 'art-014', title: 'Festival de música y talentos', category: 'cultura', excerpt: 'Un resumen del festival anual, que contó con actuaciones de estudiantes de todos los grados.', content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.', author: 'Cultura', date: '2025-02-28', image: 'https://picsum.photos/seed/festival/800/600', score: 4.7, tags: ['cultura'] },
        { id: 'art-015', title: 'Resultados de la Olimpiada de Matemáticas', category: 'eventos', excerpt: 'Se anuncian los ganadores y participantes destacados de la competencia académica de este año.', content: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.', author: 'Eventos', date: '2025-01-20', image: 'https://picsum.photos/seed/olimpiada/800/600', score: 4.9, tags: ['destacados', 'calificados'] },
        { id: 'art-016', title: 'Donación de alimentos para el banco de comidas local', category: 'social', excerpt: 'La comunidad escolar se unió para recolectar alimentos y ayudar a quienes más lo necesitan.', content: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', author: 'Acción Social', date: '2024-12-05', image: 'https://picsum.photos/seed/donacion/800/600', score: 4.6, tags: ['social'] },
        { id: 'art-017', title: 'Consejos para estudiar y relajarse', category: 'notas-curiosas', excerpt: 'Técnicas de estudio efectivas y trucos para manejar el estrés durante la temporada de exámenes.', content: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', author: 'Equipo Rinconcito', date: '2024-11-18', image: 'https://picsum.photos/seed/estudio/800/600', score: 4.1, tags: ['notas-curiosas'] },
        { id: 'art-018', title: 'Conferencia sobre el futuro de la energía', category: 'ciencia', excerpt: 'Un experto en energías renovables visitó la escuela para hablar de nuevas tecnologías y cómo impactarán nuestro futuro.', content: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.', author: 'Redacción Ciencia', date: '2024-10-30', image: 'https://picsum.photos/seed/energia/800/600', score: 4.8, tags: ['institucion'] },
        { id: 'art-019', title: 'Exposición de arte de los más pequeños', category: 'cultura', excerpt: 'Las obras de los estudiantes de preescolar y primaria se exhibieron en una emotiva muestra para padres y maestros.', content: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', author: 'Cultura', date: '2024-09-22', image: 'https://picsum.photos/seed/arte/800/600', score: 4.5, tags: ['cultura'] },
        { id: 'art-020', title: 'Campeonato de baloncesto: la gran final', category: 'deporte', excerpt: 'El equipo de la escuela se coronó campeón en un emocionante partido contra sus rivales de siempre.', content: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', author: 'Redacción Deportes', date: '2024-08-10', image: 'https://picsum.photos/seed/baloncesto/800/600', score: 4.9, tags: ['destacados', 'deporte'] }
    ];

    const VISITS_KEY = 'clickedu-visits';
    const LIKES_KEY = 'clickedu-likes';

    /**
     * Obtiene los datos de un artículo por su ID.
     * @param {string} id - El ID del artículo.
     * @returns {object|undefined}
     */
    const getArticle = (id) => ARTICLES.find(a => a.id === id);

    /**
     * Obtiene los artículos filtrados por un tag y ordenados.
     * @param {string} tag - El tag por el que filtrar.
     * @param {string} sortBy - El criterio de ordenación ('score' o 'date').
     * @returns {Array<object>}
     */
    const getArticlesByTag = (tag, sortBy = 'date') => {
        let sortedArticles = ARTICLES.filter(a => a.tags.includes(tag));
        if (sortBy === 'score') {
            sortedArticles = sortedArticles.sort((a, b) => b.score - a.score);
        } else {
            sortedArticles = sortedArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
        return sortedArticles;
    };

    /**
     * Gestiona el contador de visitas en localStorage.
     * @returns {number}
     */
    const getVisits = () => {
        let visits = parseInt(localStorage.getItem(VISITS_KEY) || '0', 10);
        visits++;
        localStorage.setItem(VISITS_KEY, String(visits));
        return visits;
    };

    /**
     * Gestiona los "likes" en localStorage.
     * @param {string} articleId - El ID del artículo.
     * @returns {boolean} - Nuevo estado del like.
     */
    const toggleLike = (articleId) => {
        let likesStore = {};
        try {
            likesStore = JSON.parse(localStorage.getItem(LIKES_KEY) || '{}');
        } catch (e) {
            console.error('Failed to parse likes from localStorage', e);
        }

        likesStore[articleId] = !likesStore[articleId];

        try {
            localStorage.setItem(LIKES_KEY, JSON.stringify(likesStore));
        } catch (e) {
            console.error('Failed to save likes to localStorage', e);
        }

        return likesStore[articleId];
    };

    /**
     * Comprueba si un artículo tiene like.
     * @param {string} articleId - El ID del artículo.
     * @returns {boolean}
     */
    const hasLike = (articleId) => {
        try {
            const likesStore = JSON.parse(localStorage.getItem(LIKES_KEY) || '{}');
            return !!likesStore[articleId];
        } catch (e) {
            console.error('Failed to parse likes from localStorage', e);
            return false;
        }
    };

    return { getArticle, getArticlesByTag, getVisits, toggleLike, hasLike };
})();

/**
 * Módulo de Utilidades del DOM.
 * Contiene funciones para manipular el DOM de forma segura.
 */
const DOM = (() => {
    /**
     * Busca un solo elemento en el DOM.
     * @param {string} selector - El selector CSS.
     * @param {Element} context - El contexto de búsqueda.
     * @returns {Element|null}
     */
    const get = (selector, context = document) => context.querySelector(selector);

    /**
     * Busca todos los elementos en el DOM.
     * @param {string} selector - El selector CSS.
     * @param {Element} context - El contexto de búsqueda.
     * @returns {Element[]}
     */
    const getAll = (selector, context = document) => Array.from(context.querySelectorAll(selector));

    /**
     * Crea un elemento HTML con atributos y contenido opcional.
     * @param {string} tag - El nombre de la etiqueta.
     * @param {object} props - Propiedades a establecer.
     * @param {Array<Node>} children - Nodos hijos a adjuntar.
     * @returns {Element}
     */
    const createElement = (tag, props = {}, children = []) => {
        const el = document.createElement(tag);
        Object.keys(props).forEach(key => el.setAttribute(key, props[key]));
        children.forEach(child => el.appendChild(child));
        return el;
    };

    return { get, getAll, createElement };
})();

/**
 * Módulo Principal de la Aplicación.
 * Contiene la lógica central y el flujo de la aplicación.
 */
const App = (() => {
    // Referencias a elementos del DOM.
    const elements = {
        mainCarousel: DOM.get('.main-hero-slider'),
        modal: DOM.get('#modal'),
        modalContent: DOM.get('#modalContent'),
        modalCloseBtn: DOM.get('#modalClose'),
        menuToggle: DOM.get('.menu-toggle'),
        mainNav: DOM.get('.main-nav'),
        visitsCount: DOM.get('#visits-count'),
        footerYear: DOM.get('#year'),
    };

    /**
     * Inicializa todas las funciones de la aplicación.
     */
    const init = () => {
        renderHeroCarousel();
        renderSections();
        handleVisits();
        setupHeader();
        setupModal();
        setupLazyLoad();
        setupGlobalEventListeners();
        
        if (elements.footerYear) {
            elements.footerYear.textContent = new Date().getFullYear();
        }
    };

    /**
     * Renderiza los artículos en las secciones de la página.
     */
    const renderSections = () => {
        const sectionsData = {
            'calificados': Data.getArticlesByTag('calificados', 'score').slice(0, 10),
            'recientes': Data.getArticlesByTag('recientes', 'date').slice(0, 10),
            'cultura': Data.getArticlesByTag('cultura', 'date').slice(0, 10),
            'deporte': Data.getArticlesByTag('deporte', 'date').slice(0, 10),
        };

        Object.entries(sectionsData).forEach(([tag, articles]) => {
            const carouselTrack = DOM.get(`.carousel[data-section="${tag}"] .carousel-track`);
            if (carouselTrack && articles.length > 0) {
                carouselTrack.innerHTML = '';
                articles.forEach(article => {
                    const card = createCard(article);
                    carouselTrack.appendChild(card);
                });
            } else {
                DOM.get(`.carousel[data-section="${tag}"]`)?.closest('.section-row')?.remove();
            }
        });
    };

    /**
     * Crea un elemento de tarjeta de artículo.
     * @param {object} article - Los datos del artículo.
     * @returns {Element}
     */
    const createCard = (article) => {
        const card = DOM.createElement('article', { class: 'article-card', 'data-id': article.id });
        const hasLike = Data.hasLike(article.id);

        card.innerHTML = `
            <a href="#" class="article-link" data-id="${article.id}">
                <div class="article-image-container">
                    <img class="article-image lazy" data-src="${escapeHtml(article.image)}" alt="${escapeHtml(article.title)}">
                </div>
            </a>
            <div class="article-content">
                <a href="#" class="article-link" data-id="${article.id}" aria-label="Leer más sobre ${escapeHtml(article.title)}">
                    <h3 class="article-title">${escapeHtml(article.title)}</h3>
                </a>
                <p class="article-excerpt">${escapeHtml(article.excerpt)}</p>
                <div class="card-meta">
                    <span>${escapeHtml(article.author)} • ${article.date}</span>
                    <button class="like-btn ${hasLike ? 'liked' : ''}" data-article-id="${article.id}" aria-label="Me gusta este artículo">
                        ❤
                    </button>
                </div>
            </div>
        `;
        return card;
    };

    /**
     * Renderiza y configura el carrusel principal.
     */
    const renderHeroCarousel = () => {
        const heroArticles = Data.getArticlesByTag('destacados', 'score').slice(0, 5);
        if (heroArticles.length === 0) {
            heroArticles.push(...Data.getArticlesByTag('recientes', 'date').slice(0, 5));
        }

        const track = DOM.get('.hero-slider-track', elements.mainCarousel);
        const dotsContainer = DOM.get('.hero-slider-dots', elements.mainCarousel);
        
        if (!track) return;
        track.innerHTML = '';
        if (dotsContainer) dotsContainer.innerHTML = '';

        heroArticles.forEach((art, index) => {
            const slide = DOM.createElement('div', { 
                class: `hero-slider-item ${index === 0 ? 'active' : ''}`, 
                style: `background-image: url(${art.image})`,
                'data-id': art.id
            });
            slide.innerHTML = `<div class="hero-slider-content"><h2>${escapeHtml(art.title)}</h2><p>${escapeHtml(art.excerpt)}</p></div>`;
            track.appendChild(slide);

            const dot = DOM.createElement('button', {
                class: `hero-slider-dot ${index === 0 ? 'active' : ''}`,
                'aria-label': `Ir a la diapositiva ${index + 1}`
            });
            dot.addEventListener('click', () => showSlide(index));
            dotsContainer?.appendChild(dot);
        });

        const slides = DOM.getAll('.hero-slider-item', track);
        const dots = DOM.getAll('.hero-slider-dot', dotsContainer);
        let currentIndex = 0;
        let slideInterval = setInterval(() => nextSlide(), 5000);

        const showSlide = (index) => {
            slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
            dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
            currentIndex = index;
        };

        const nextSlide = () => showSlide((currentIndex + 1) % slides.length);

        if (elements.mainCarousel) {
            let touchStartX = 0;
            elements.mainCarousel.addEventListener('touchstart', (e) => {
                touchStartX = e.touches[0].clientX;
                clearInterval(slideInterval);
            });
            elements.mainCarousel.addEventListener('touchend', (e) => {
                const touchEndX = e.changedTouches[0].clientX;
                if (touchEndX < touchStartX) nextSlide();
                else if (touchEndX > touchStartX) showSlide((currentIndex - 1 + slides.length) % slides.length);
                slideInterval = setInterval(nextSlide, 5000);
            });
        }
    };

    /**
     * Muestra el conteo de visitas del sitio.
     */
    const handleVisits = () => {
        if (elements.visitsCount) {
            elements.visitsCount.textContent = Data.getVisits();
        }
    };

    /**
     * Configura el menú de navegación para móviles.
     */
    const setupHeader = () => {
        if (!elements.menuToggle || !elements.mainNav) return;

        elements.menuToggle.addEventListener('click', () => {
            const isExpanded = elements.menuToggle.getAttribute('aria-expanded') === 'true';
            elements.menuToggle.setAttribute('aria-expanded', !isExpanded);
            elements.mainNav.classList.toggle('is-active');
        });

        DOM.getAll('.nav-link', elements.mainNav).forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    elements.menuToggle.setAttribute('aria-expanded', 'false');
                    elements.mainNav.classList.remove('is-active');
                }
            });
        });
    };

    /**
     * Configura el comportamiento del modal.
     */
    const setupModal = () => {
        if (!elements.modal) return;
        elements.modalCloseBtn?.addEventListener('click', closeModal);
        elements.modal.addEventListener('click', (e) => {
            if (e.target === elements.modal) closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && elements.modal.classList.contains('is-active')) {
                closeModal();
            }
        });
    };

    /**
     * Abre el modal con el contenido de un artículo específico.
     * @param {string} id - El ID del artículo.
     */
    const openModal = (id) => {
        const article = Data.getArticle(id);
        if (!article || !elements.modalContent) return;

        elements.modalContent.innerHTML = `
            <h2>${escapeHtml(article.title)}</h2>
            <p class="article-meta">Por: ${escapeHtml(article.author)} • ${article.date}</p>
            <img class="main-image" src="${escapeHtml(article.image)}" alt="${escapeHtml(article.title)}">
            <div class="article-body">
                <p>${escapeHtml(article.content)}</p>
            </div>
            <div class="article-actions">
                <button class="btn primary" id="shareBtn">Compartir</button>
                <button class="btn" id="downloadPdf">Descargar PDF</button>
            </div>
        `;
        
        elements.modal.classList.add('is-active');
        document.body.style.overflow = 'hidden';

        DOM.get('#shareBtn')?.addEventListener('click', () => handleShare(article));
        DOM.get('#downloadPdf')?.addEventListener('click', () => handleDownloadPDF(article));
    };

    /**
     * Cierra el modal.
     */
    const closeModal = () => {
        if (elements.modal) {
            elements.modal.classList.remove('is-active');
            document.body.style.overflow = '';
        }
    };
    
    /**
     * Configura un solo controlador de eventos para todas las acciones interactivas.
     */
    const setupGlobalEventListeners = () => {
        document.body.addEventListener('click', (e) => {
            const target = e.target;
            
            // Lógica para abrir el modal
            const articleLink = target.closest('.article-link');
            if (articleLink) {
                e.preventDefault();
                openModal(articleLink.dataset.id);
                return;
            }

            // Lógica para el botón de "Like"
            const likeBtn = target.closest('.like-btn');
            if (likeBtn) {
                const articleId = likeBtn.dataset.articleId;
                const isLiked = Data.toggleLike(articleId);
                likeBtn.classList.toggle('liked', isLiked);
            }
        });
    };

    /**
     * Implementa el Lazy Loading para imágenes.
     */
    const setupLazyLoad = () => {
        const lazyImages = DOM.getAll('img.lazy');
        if ('IntersectionObserver' in window) {
            const lazyObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            }, { rootMargin: '200px' });
            lazyImages.forEach(img => lazyObserver.observe(img));
        } else {
            // Fallback para navegadores antiguos
            lazyImages.forEach(img => img.src = img.dataset.src);
        }
    };

    /**
     * Maneja la funcionalidad de compartir con la Web Share API.
     * @param {object} article - Los datos del artículo.
     */
    const handleShare = (article) => {
        if (navigator.share) {
            navigator.share({
                title: article.title,
                text: article.excerpt,
                url: window.location.href,
            }).catch(console.error);
        } else {
            alert('La función de compartir no está disponible en este navegador.');
        }
    };

    /**
     * Maneja la descarga de PDF. Requiere la librería jsPDF.
     * @param {object} article - Los datos del artículo.
     */
    const handleDownloadPDF = (article) => {
        const { jsPDF } = window.jspdf || {};
        if (!jsPDF) {
            alert("La funcionalidad de descarga de PDF no está disponible.");
            console.error("Librería jsPDF no encontrada.");
            return;
        }

        const doc = new jsPDF();
        doc.setFontSize(22);
        doc.text(article.title, 10, 20);
        doc.setFontSize(12);
        doc.text(`Por: ${article.author} • ${article.date}`, 10, 30);
        const splitText = doc.splitTextToSize(article.content, 180);
        doc.text(splitText, 10, 40);
        doc.save(`${article.title.replace(/\s+/g, '_')}.pdf`);
    };

    /**
     * Sanitiza una cadena HTML para prevenir ataques XSS.
     * @param {string} str - La cadena a sanitizar.
     * @returns {string}
     */
    const escapeHtml = (str) => {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    };

    return { init };
})();

// Inicia la aplicación cuando el DOM esté completamente cargado.
document.addEventListener('DOMContentLoaded', App.init);