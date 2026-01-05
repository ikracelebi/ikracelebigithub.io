// Products data
const products = [
    // Rujlar
    { id: 1, nameTr: 'Mat Ruj - Kırmızı', nameEn: 'Matte Lipstick in Red', category: 'ruj', price: 149.90, image: 'images/ruj-kirmizi.jpeg' },
    { id: 2, nameTr: 'Mat Ruj - Pembe', nameEn: 'Matte Lipstick in Pink', category: 'ruj', price: 149.90, image: 'images/ruj-pembe.jpeg' },
    { id: 3, nameTr: 'Mat Ruj - Koyu Kırmızı', nameEn: 'Matte Lipstick in Dark Red', category: 'ruj', price: 149.90, image: 'images/koyu-kirmizi.png' },
    { id: 4, nameTr: 'Parıltılı Ruj - Rose', nameEn: 'Shimmer Lipstick in Rose', category: 'ruj', price: 159.90, image: 'images/ruj-rose.png' },
    { id: 5, nameTr: 'Nude Ruj - Bej', nameEn: 'Nude Lipstick in Beige', category: 'ruj', price: 149.90, image: 'images/ruj-nude.png' },
    { id: 6, nameTr: 'Mat Ruj - Mor', nameEn: 'Matte Lipstick in Purple', category: 'ruj', price: 149.90, image: 'images/ruj-mor.jpeg' },
    { id: 7, nameTr: 'Sıvı Ruj - Coral', nameEn: 'Liquid Lipstick in Coral', category: 'ruj', price: 169.90, image: 'images/ruj-coral.png' },
    { id: 8, nameTr: 'Mat Ruj - Burgundy', nameEn: 'Matte Lipstick in Burgundy', category: 'ruj', price: 149.90, image: 'images/ruj-burgundy.png' },
    
    // Göz Makyajı
    { id: 10, nameTr: 'Göz Kalemi - Siyah', nameEn: 'Eyeliner in Black', category: 'goz', price: 69.90, image: 'images/goz-kalemi-siyah.jpeg' },
    { id: 14, nameTr: 'Göz Kalemi - Kahverengi', nameEn: 'Eyeliner in Brown', category: 'goz', price: 69.90, image: 'images/goz-kalemi-kahve.png' },
    { id: 17, nameTr: 'Jel Göz Kalemi', nameEn: 'Gel Eyeliner', category: 'goz', price: 79.90, image: 'images/goz-kalemi-siyah.jpeg' },
    { id: 15, nameTr: 'Kirpik Kıvırıcı', nameEn: 'Eyelash Curler', category: 'goz', price: 49.90, image: 'images/kirpik-kivirici.png' },
    
    // Maskara (sadece göz makyajı altında)
    { id: 9, nameTr: 'Premium Maskara - Siyah', nameEn: 'Premium Mascara in Black', category: 'goz', subcategory: 'maskara', price: 89.90, image: 'images/maskara-premium.png' },
    { id: 13, nameTr: 'Su Geçirmez Maskara', nameEn: 'Waterproof Mascara', category: 'goz', subcategory: 'maskara', price: 99.90, image: 'images/maskara-su-gecirmez.png' },
    { id: 18, nameTr: 'Volume Maskara', nameEn: 'Volumizing Mascara', category: 'goz', subcategory: 'maskara', price: 94.90, image: 'images/maskara-volume.jpeg' },
    { id: 59, nameTr: 'Lengthening Maskara', nameEn: 'Lengthening Mascara', category: 'goz', subcategory: 'maskara', price: 89.90, image: 'images/maskara-lengthening.png' },
    { id: 60, nameTr: 'Curl Maskara', nameEn: 'Curl Mascara', category: 'goz', subcategory: 'maskara', price: 94.90, image: 'images/maskara-curl.jpeg' },
    { id: 61, nameTr: 'Natural Maskara', nameEn: 'Natural Mascara', category: 'goz', subcategory: 'maskara', price: 79.90, image: 'images/maskara-premium.png' },
    { id: 62, nameTr: 'Dramatic Maskara', nameEn: 'Dramatic Mascara', category: 'goz', subcategory: 'maskara', price: 99.90, image: 'images/maskara-dramatic.jpeg' },
    
    // Palet
    { id: 11, nameTr: 'Göz Paleti - 12 Renk', nameEn: '12-Color Eye Shadow Palette', category: 'goz', subcategory: 'palet', price: 249.90, image: 'images/palet-12-renk.jpeg' },
    { id: 12, nameTr: 'Göz Paleti - Nude', nameEn: 'Nude Eye Shadow Palette', category: 'goz', subcategory: 'palet', price: 229.90, image: 'images/palet-nude.jpeg' },
    { id: 16, nameTr: 'Göz Paleti - Smoky', nameEn: 'Smoky Eye Shadow Palette', category: 'goz', subcategory: 'palet', price: 259.90, image: 'images/palet-smoky.jpeg' },
    { id: 63, nameTr: 'Göz Paleti - Pastel', nameEn: 'Pastel Eye Shadow Palette', category: 'goz', subcategory: 'palet', price: 239.90, image: 'images/palet-nude.jpeg' },
    { id: 64, nameTr: 'Göz Paleti - Warm', nameEn: 'Warm Tone Eye Shadow Palette', category: 'goz', subcategory: 'palet', price: 249.90, image: 'images/palet-warm.jpeg' },
    { id: 65, nameTr: 'Göz Paleti - Cool', nameEn: 'Cool Tone Eye Shadow Palette', category: 'goz', subcategory: 'palet', price: 249.90, image: 'images/palet-cool.jpeg' },
    { id: 66, nameTr: 'Göz Paleti - Colorful', nameEn: 'Colorful Eye Shadow Palette', category: 'goz', subcategory: 'palet', price: 269.90, image: 'images/palet-colorful.png' },
    
    // Allık
    { id: 22, nameTr: 'Allık - Pembe', nameEn: 'Blush in Pink', category: 'allik', price: 119.90, image: 'images/allik-pembe.png' },
    { id: 23, nameTr: 'Allık - Peach', nameEn: 'Blush in Peach', category: 'allik', price: 119.90, image: 'images/allik-peach.png' },
    { id: 53, nameTr: 'Allık - Coral', nameEn: 'Blush in Coral', category: 'allik', price: 119.90, image: 'images/allik-coral.jpeg' },
    { id: 54, nameTr: 'Allık - Rose', nameEn: 'Blush in Rose', category: 'allik', price: 119.90, image: 'images/allik-rose..png' },
    { id: 55, nameTr: 'Allık - Nude', nameEn: 'Blush in Nude', category: 'allik', price: 119.90, image: 'images/allik-nude.png' },
    { id: 56, nameTr: 'Allık - Berry', nameEn: 'Blush in Berry', category: 'allik', price: 124.90, image: 'images/allik-berry.jpeg' },
    
    // Fondöten
    { id: 19, nameTr: 'Doğal Fondöten - Açık', nameEn: 'Natural Foundation in Light', category: 'fondoten', price: 179.90, image: 'images/fondoten-dogal-acik.jpeg' },
    { id: 20, nameTr: 'Doğal Fondöten - Orta', nameEn: 'Natural Foundation in Medium', category: 'fondoten', price: 179.90, image: 'images/fondoten-dogal-orta.png' },
    { id: 35, nameTr: 'Doğal Fondöten - Koyu', nameEn: 'Natural Foundation in Dark', category: 'fondoten', price: 179.90, image: 'images/fondoten-dogal-koyu.jpeg' },
    { id: 36, nameTr: 'Mat Fondöten - Açık', nameEn: 'Matte Foundation in Light', category: 'fondoten', price: 189.90, image: 'images/fondoten-mat-acik.jpeg' },
    { id: 37, nameTr: 'Mat Fondöten - Orta', nameEn: 'Matte Foundation in Medium', category: 'fondoten', price: 189.90, image: 'images/fondoten-mat-orta.png' },
    { id: 38, nameTr: 'Sıvı Fondöten - Açık', nameEn: 'Liquid Foundation in Light', category: 'fondoten', price: 199.90, image: 'images/fondoten-sivi-acik.jpeg' },
    { id: 39, nameTr: 'Sıvı Fondöten - Orta', nameEn: 'Liquid Foundation in Medium', category: 'fondoten', price: 199.90, image: 'images/fondoten-sivi-acik.jpeg' },
    { id: 40, nameTr: 'BB Krem - Açık', nameEn: 'BB Cream in Light', category: 'fondoten', price: 169.90, image: 'images/bb-krem-acik.png' },
    
    // Kapatıcı
    { id: 21, nameTr: 'Kapatıcı - Açık', nameEn: 'Concealer in Light', category: 'kapatıcı', price: 89.90, image: 'images/kapatici-krem-acik.jpeg' },
    { id: 27, nameTr: 'Kapatıcı - Orta', nameEn: 'Concealer in Medium', category: 'kapatıcı', price: 89.90, image: 'images/kapatici-krem-orta.jpeg' },
    { id: 41, nameTr: 'Kapatıcı - Koyu', nameEn: 'Concealer in Dark', category: 'kapatıcı', price: 89.90, image: 'images/kapatici-krem-orta.jpeg' },
    { id: 42, nameTr: 'Kapatıcı - Çok Açık', nameEn: 'Concealer in Very Light', category: 'kapatıcı', price: 89.90, image: 'images/kapatici-krem-acik.jpeg' },
    { id: 43, nameTr: 'Sıvı Kapatıcı - Açık', nameEn: 'Liquid Concealer in Light', category: 'kapatıcı', price: 94.90, image: 'images/kapatici-sivi-orta.jpeg' },
    { id: 44, nameTr: 'Sıvı Kapatıcı - Orta', nameEn: 'Liquid Concealer in Medium', category: 'kapatıcı', price: 94.90, image: 'images/kapatici-sivi-orta.jpeg' },
    { id: 45, nameTr: 'Krem Kapatıcı - Açık', nameEn: 'Cream Concealer in Light', category: 'kapatıcı', price: 99.90, image: 'images/kapatici-krem-acik.jpeg' },
    { id: 46, nameTr: 'Krem Kapatıcı - Orta', nameEn: 'Cream Concealer in Medium', category: 'kapatıcı', price: 99.90, image: 'images/kapatici-krem-orta.jpeg' },
    
    // Highlighter (Altın ve Sarı kaldırıldı)
    { id: 47, nameTr: 'Highlighter - Pembe', nameEn: 'Highlighter in Pink', category: 'highlighter', price: 129.90, image: 'images/highlighter-pembe.png' },
    { id: 48, nameTr: 'Highlighter - Gümüş', nameEn: 'Highlighter in Silver', category: 'highlighter', price: 129.90, image: 'images/highlighter-gumus.png' },
    { id: 50, nameTr: 'Highlighter - Rose Gold', nameEn: 'Highlighter in Rose Gold', category: 'highlighter', price: 139.90, image: 'images/highlighter-rose-gold.png' },
    { id: 51, nameTr: 'Highlighter - Bronz', nameEn: 'Highlighter in Bronze', category: 'highlighter', price: 129.90, image: 'images/highlighter-bronz.png' },
    { id: 52, nameTr: 'Highlighter - İnci', nameEn: 'Highlighter in Pearl', category: 'highlighter', price: 134.90, image: 'images/highlighter-inci.png' },
    { id: 57, nameTr: 'Highlighter - Champagne', nameEn: 'Highlighter in Champagne', category: 'highlighter', price: 129.90, image: 'images/highlighter-champagne.png' },
    { id: 58, nameTr: 'Highlighter - Lavanta', nameEn: 'Highlighter in Lavender', category: 'highlighter', price: 129.90, image: 'images/highlighter-lavanta.png' },
    
    // Bakım
    { id: 29, nameTr: 'Cilt Bakım Kremi', nameEn: 'Facial Care Cream', category: 'bakim', price: 199.90, image: 'images/cilt-bakim-kremi.jpeg' },
    { id: 30, nameTr: 'Göz Kremi', nameEn: 'Eye Cream', category: 'bakim', price: 179.90, image: 'images/goz-kremi.jpeg' },
    { id: 31, nameTr: 'Temizleme Sütü', nameEn: 'Cleansing Milk', category: 'bakim', price: 149.90, image: 'images/temizleme-sutu.jpeg' },
    { id: 33, nameTr: 'Serum - C Vitamini', nameEn: 'Vitamin C Serum', category: 'bakim', price: 249.90, image: 'images/serum-c-vitamini.png' },
    { id: 34, nameTr: 'Nemlendirici', nameEn: 'Moisturizer', category: 'bakim', price: 179.90, image: 'images/nemlendirici.png' },
    
    // Yüz Yıkama Jeli
    { id: 67, nameTr: 'Yüz Yıkama Jeli - Yağlı Cilt', nameEn: 'Face Wash Gel for Oily Skin', category: 'bakim', price: 89.90, image: 'images/yuz-yikama-jeli-yagli.png' },
    { id: 68, nameTr: 'Yüz Yıkama Jeli - Kuru Cilt', nameEn: 'Face Wash Gel for Dry Skin', category: 'bakim', price: 89.90, image: 'images/yuz-yikama-jeli-kuru.png' },
    { id: 69, nameTr: 'Yüz Yıkama Jeli - Karma Cilt', nameEn: 'Face Wash Gel for Combination Skin', category: 'bakim', price: 89.90, image: 'images/yuz-yikama-jeli-karma.png' },
    
    // Tonik
    { id: 32, nameTr: 'Tonik', nameEn: 'Toner', category: 'bakim', price: 129.90, image: 'images/tonik-yagli.jpeg' },
    { id: 70, nameTr: 'Tonik - Yağlı Cilt', nameEn: 'Toner for Oily Skin', category: 'bakim', price: 134.90, image: 'images/tonik-yagli.jpeg' },
    { id: 71, nameTr: 'Tonik - Kuru Cilt', nameEn: 'Toner for Dry Skin', category: 'bakim', price: 134.90, image: 'images/tonik-kuru.jpeg' },
    { id: 72, nameTr: 'Tonik - Hassas Cilt', nameEn: 'Toner for Sensitive Skin', category: 'bakim', price: 139.90, image: 'images/tonik-hassas.jpeg' },
    
    // Güneş Kremi
    { id: 73, nameTr: 'Güneş Kremi SPF 50', nameEn: 'Sunscreen SPF 50', category: 'bakim', price: 179.90, image: 'images/gunes-kremi-spf50.png' },
    { id: 74, nameTr: 'Güneş Kremi SPF 30', nameEn: 'Sunscreen SPF 30', category: 'bakim', price: 169.90, image: 'images/gunes-kremi-spf30.png' },
    { id: 75, nameTr: 'Güneş Kremi - Bronz', nameEn: 'Bronzing Sunscreen', category: 'bakim', price: 189.90, image: 'images/gunes-kremi-bronz.png' },
    
    // Makyaj Bazı
    { id: 76, nameTr: 'Makyaj Bazı - Işıltı Veren', nameEn: 'Illuminating Makeup Primer', category: 'bakim', price: 149.90, image: 'images/makyaj-bazi-isilti.jpeg' },
    { id: 77, nameTr: 'Makyaj Bazı - Matlık Veren', nameEn: 'Matte Makeup Primer', category: 'bakim', price: 149.90, image: 'images/makyaj-bazi-mat.jpeg' }
];

