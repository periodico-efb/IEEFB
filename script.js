
const Data = (() => {
  
    const ARTICLES = [
       {
  id: 'art-002',
  title: 'Festival de Rondas Infantiles, Ritmos y Gimnasia.',
  category: 'deporte',
  excerpt: 'La IE Eduardo Fernández Botero invita al Festival de Rondas Infantiles, Ritmos y Gimnasia, un evento lleno de música, color y alegría este 12 de noviembre en el coliseo municipal.',
  content: 'La Institución Educativa Eduardo Fernández Botero invita a toda la comunidad de Amalfi a disfrutar de un evento lleno de color, música y diversión: el Festival de Rondas Infantiles, Ritmos y Gimnasia. La cita es el miércoles 12 de noviembre de 2025 en el coliseo cubierto municipal, donde los niños y niñas de Preescolar y Primaria mostrarán todo su talento, creatividad y entusiasmo con presentaciones que prometen robarse los aplausos. Será una jornada para disfrutar en familia, apoyar a los más pequeños y compartir momentos de alegría y orgullo. El valor de la entrada es de $5.000 por persona, y lo recaudado servirá para seguir impulsando las actividades culturales de la institución.   ¡No te lo pierdas! Ven a vivir con nosotros una mañana llena de ritmo, sonrisas y mucho corazón.',
  author: 'Equipo Click-Eduardo',
  date: '2025-11-08',
  image: 'rondas.jpeg',
  score: 5,
  tags: [ 'destacados', 'deporte']},
   {
  id: 'art-003',
  title: 'Cristina Marín: un ejemplo de investigación e innovación educativa',
  category: 'institucion',
  excerpt: 'La docente Cristina Marín, de la I.E. Eduardo Fernández Botero, fue reconocida por su compromiso académico y por presentar un innovador proyecto sobre simulaciones digitales en geometría analítica durante el 14° Encuentro Nacional de Investigación Escolar.',
  content: 'La comunidad educativa de la Institución Educativa Eduardo Fernández Botero celebra con orgullo el reconocimiento otorgado a la docente Cristina Marín, quien ha demostrado dedicación, esfuerzo y compromiso en el fortalecimiento de los procesos académicos y en la promoción de la investigación escolar. Su labor ha contribuido a proyectar el nombre de la institución y del municipio de Amalfi a nivel nacional. La profesora Marín participó como ponente en la modalidad póster durante el 14° Encuentro Nacional de Investigación Escolar, un evento que reúne a docentes, estudiantes y expertos de todo el país, así como invitados internacionales, con el propósito de compartir experiencias que están transformando la manera de enseñar y aprender. En esta ocasión, la docente presentó el trabajo del grupo de investigación “El Pilar de la Investigación Matemática”, el cual explora la influencia de las simulaciones PhET, desarrolladas por la Universidad de Colorado (EE.UU.), en la enseñanza de la geometría analítica. Este proyecto propone nuevas dinámicas pedagógicas que convierten las clases tradicionales en experiencias interactivas con enfoque STEM, potenciando el aprendizaje de los estudiantes mediante la experimentación y la tecnología. El encuentro contó además con la participación de reconocidos invitados como Jorge Eduardo Urueña (Pontificia Universidad Javeriana), Gustavo Riestra Albericci (Ministerio de Educación y Cultura de Uruguay) y Marcelo Caplan (Columbia College Chicago), quienes compartieron sus visiones sobre innovación educativa y el futuro de la investigación escolar. “Este evento fue una oportunidad invaluable para aprender, compartir y reafirmar que la investigación escolar es un motor de cambio”, expresó la docente Marín, destacando que experiencias como estas no solo fortalecen el proceso académico, sino que también posicionan a Amalfi como un territorio donde se generan iniciativas educativas de gran impacto. La comunidad de la I.E. Eduardo Fernández Botero reconoce este logro como un motivo de inspiración para seguir creyendo en la educación como camino para transformar el territorio y proyectar esperanza. Con iniciativas como la de Cristina Marín y su grupo de investigación, Amalfi demuestra que desde las aulas también se construye país.',
  author: 'Equipo Click-Eduardo',
  date: '2025-09-12',
  image: 'cristina.jpg',
  score: 4,
  tags: ['recientes', 'destacados', 'institucion']
},

{
  id: 'art-004',
  title: 'así fue como la institución celebró el Día del Adulto Mayor',
  category: 'cultura',
  excerpt: 'La institución compartió una tarde especial con los abuelos del CPSAM La Providencia, llena de música y tradición, reafirmando el valor de la experiencia y la sabiduría en la comunidad.',
  content: 'La Institución Educativa Eduardo Fernández Botero celebró con gran entusiasmo el Día del Adulto Mayor, un homenaje cargado de cariño y gratitud hacia los abuelos del CPSAM La Providencia de Amalfi. La jornada estuvo marcada por la alegría, la música, los juegos y las sonrisas, en reconocimiento a la experiencia y al legado que los adultos mayores representan para la comunidad. El encuentro contó con el acompañamiento especial de la Cooperativa Riachón y la Fundación CoopRiachón, quienes se unieron a la celebración como muestra de compromiso social, compartiendo con los asistentes y fortaleciendo los lazos de apoyo hacia esta población tan importante. Uno de los momentos más destacados fue la presentación del Semillero de Danza Folclórica de la institución, que con su talento y entusiasmo llenó el evento de ritmo, color y tradición, evocando el orgullo cultural de la región. Esta conmemoración no solo fue una fiesta, sino también un recordatorio del valor que tienen nuestros mayores como raíces vivas de la historia y ejemplo de sabiduría y entrega. Desde la institución se reiteró la importancia de seguir generando espacios de encuentro que reconozcan y celebren a quienes han dedicado su vida a forjar caminos para las nuevas generaciones.',
  author: 'Equipo Click-Eduardo',
  date: '2025-08-29',
  image: 'danza.jpg',
  score: 4.1,
  tags: ['recientes', 'destacados', 'cultura']
},

      {
  id: 'art-005',
  title: 'Explorando ciencia y aprendizaje en el Parque Explora',
  category: 'institucion',
  excerpt: 'Estudiantes de la I.E. Eduardo Fernández Botero visitaron el Parque Explora y el Museo Universitario de la UdeA, viviendo una jornada de aprendizaje, diversión y descubrimiento gracias al apoyo de Ondas Antioquia.',
  content: 'Los estudiantes de grado décimo de la Institución Educativa Eduardo Fernández Botero, integrantes del grupo de investigación escolar “El Pilar de la Investigación Matemática”, participaron en una enriquecedora visita académica al Parque Explora y al Museo Universitario de la Universidad de Antioquia. La jornada, realizada con el apoyo del Programa Ondas Antioquia, el acompañamiento del asesor metodológico Sebastián Patiño y el respaldo del rector Gustavo Marulanda, combinó de manera perfecta el aprendizaje, la diversión y el descubrimiento. Durante la experiencia, los estudiantes tuvieron la oportunidad de: Recorrer el acuario del Parque Explora, uno de los más importantes de Latinoamérica. Disfrutar de experimentos interactivos que despertaron su curiosidad científica. Explorar espacios donde la ciencia, la tecnología y la creatividad se encuentran con la diversión. los jovenes investigadores destacaron que estas experiencias inspiran y motivan a seguir construyendo proyectos con enfoque STEM. Además, se anunció que el grupo tendrá un nuevo compromiso académico: el IV Encuentro Lasallista de Investigación, Innovación y Creación Artística y Cultural, que se llevará a cabo en Caldas, Antioquia, los días 23 y 24 de septiembre de 2025. Allí, los estudiantes continuarán proyectando su trabajo y compartiendo sus avances con otros jóvenes investigadores de la región. La comunidad educativa reconoció especialmente la dedicación de la docente Cristina Marín, el maestro investigador Sebastián Patiño y los estudiantes de 10°A, quienes con su esfuerzo han demostrado que investigar también es vivir, explorar y maravillarse. Con experiencias como esta, Amalfi y su institución confirman que la educación y la ciencia son caminos para soñar, aprender y transformar el futuro.',
  author: 'Equipo Click-Eduardo',
  date: '2025-08-23',
  image: 'explora.jpg',
  score: 4.2,
  tags: ['recientes', 'destacados', 'institucion']
},{
  id: 'art-006',
  title: 'Antioqueñidad en la I.E. Eduardo Fernández Botero',
  category: 'cultura',
  excerpt: 'Con música, danza y sabores típicos, la institución conmemoró el Día de la Antioqueñidad en una jornada que exaltó la cultura y las raíces de la región.',
  content: 'El pasado martes, la Institución Educativa Eduardo Fernández Botero se vistió de tradición y alegría para conmemorar el Día de la Antioqueñidad, una fecha que resalta la riqueza cultural y la identidad de nuestra región. La jornada estuvo llena de color y entusiasmo: los pasillos se adornaron con vestuarios típicos, las notas musicales alegraron cada rincón y los bailes folclóricos pusieron a vibrar a estudiantes, docentes y familias. Además, los asistentes disfrutaron de sabores tradicionales que evocan el orgullo de ser antioqueños. El evento fue una oportunidad no solo para celebrar, sino también para fortalecer el sentido de pertenencia y valorar el legado cultural que identifica a nuestra tierra. Estas actividades nos permiten mantener vivas las costumbres y transmitirlas a las nuevas generaciones. Con esta conmemoración, la institución reafirmó su compromiso de promover la cultura como parte fundamental de la formación integral, demostrando que la Antioqueñidad es motivo de orgullo y unión para toda la comunidad educativa.',
  author: 'Equipo Click-Eduardo',
  date: '2025-08-15',
  image: 'antioquenidad.jpg',
  score: 4.8,
  tags: ['recientes', 'destacados', 'cultura']
},

{
  id: 'art-007',
  title: 'La I.E. Eduardo Fernández Botero brilla en los Juegos Intercolegiados del Nordeste y Magdalena Medio',
  category: 'deporte',
  excerpt: 'La institución celebró los logros de sus deportistas en atletismo, natación, fútbol sala femenino y fútbol masculino, quienes clasificaron a la Final Departamental en Rionegro.',
  content: 'Con orgullo y entusiasmo, la Institución Educativa Eduardo Fernández Botero felicita a los deportistas que representaron a la institución y al municipio de Amalfi en los Juegos Intercolegiados de la Subregión Nordeste y Magdalena Medio, realizados en el municipio de Puerto Nare. La delegación demostró disciplina, talento y compromiso en cada competencia, dejando en alto el nombre de la institución y de la región. El reconocimiento especial es para los campeones en atletismo, natación, fútbol sala femenino y fútbol masculino, quienes lograron clasificar a la Final Departamental, que se llevará a cabo en el municipio de Rionegro. Estos triunfos no habrían sido posibles sin el apoyo de quienes acompañan y creen en el proceso deportivo: el Inder Amalfi, los profesores Jim Davis Escobar Zapata, Alexander Builes, Jhan Carlos y José Suárez, así como el club Felinos FC. También se resalta el acompañamiento de los padres y madres de familia, que han estado firmes en la formación y motivación de sus hijos. La institución celebra estos resultados como un reflejo del esfuerzo colectivo y como inspiración para toda la comunidad educativa, recordando que el deporte no solo forma campeones en las canchas, sino también en la vida.',
  author: 'Equipo Click-Eduardo',
  date: '2025-08-08',
  image: 'nare.jpg',
  score: 4.6,
  tags: ['destacados', 'deporte']
},

{
  id: 'art-008',
  title: 'Orgullo académico en el Festival del Saber 2025.',
  category: 'institucion',
  excerpt: 'La IE Eduardo Fernández Botero brilló en el Festival del Saber 2025, logrando tres primeros lugares y un segundo lugar.',
  content: 'La IE Eduardo Fernández Botero se destacó en el Festival Municipal del Saber 2025 con excelentes resultados, reflejando el compromiso y la excelencia de sus estudiantes. El Festival Municipal del Saber 2025 reunió a los mejores estudiantes de las instituciones educativas de Amalfi en una jornada dedicada al conocimiento, la disciplina y el esfuerzo académico. En esta competencia, organizada por la Administración Municipal, los participantes demostraron sus habilidades en áreas como Matemáticas, Español, Ciencias Naturales, Sociales e Inglés. La Institución Educativa Eduardo Fernández Botero tuvo una destacada participación, alcanzando tres primeros lugares en las categorías A, C y D, y un segundo lugar en la categoría B. Estos resultados reflejan el trabajo constante de los docentes y el compromiso de los estudiantes por superarse cada día. Este logro reafirma la importancia de seguir fortaleciendo los espacios que promueven la educación y el talento de los jóvenes amalfitanos, quienes con su dedicación dejan en alto el nombre de la institución y del municipio.',
  author: 'Equipo Click-Eduardo',
  date: '2025-11-05',
  image: 'saber.jpeg',
  score: 4.9,
  tags: [ 'recientes', 'destacados', 'institucion']
},

{
  id: 'art-009',
  title: 'Estudiantes de la I.E. Eduardo Fernández Botero se destacan en la fase departamental de los Juegos Supérate Intercolegiados',
  category: 'deporte',
  excerpt: 'La institución celebró la participación de sus deportistas en La Ceja, Antioquia, quienes demostraron disciplina y entrega en cada competencia.',
  content: 'La Institución Educativa Eduardo Fernández Botero felicita y reconoce con orgullo la participación de sus estudiantes en la fase departamental de los Juegos Supérate Intercolegiados, realizada en el municipio de La Ceja, Antioquia. En cada disciplina, los jóvenes deportistas dejaron ver su entrega, compromiso y talento, contribuyendo con su esfuerzo a la construcción de una sociedad más fuerte, solidaria y llena de valores. Estos logros no solo representan medallas y resultados deportivos, sino también un ejemplo de disciplina y superación personal para toda la comunidad educativa. Desde la institución, junto con el Inder Amalfi y la Coordinación de la I.E. Eduardo Fernández Botero, se auguran grandes éxitos a la categoría juvenil, que iniciará competencias en los próximos días. La institución agradece el apoyo de las familias y del Inder Amalfi en este proceso de formación deportiva, reafirmando que el deporte es un pilar fundamental para el desarrollo integral de los estudiantes.',
  author: 'Equipo Click-Eduardo',
  date: '2025-08-24',
  image: 'ceja.jpg',
  score: 4.7,
  tags: [ 'recientes', 'destacados', 'deporte']
},

    ];

    const VISITS_KEY = 'clickedu-visits';

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

    return { getArticle, getArticlesByTag, getVisits };
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
        // Mapea los ID de las secciones del HTML a los tags de los artículos
        const sectionsData = {
            'calificados': Data.getArticlesByTag('calificados', 'score').slice(0, 10),
            'recientes': Data.getArticlesByTag('recientes', 'date').slice(0, 10),
            'cultura': Data.getArticlesByTag('cultura', 'date').slice(0, 10),
            'deporte': Data.getArticlesByTag('deporte', 'date').slice(0, 10),
            'social': Data.getArticlesByTag('social', 'date').slice(0, 10),
            'institucion': Data.getArticlesByTag('institucion', 'date').slice(0, 10),
            'salud': Data.getArticlesByTag('salud', 'date').slice(0, 10),
            'notas-curiosas': Data.getArticlesByTag('notas-curiosas', 'date').slice(0, 10),
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
                // Si no hay artículos, oculta toda la sección
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
        card.innerHTML = `
            <a href="#" class="article-link" data-id="${article.id}" aria-label="Leer más sobre ${escapeHtml(article.title)}">
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
                    <span class="meta-item">${escapeHtml(article.author)} • ${article.date}</span>
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
                style: `background-image: url(${escapeHtml(art.image)})`,
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
     * Configura el menú de navegación para móviles y el scroll suave.
     */
    const setupHeader = () => {
        if (!elements.menuToggle || !elements.mainNav) return;

        elements.menuToggle.addEventListener('click', () => {
            const isExpanded = elements.menuToggle.getAttribute('aria-expanded') === 'true';
            elements.menuToggle.setAttribute('aria-expanded', !isExpanded);
            elements.mainNav.classList.toggle('is-active');
        });

        // Configura el scroll suave para los enlaces de navegación
        DOM.getAll('.nav-link', elements.mainNav).forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = e.target.getAttribute('href').substring(1);
                const targetSection = DOM.get(`#${targetId}`);
                if (targetSection) {
                    e.preventDefault();
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
                
                // Cierra el menú en móviles después de hacer clic
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

        DOM.get('#shareBtn', elements.modal)?.addEventListener('click', () => handleShare(article));
        DOM.get('#downloadPdf', elements.modal)?.addEventListener('click', () => handleDownloadPDF(article));
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
            const articleLink = e.target.closest('.article-link');
            if (articleLink) {
                e.preventDefault();
                openModal(articleLink.dataset.id);
            }

            // Delegar el evento del botón de cierre del modal, ya que se renderiza dinámicamente
            if (e.target.closest('#modalClose')) {
                closeModal();
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
            alert("La funcionalidad de descarga de PDF no está disponible. Por favor, asegúrate de que la librería jsPDF está incluida.");
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
        if (typeof str !== 'string') return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    };

    return { init };
})();

// Inicia la aplicación cuando el DOM esté completamente cargado.
document.addEventListener('DOMContentLoaded', App.init);