/* ================================
    CLICK-EDUARDO - script.js
    ================================ */

// La constante ARTICLES ya no existe aquí, se carga desde el JSON.

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();
    handleVisits();
    loadAndRenderContent();
    setupHamburger();
    setupModal();
    setupLazy();
});

async function loadAndRenderContent() {
    try {
        const response = await fetch('articles.json');
        const ARTICLES = await response.json();
        
        renderCarousels(ARTICLES);
        setupMainCarousel(ARTICLES);
        setupLikes(ARTICLES);
        setupModalListeners(ARTICLES);

    } catch (error) {
        console.error('Error al cargar los artículos:', error);
        // Manejo de error si el archivo no se encuentra
        const main = $('main');
        if (main) main.innerHTML = '<p style="text-align:center; padding:2rem;">Lo sentimos, no pudimos cargar el contenido. Por favor, inténtalo de nuevo más tarde.</p>';
    }
}

function handleVisits() {
    const visitsKey = 'clickedu-visits';
    let visits = parseInt(localStorage.getItem(visitsKey) || '0', 10);
    visits++;
    localStorage.setItem(visitsKey, String(visits));
    const visitsEl = document.getElementById('visits-count');
    if (visitsEl) visitsEl.textContent = visits;
}

function renderCarousels(ARTICLES) {
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
            const sectionRow = car.closest('.section-row');
            if (sectionRow) sectionRow.remove();
            return;
        }

        items.forEach(a => {
            const card = createCard(a, section === 'all-articles');
            track.appendChild(card);
        });
    });
}

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
                        <span>❤</span> <span class="count">0</span>
                    </button>
                `}
            </div>
        </div>
    `;

    el.addEventListener('click', (e) => {
        const target = e.target.closest('.like-btn');
        if (!target) {
            openArticleModal(a.id);
        }
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

function setupMainCarousel(ARTICLES) {
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
        const cardWidth = track.firstElementChild.offsetWidth;
        const gap = parseFloat(window.getComputedStyle(track).gap);
        track.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
    }, 5000);
}

function setupLikes() {
    const likesStoreKey = 'clickedu-likes';
    const likes = JSON.parse(localStorage.getItem(likesStoreKey) || '{}');

    $$('.like-btn').forEach(btn => {
        const articleId = btn.dataset.articleId;
        
        if (likes[articleId]) {
            btn.classList.add('liked');
            btn.querySelector('.count').textContent = likes[articleId];
        } else {
            btn.addEventListener('click', () => {
                const currentLikes = (likes[articleId] || 0) + 1;
                likes[articleId] = currentLikes;
                localStorage.setItem(likesStoreKey, JSON.stringify(likes));
                
                $$(`.like-btn[data-article-id="${articleId}"]`).forEach(targetBtn => {
                    targetBtn.classList.add('liked');
                    targetBtn.querySelector('.count').textContent = currentLikes;
                });
            });
        }
    });
}

function setupModal() {
    const modal = $('#modal');
    const close = $('#modalClose');
    close?.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

async function openArticleModal(id) {
    const response = await fetch('articles.json');
    const ARTICLES = await response.json();
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

function setupHamburger() {
    const burger = $('#hamburger');
    const nav = $('.nav');

    if (!burger || !nav) return;

    burger.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('show');
        burger.classList.toggle('active', isOpen);
        burger.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        if (window.innerWidth < 769) {
            nav.classList.remove('show');
            burger.classList.remove('active');
            burger.setAttribute('aria-expanded', 'false');
        }
    }));
}

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

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]));
}