let filteredProducts = [...products];
let currentCategory = 'all';
let currentPriceRange = null;
let currentSort = 'default';

// Category mapping
const categoryMap = {
    'ruj': 'Rujlar',
    'goz': 'Göz Makyajı',
    'bakim': 'Bakım',
    'allik': 'Allık',
    'fondoten': 'Fondöten',
    'kapatıcı': 'Kapatıcı',
    'highlighter': 'Highlighter'
};

const subcategoryMap = {
    'maskara': 'Maskara',
    'palet': 'Palet'
};

// Get current language
function getCurrentLanguage() {
    // Check if currentLang is defined in script.js scope
    if (typeof currentLang !== 'undefined') {
        return currentLang;
    }
    // Check localStorage
    const savedLang = localStorage.getItem('currentLang');
    if (savedLang) {
        return savedLang;
    }
    // Check HTML lang attribute
    const htmlLang = document.documentElement.lang;
    if (htmlLang) {
        return htmlLang;
    }
    // Default to Turkish
    return 'tr';
}

// Get product name based on current language
function getProductName(product) {
    const lang = getCurrentLanguage();
    if (lang === 'en' && product.nameEn) {
        return product.nameEn;
    }
    return product.nameTr || product.name || 'Ürün';
}

// Get category display name
function getCategoryDisplayName(product) {
    // If it has a subcategory that should be shown
    if (product.subcategory && subcategoryMap[product.subcategory]) {
        return subcategoryMap[product.subcategory];
    }
    // Otherwise show main category
    if (categoryMap[product.category]) {
        return categoryMap[product.category];
    }
    return product.category;
}

