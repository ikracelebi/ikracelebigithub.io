// Hamburger Menu
const hamburgerMenu = document.getElementById('hamburgerMenu');
const sidebarMenu = document.getElementById('sidebarMenu');
const closeMenu = document.getElementById('closeMenu');

if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        sidebarMenu.classList.toggle('active');
    });
}

if (closeMenu) {
    closeMenu.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active');
        sidebarMenu.classList.remove('active');
    });
}

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
    if (sidebarMenu && sidebarMenu.classList.contains('active')) {
        if (!sidebarMenu.contains(e.target) && !hamburgerMenu.contains(e.target)) {
            hamburgerMenu.classList.remove('active');
            sidebarMenu.classList.remove('active');
        }
    }
});

// Language Switcher
const langIcon = document.getElementById('langIcon');
const langDropdown = document.getElementById('langDropdown');
const langOptions = document.querySelectorAll('.lang-option');
let currentLang = 'tr';

if (langIcon && langDropdown) {
    langIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!langIcon.contains(e.target) && !langDropdown.contains(e.target)) {
            langDropdown.classList.remove('active');
        }
    });

    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            currentLang = lang;
            
            // Update active state
            langOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            // Update all elements with translations
            updateLanguage(lang);
            
            // Close dropdown
            langDropdown.classList.remove('active');
        });
    });
}

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-tr]');
    elements.forEach(el => {
        if (lang === 'tr') {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = el.getAttribute('data-tr');
            } else {
                el.innerHTML = el.getAttribute('data-tr');
            }
        } else {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = el.getAttribute('data-en');
            } else {
                el.innerHTML = el.getAttribute('data-en');
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Cart Icon
const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');

if (cartIcon && cartSidebar) {
    cartIcon.addEventListener('click', () => {
        cartSidebar.classList.add('active');
        // Update cart display when sidebar opens
        if (typeof updateCartDisplay === 'function') {
            updateCartDisplay();
        }
    });
}

if (closeCart) {
    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
    });
}

// Close cart when clicking outside
document.addEventListener('click', (e) => {
    if (cartSidebar && cartSidebar.classList.contains('active')) {
        if (!cartSidebar.contains(e.target) && !cartIcon.contains(e.target)) {
            cartSidebar.classList.remove('active');
        }
    }
});

// Splash Screen
const splashScreen = document.getElementById('splashScreen');
if (splashScreen) {
    // Hide splash screen after 3 seconds
    setTimeout(() => {
        splashScreen.classList.add('fade-out');
        setTimeout(() => {
            splashScreen.style.display = 'none';
        }, 500);
    }, 3000);
}

// Glitter Effect - Create glitter particles
function createGlitter(container, count = 18) {
    if (!container) return;
    
    // Clear existing glitters
    container.innerHTML = '';
    
    // Create glitter particles
    for (let i = 0; i < count; i++) {
        const glitter = document.createElement('div');
        glitter.className = 'glitter';
        container.appendChild(glitter);
    }
}

// Create glitter for splash screen
const splashGlitterContainer = document.getElementById('splashGlitterContainer');
if (splashGlitterContainer) {
    createGlitter(splashGlitterContainer, 18);
}

// Create glitter for main page (after splash screen fades)
const glitterContainer = document.getElementById('glitterContainer');
if (glitterContainer) {
    // Wait for splash screen to fade out
    setTimeout(() => {
        createGlitter(glitterContainer, 18);
    }, 3500);
}

