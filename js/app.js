// Products Data
const products = [
    {
        id: 1,
        name: 'Anillo Eternidad',
        price: '$2,850',
        category: 'rings',
        image: 'https://images.unsplash.com/photo-1758995116142-c626a962a682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwcmluZ3xlbnwxfHx8fDE3NjI5Mjg5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
        id: 2,
        name: 'Anillo Solitario Oro',
        price: '$3,200',
        category: 'rings',
        image: 'https://images.unsplash.com/photo-1589986993357-6f9a171e02d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByaW5nJTIwZ29sZHxlbnwxfHx8fDE3NjI4OTA3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
        id: 3,
        name: 'Collar Cadena Oro',
        price: '$1,950',
        category: 'necklaces',
        image: 'https://images.unsplash.com/photo-1602752250055-5ebb552fc3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBsdXh1cnl8ZW58MXx8fHwxNzYyODQzMjgxfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
        id: 4,
        name: 'Pendientes Diamante',
        price: '$4,100',
        category: 'earrings',
        image: 'https://images.unsplash.com/photo-1761479258392-011cb2090063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwZWFycmluZ3MlMjBlbGVnYW50fGVufDF8fHx8MTc2Mjg1Mjg2OHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
        id: 5,
        name: 'Brazalete Elegante',
        price: '$2,650',
        category: 'rings',
        image: 'https://images.unsplash.com/photo-1761222101900-9c9e34fac2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYnJhY2VsZXQlMjBqZXdlbHJ5fGVufDF8fHx8MTc2MjkyOTg4NXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
        id: 6,
        name: 'Collar Perlas',
        price: '$3,750',
        category: 'necklaces',
        image: 'https://images.unsplash.com/photo-1602752250055-5ebb552fc3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBsdXh1cnl8ZW58MXx8fHwxNzYyODQzMjgxfDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
];

// State Management
let currentTab = 'about';
let selectedCategory = 'all';
let isMusicPlaying = false;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeProducts();
    setupFormHandler();
    showPage('about');
    initMusic();
});

// Navigation Functions
function showPage(pageName) {
    currentTab = pageName;
    
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const selectedPage = document.getElementById(`${pageName}-page`);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    // Update nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.dataset.tab === pageName) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Music Toggle
function toggleMusic() {
    const audio = document.getElementById('background-music');
    const musicIcon = document.querySelector('.music-icon');
    const muteIcon = document.querySelector('.mute-icon');
    
    if (!audio) {
        console.log('No se encontró el elemento de audio');
        return;
    }
    
    if (audio.paused) {
        // Reproducir música
        audio.play().then(() => {
            isMusicPlaying = true;
            musicIcon.classList.remove('hidden');
            muteIcon.classList.add('hidden');
            console.log('Música reproduciendo...');
        }).catch(error => {
            console.log('Error al reproducir música:', error);
            alert('Por favor, permite la reproducción de audio en tu navegador');
        });
    } else {
        // Pausar música
        audio.pause();
        isMusicPlaying = false;
        musicIcon.classList.add('hidden');
        muteIcon.classList.remove('hidden');
        console.log('Música pausada');
    }
}

// Auto-start music with user interaction
function initMusic() {
    const audio = document.getElementById('background-music');
    if (audio) {
        audio.volume = 0.4; // Volumen al 40% por defecto
        console.log('Audio inicializado');
    }
}

// Products Functions
function initializeProducts() {
    renderProducts(products);
}

function renderProducts(productsToRender) {
    const productsGrid = document.getElementById('products-grid');
    
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    productsToRender.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.category = product.category;
    
    card.innerHTML = `
        <div class="product-image-wrapper">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-overlay"></div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">${product.price}</p>
            <button class="product-btn">Ver Detalles</button>
        </div>
    `;
    
    card.addEventListener('click', () => {
        showProductDetails(product);
    });
    
    return card;
}

function filterProducts(category) {
    selectedCategory = category;
    
    // Update filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Filter products
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    renderProducts(filteredProducts);
}

function showProductDetails(product) {
    // Aquí puedes implementar un modal o navegación a página de detalles
    console.log('Mostrando detalles de:', product.name);
    alert(`Detalles del producto:\n\nNombre: ${product.name}\nPrecio: ${product.price}\n\n¡Pronto disponible más información!`);
}

// Contact Form Handler
function setupFormHandler() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    console.log('Formulario enviado:', formData);
    
    // Aquí puedes agregar lógica para enviar el formulario a un servidor
    
    // Mostrar mensaje de éxito
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    
    // Limpiar formulario
    e.target.reset();
}

// Image Error Handling
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.log('Error cargando imagen:', e.target.src);
        // Puedes establecer una imagen de respaldo aquí
        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"%3E%3Crect fill="%23E8E6E1" width="400" height="400"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="24" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EImagen no disponible%3C/text%3E%3C/svg%3E';
    }
}, true);

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Lazy Loading for Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    // Observe images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add animation on scroll (optional enhancement)
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Add animation to elements
    const animatedElements = document.querySelectorAll('.product-card, .info-block');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations when page is loaded
window.addEventListener('load', () => {
    addScrollAnimations();
});

// Load YouTube Video
function loadVideo() {
    const container = document.getElementById('video-container');
    const thumbnail = document.getElementById('video-thumbnail');
    
    if (container && thumbnail) {
        // Create iframe
        const iframe = document.createElement('iframe');
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.src = 'https://www.youtube.com/embed/7U_7rPdRVXw?autoplay=1';
        iframe.title = 'Proceso de Creación de Joyería';
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.allowFullscreen = true;
        
        // Replace content with iframe
        container.innerHTML = '';
        container.appendChild(iframe);
        container.onclick = null; // Remove click handler
    }
}

// Export functions for inline event handlers
window.showPage = showPage;
window.toggleMusic = toggleMusic;
window.filterProducts = filterProducts;
window.loadVideo = loadVideo;