// Render products
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const productCount = document.getElementById('productCount');
    
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        const noProductsText = getCurrentLanguage() === 'en' ? 'No products found' : 'Ürün bulunamadı';
        productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">${noProductsText}</p>`;
        if (productCount) productCount.textContent = '0';
        return;
    }
    
    if (productCount) {
        productCount.textContent = filteredProducts.length;
    }
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card-detailed';
        
        const categoryName = getCategoryDisplayName(product);
        
        const imageDiv = document.createElement('div');
        imageDiv.className = 'product-image';
        
        // Test image loading
        const testImg = new Image();
        testImg.onload = function() {
            imageDiv.style.backgroundImage = `url('${product.image}')`;
        };
        testImg.onerror = function() {
            // Try alternative extensions
            const basePath = product.image.replace(/\.(jpg|jpeg|png)$/i, '');
            const extensions = ['.jpeg', '.jpg', '.png', '.JPG', '.JPEG', '.PNG'];
            let tried = 0;
            const tryNext = () => {
                if (tried < extensions.length) {
                    const altImg = new Image();
                    altImg.onload = function() {
                        imageDiv.style.backgroundImage = `url('${basePath}${extensions[tried]}')`;
                    };
                    altImg.onerror = function() {
                        tried++;
                        tryNext();
                    };
                    altImg.src = basePath + extensions[tried];
                } else {
                    // Fallback placeholder
                    imageDiv.style.backgroundImage = "url('https://via.placeholder.com/400x400/f5e1e4/d4a574?text=Ürün+Görseli')";
                }
            };
            tryNext();
        };
        testImg.src = product.image;
        
        imageDiv.style.backgroundSize = 'contain';
        imageDiv.style.backgroundPosition = 'center center';
        imageDiv.style.backgroundRepeat = 'no-repeat';
        
        const productName = getProductName(product);
        const addToCartText = getCurrentLanguage() === 'en' ? 'Add to Cart' : 'Sepete Ekle';
        
        productCard.innerHTML = `
            <div class="product-info">
                <span class="product-category-badge">${categoryName}</span>
                <h3>${productName}</h3>
                <span class="product-price">₺${product.price.toFixed(2).replace('.', ',')}</span>
                <button class="add-to-cart-btn" onclick="addProductToCart(${product.id})" data-tr="Sepete Ekle" data-en="Add to Cart">${addToCartText}</button>
            </div>
        `;
        
        productCard.insertBefore(imageDiv, productCard.firstChild);
        productsGrid.appendChild(productCard);
    });
}

