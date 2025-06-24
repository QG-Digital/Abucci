// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(15, 15, 15, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(220, 38, 38, 0.3)';
    } else {
        header.style.background = 'rgba(15, 15, 15, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// WhatsApp button functionality
const whatsappBtn = document.getElementById('whatsappBtn');
const agendarBtn = document.getElementById('agendarBtn');
const footerWhatsappBtn = document.getElementById('footerWhatsappBtn');
const phoneNumber = '5543998683974';
const message = 'Olá! Estava no seu site e quero saber mais sobre as tattoos e piercings.';
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

if (whatsappBtn) {
    whatsappBtn.href = whatsappUrl;
}
if (agendarBtn) {
    agendarBtn.href = whatsappUrl;
    agendarBtn.setAttribute('target', '_blank');
}
if (footerWhatsappBtn) {
    footerWhatsappBtn.href = whatsappUrl;
    footerWhatsappBtn.setAttribute('target', '_blank');
}


// Fire Particles Animation
function createFireParticle() {
    const particle = document.createElement('div');
    particle.className = 'fire-particle';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.bottom = '0px';
    const size = Math.random() * 6 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    const colors = ['#ff6b35', '#f7931e', '#ffcc02', '#dc2626'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.background = `radial-gradient(circle, ${color} 0%, transparent 70%)`;
    document.getElementById('fireParticles').appendChild(particle);
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 3000);
}
setInterval(createFireParticle, 150);

// Gallery lightbox effect
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${img.src}" alt="${img.alt}">
                <span class="lightbox-close">×</span>
            </div>
        `;
        document.body.appendChild(lightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.className === 'lightbox-close') {
                document.body.removeChild(lightbox);
            }
        });
    });
});

// Add lightbox styles dynamically
const lightboxStyles = `
    .lightbox { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.95); display: flex; align-items: center; justify-content: center; z-index: 10000; cursor: pointer; animation: fadeIn 0.3s ease; }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    .lightbox-content { position: relative; max-width: 90%; max-height: 90%; animation: zoomIn 0.3s ease; }
    @keyframes zoomIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    .lightbox-content img { width: 100%; height: auto; border-radius: 10px; box-shadow: 0 10px 50px rgba(220, 38, 38, 0.3); }
    .lightbox-close { position: absolute; top: -40px; right: 0; color: white; font-size: 30px; cursor: pointer; font-weight: bold; transition: all 0.3s ease; }
    .lightbox-close:hover { color: #dc2626; transform: scale(1.2); }
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = lightboxStyles;
document.head.appendChild(styleSheet);

// Animate elements on scroll
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            if (entry.target.classList.contains('service-card')) {
                entry.target.style.animation = 'none';
                entry.target.offsetHeight;
                entry.target.style.animation = 'cardGlow 2s ease-out';
            }
        }
    });
}, observerOptions);

const cardGlowStyles = `@keyframes cardGlow { 0% { box-shadow: 0 0 0 rgba(220, 38, 38, 0); } 50% { box-shadow: 0 0 30px rgba(220, 38, 38, 0.5); } 100% { box-shadow: 0 0 0 rgba(220, 38, 38, 0); } }`;
const cardGlowStyleSheet = document.createElement('style');
cardGlowStyleSheet.textContent = cardGlowStyles;
document.head.appendChild(cardGlowStyleSheet);

document.querySelectorAll('.service-card, .gallery-item, .footer-item, .feature').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Enhanced scroll animations
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-bg-animation');
    if (heroBackground) {
        const rate = scrolled * -0.2;
        heroBackground.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            heroTitle.style.animation = 'none';
            heroTitle.offsetHeight;
            heroTitle.style.animation = 'heroTitleGlow 3s ease-in-out infinite alternate';
        }
    }, 1000);
});

const heroTitleGlowStyles = `@keyframes heroTitleGlow { 0% { text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); } 100% { text-shadow: 0 0 10px var(--primary-red), 0 0 20px var(--primary-red), 0 0 30px var(--primary-red), 2px 2px 4px rgba(0, 0, 0, 0.5); } }`;
const heroTitleGlowStyleSheet = document.createElement('style');
heroTitleGlowStyleSheet.textContent = heroTitleGlowStyles;
document.head.appendChild(heroTitleGlowStyleSheet);


// --- MELHORIA: EFEITOS DE MOUSE E CLIQUE ---

// Mouse trail effect (mais frequente)
document.addEventListener('mousemove', (e) => {
    // Cria partículas de fogo no rastro do mouse
    if (Math.random() < 0.3) { 
        createMouseFireParticle(e.clientX, e.clientY);
    }
});

// Click explosion effect
document.addEventListener('click', (e) => {
    // Cria uma pequena explosão de partículas no local do clique
    createClickExplosion(e.clientX, e.clientY);
});

function createMouseFireParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    const size = Math.random() * 4 + 2; // Partículas um pouco maiores
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.background = 'radial-gradient(circle, #ff6b35 0%, transparent 70%)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    particle.style.animation = 'mouseFireFloat 1s ease-out forwards';
    document.body.appendChild(particle);
    setTimeout(() => {
        particle.parentNode?.removeChild(particle);
    }, 1000);
}

function createClickExplosion(x, y) {
    const particleCount = 15; // Número de partículas na explosão
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        const size = Math.random() * 3 + 1; // Partículas da explosão são menores
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        const fireColors = ['#ff6b35', '#f7931e', '#dc2626'];
        particle.style.background = `radial-gradient(circle, ${fireColors[Math.floor(Math.random() * 3)]} 0%, transparent 80%)`;
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        
        // Direção e distância aleatórias da explosão
        const angle = Math.random() * 360;
        const radius = Math.random() * 50 + 20;
        const dx = Math.cos(angle * Math.PI / 180) * radius;
        const dy = Math.sin(angle * Math.PI / 180) * radius;
        
        // Usando variáveis CSS para a animação
        particle.style.setProperty('--dx', dx + 'px');
        particle.style.setProperty('--dy', dy + 'px');

        particle.style.animation = 'clickExplosion 0.6s ease-out forwards';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.parentNode?.removeChild(particle);
        }, 600);
    }
}


// Adiciona os estilos para as novas animações de mouse e clique
const interactiveParticleStyles = `
    @keyframes mouseFireFloat {
        0% { opacity: 1; transform: translateY(0) scale(1.2); }
        100% { opacity: 0; transform: translateY(-40px) scale(0.5); }
    }
    @keyframes clickExplosion {
        0% { transform: translate(0, 0) scale(1); opacity: 1; }
        100% { transform: translate(var(--dx), var(--dy)) scale(0); opacity: 0; }
    }
`;
const interactiveParticleStyleSheet = document.createElement('style');
interactiveParticleStyleSheet.textContent = interactiveParticleStyles;
document.head.appendChild(interactiveParticleStyleSheet);


// Enhanced button hover effects
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => { btn.style.animation = 'buttonPulse 0.6s ease'; });
    btn.addEventListener('mouseleave', () => { btn.style.animation = ''; });
});

const buttonPulseStyles = `@keyframes buttonPulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }`;
const buttonPulseStyleSheet = document.createElement('style');
buttonPulseStyleSheet.textContent = buttonPulseStyles;
document.head.appendChild(buttonPulseStyleSheet);