// Filter products
function filterProducts() {
    filteredProducts = products.filter(product => {
        // Category filter
        if (currentCategory !== 'all') {
            // Check if it's a main category match
            if (product.category === currentCategory) {
                // It's a match
            }
            // Check if it's a subcategory match
            else if (product.subcategory === currentCategory) {
                // It's a match
            }
            else {
                return false;
            }
        }
        
        // Price filter
        if (currentPriceRange) {
            const [min, max] = currentPriceRange.split('-').map(p => {
                if (p.includes('+')) return Infinity;
                return parseFloat(p);
            });
            
            if (product.price < min || (max !== Infinity && product.price > max)) {
                return false;
            }
        }
        
        return true;
    });
    
    sortProducts();
    renderProducts();
}

// Sort products
function sortProducts() {
    switch (currentSort) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            filteredProducts.sort((a, b) => {
                const nameA = getProductName(a);
                const nameB = getProductName(b);
                return nameA.localeCompare(nameB, getCurrentLanguage() === 'en' ? 'en' : 'tr');
            });
            break;
        case 'name-desc':
            filteredProducts.sort((a, b) => {
                const nameA = getProductName(a);
                const nameB = getProductName(b);
                return nameB.localeCompare(nameA, getCurrentLanguage() === 'en' ? 'en' : 'tr');
            });
            break;
        default:
            // Keep original order
            break;
    }
}

// Add product to cart (global function)
window.addProductToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        if (typeof addToCart === 'function') {
            const productName = getProductName(product);
            addToCart({
                id: product.id,
                name: productName,
                nameTr: product.nameTr,
                nameEn: product.nameEn,
                price: `₺${product.price.toFixed(2).replace('.', ',')}`,
                image: product.image
            });
        }
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Check URL parameters for category filter
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
        currentCategory = categoryParam;
        // Activate the corresponding filter button
        const filterBtn = document.querySelector(`.filter-btn[data-category="${categoryParam}"]`);
        if (filterBtn) {
            document.querySelectorAll('.filter-btn[data-category]').forEach(f => f.classList.remove('active'));
            filterBtn.classList.add('active');
        }
    }
    
    // Category filter buttons
    const categoryFilters = document.querySelectorAll('.filter-btn[data-category]');
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all category filters
            document.querySelectorAll('.filter-btn[data-category]').forEach(f => f.classList.remove('active'));
            
            // Add active class to clicked filter
            filter.classList.add('active');
            
            currentCategory = filter.getAttribute('data-category');
            filterProducts();
        });
    });
    
    // Price filter buttons
    const priceFilters = document.querySelectorAll('.filter-btn[data-price]');
    priceFilters.forEach(filter => {
        filter.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Toggle price filter
            if (filter.classList.contains('active')) {
                filter.classList.remove('active');
                currentPriceRange = null;
            } else {
                document.querySelectorAll('.filter-btn[data-price]').forEach(f => f.classList.remove('active'));
                filter.classList.add('active');
                currentPriceRange = filter.getAttribute('data-price');
            }
            
            filterProducts();
        });
    });
    
    // Sort select
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            filterProducts();
        });
    }
    
    // Initial render
    filterProducts();
});

