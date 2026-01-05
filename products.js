// Products data
const products = [
    // Rujlar
    { id: 1, name: 'Mat Ruj - Kırmızı', category: 'ruj', price: 149.90, image: 'images/ruj-kirmizi.jpeg' },
    { id: 2, name: 'Mat Ruj - Pembe', category: 'ruj', price: 149.90, image: 'images/ruj-pembe.jpeg' },
    { id: 3, name: 'Mat Ruj - Koyu Kırmızı', category: 'ruj', price: 149.90, image: 'images/koyu-kirmizi.png' },
    { id: 4, name: 'Parıltılı Ruj - Rose', category: 'ruj', price: 159.90, image: 'images/ruj-rose.png' },
    { id: 5, name: 'Nude Ruj - Bej', category: 'ruj', price: 149.90, image: 'images/ruj-nude.png' },
    { id: 6, name: 'Mat Ruj - Mor', category: 'ruj', price: 149.90, image: 'images/ruj-mor.jpeg' },
    { id: 7, name: 'Sıvı Ruj - Coral', category: 'ruj', price: 169.90, image: 'images/ruj-coral.png' },
    { id: 8, name: 'Mat Ruj - Burgundy', category: 'ruj', price: 149.90, image: 'images/ruj-burgundy.png' },
    
    // Göz Makyajı
    { id: 10, name: 'Göz Kalemi - Siyah', category: 'goz', price: 69.90, image: 'images/goz-kalemi-siyah.jpeg' },
    { id: 14, name: 'Göz Kalemi - Kahverengi', category: 'goz', price: 69.90, image: 'images/goz-kalemi-kahve.png' },
    { id: 17, name: 'Jel Göz Kalemi', category: 'goz', price: 79.90, image: 'images/goz-kalemi-siyah.jpeg' },
    { id: 15, name: 'Kirpik Kıvırıcı', category: 'goz', price: 49.90, image: 'images/kirpik-kivirici.png' },
    
    // Maskara (sadece göz makyajı altında)
    { id: 9, name: 'Premium Maskara - Siyah', category: 'goz', subcategory: 'maskara', price: 89.90, image: 'images/maskara-premium.png' },
    { id: 13, name: 'Su Geçirmez Maskara', category: 'goz', subcategory: 'maskara', price: 99.90, image: 'images/maskara-su-gecirmez.png' },
    { id: 18, name: 'Volume Maskara', category: 'goz', subcategory: 'maskara', price: 94.90, image: 'images/maskara-volume.jpeg' },
    { id: 59, name: 'Lengthening Maskara', category: 'goz', subcategory: 'maskara', price: 89.90, image: 'images/maskara-lengthening.png' },
    { id: 60, name: 'Curl Maskara', category: 'goz', subcategory: 'maskara', price: 94.90, image: 'images/maskara-curl.jpeg' },
    { id: 61, name: 'Natural Maskara', category: 'goz', subcategory: 'maskara', price: 79.90, image: 'images/maskara-premium.png' },
    { id: 62, name: 'Dramatic Maskara', category: 'goz', subcategory: 'maskara', price: 99.90, image: 'images/maskara-dramatic.jpeg' },
    
    // Palet
    { id: 11, name: 'Göz Paleti - 12 Renk', category: 'goz', subcategory: 'palet', price: 249.90, image: 'images/palet-12-renk.jpeg' },
    { id: 12, name: 'Göz Paleti - Nude', category: 'goz', subcategory: 'palet', price: 229.90, image: 'images/palet-nude.jpeg' },
    { id: 16, name: 'Göz Paleti - Smoky', category: 'goz', subcategory: 'palet', price: 259.90, image: 'images/palet-smoky.jpeg' },
    { id: 63, name: 'Göz Paleti - Pastel', category: 'goz', subcategory: 'palet', price: 239.90, image: 'images/palet-nude.jpeg' },
    { id: 64, name: 'Göz Paleti - Warm', category: 'goz', subcategory: 'palet', price: 249.90, image: 'images/palet-warm.jpeg' },
    { id: 65, name: 'Göz Paleti - Cool', category: 'goz', subcategory: 'palet', price: 249.90, image: 'images/palet-cool.jpeg' },
    { id: 66, name: 'Göz Paleti - Colorful', category: 'goz', subcategory: 'palet', price: 269.90, image: 'images/palet-colorful.png' },
    
    // Allık
    { id: 22, name: 'Allık - Pembe', category: 'allik', price: 119.90, image: 'images/allik-pembe.png' },
    { id: 23, name: 'Allık - Peach', category: 'allik', price: 119.90, image: 'images/allik-peach.png' },
    { id: 53, name: 'Allık - Coral', category: 'allik', price: 119.90, image: 'images/allik-coral.jpeg' },
    { id: 54, name: 'Allık - Rose', category: 'allik', price: 119.90, image: 'images/allik-rose..png' },
    { id: 55, name: 'Allık - Nude', category: 'allik', price: 119.90, image: 'images/allik-nude.png' },
    { id: 56, name: 'Allık - Berry', category: 'allik', price: 124.90, image: 'images/allik-berry.jpeg' },
    
    // Fondöten
    { id: 19, name: 'Doğal Fondöten - Açık', category: 'fondoten', price: 179.90, image: 'images/fondoten-dogal-acik.jpeg' },
    { id: 20, name: 'Doğal Fondöten - Orta', category: 'fondoten', price: 179.90, image: 'images/fondoten-dogal-orta.png' },
    { id: 35, name: 'Doğal Fondöten - Koyu', category: 'fondoten', price: 179.90, image: 'images/fondoten-dogal-koyu.jpeg' },
    { id: 36, name: 'Mat Fondöten - Açık', category: 'fondoten', price: 189.90, image: 'images/fondoten-mat-acik.jpeg' },
    { id: 37, name: 'Mat Fondöten - Orta', category: 'fondoten', price: 189.90, image: 'images/fondoten-mat-orta.png' },
    { id: 38, name: 'Sıvı Fondöten - Açık', category: 'fondoten', price: 199.90, image: 'images/fondoten-sivi-acik.jpeg' },
    { id: 39, name: 'Sıvı Fondöten - Orta', category: 'fondoten', price: 199.90, image: 'images/fondoten-sivi-acik.jpeg' },
    { id: 40, name: 'BB Krem - Açık', category: 'fondoten', price: 169.90, image: 'images/bb-krem-acik.png' },
    
    // Kapatıcı
    { id: 21, name: 'Kapatıcı - Açık', category: 'kapatıcı', price: 89.90, image: 'images/kapatici-krem-acik.jpeg' },
    { id: 27, name: 'Kapatıcı - Orta', category: 'kapatıcı', price: 89.90, image: 'images/kapatici-krem-orta.jpeg' },
    { id: 41, name: 'Kapatıcı - Koyu', category: 'kapatıcı', price: 89.90, image: 'images/kapatici-krem-orta.jpeg' },
    { id: 42, name: 'Kapatıcı - Çok Açık', category: 'kapatıcı', price: 89.90, image: 'images/kapatici-krem-acik.jpeg' },
    { id: 43, name: 'Sıvı Kapatıcı - Açık', category: 'kapatıcı', price: 94.90, image: 'images/kapatici-sivi-orta.jpeg' },
    { id: 44, name: 'Sıvı Kapatıcı - Orta', category: 'kapatıcı', price: 94.90, image: 'images/kapatici-sivi-orta.jpeg' },
    { id: 45, name: 'Krem Kapatıcı - Açık', category: 'kapatıcı', price: 99.90, image: 'images/kapatici-krem-acik.jpeg' },
    { id: 46, name: 'Krem Kapatıcı - Orta', category: 'kapatıcı', price: 99.90, image: 'images/kapatici-krem-orta.jpeg' },
    
    // Highlighter (Altın ve Sarı kaldırıldı)
    { id: 47, name: 'Highlighter - Pembe', category: 'highlighter', price: 129.90, image: 'images/highlighter-pembe.png' },
    { id: 48, name: 'Highlighter - Gümüş', category: 'highlighter', price: 129.90, image: 'images/highlighter-gumus.png' },
    { id: 50, name: 'Highlighter - Rose Gold', category: 'highlighter', price: 139.90, image: 'images/highlighter-rose-gold.png' },
    { id: 51, name: 'Highlighter - Bronz', category: 'highlighter', price: 129.90, image: 'images/highlighter-bronz.png' },
    { id: 52, name: 'Highlighter - İnci', category: 'highlighter', price: 134.90, image: 'images/highlighter-inci.png' },
    { id: 57, name: 'Highlighter - Champagne', category: 'highlighter', price: 129.90, image: 'images/highlighter-champagne.png' },
    { id: 58, name: 'Highlighter - Lavanta', category: 'highlighter', price: 129.90, image: 'images/highlighter-lavanta.png' },
    
    // Bakım
    { id: 29, name: 'Cilt Bakım Kremi', category: 'bakim', price: 199.90, image: 'images/cilt-bakim-kremi.jpeg' },
    { id: 30, name: 'Göz Kremi', category: 'bakim', price: 179.90, image: 'images/goz-kremi.jpeg' },
    { id: 31, name: 'Temizleme Sütü', category: 'bakim', price: 149.90, image: 'images/temizleme-sutu.jpeg' },
    { id: 33, name: 'Serum - C Vitamini', category: 'bakim', price: 249.90, image: 'images/serum-c-vitamini.png' },
    { id: 34, name: 'Nemlendirici', category: 'bakim', price: 179.90, image: 'images/nemlendirici.png' },
    
    // Yüz Yıkama Jeli
    { id: 67, name: 'Yüz Yıkama Jeli - Yağlı Cilt', category: 'bakim', price: 89.90, image: 'images/yuz-yikama-jeli-yagli.png' },
    { id: 68, name: 'Yüz Yıkama Jeli - Kuru Cilt', category: 'bakim', price: 89.90, image: 'images/yuz-yikama-jeli-kuru.png' },
    { id: 69, name: 'Yüz Yıkama Jeli - Karma Cilt', category: 'bakim', price: 89.90, image: 'images/yuz-yikama-jeli-karma.png' },
    
    // Tonik
    { id: 32, name: 'Tonik', category: 'bakim', price: 129.90, image: 'images/tonik-yagli.jpeg' },
    { id: 70, name: 'Tonik - Yağlı Cilt', category: 'bakim', price: 134.90, image: 'images/tonik-yagli.jpeg' },
    { id: 71, name: 'Tonik - Kuru Cilt', category: 'bakim', price: 134.90, image: 'images/tonik-kuru.jpeg' },
    { id: 72, name: 'Tonik - Hassas Cilt', category: 'bakim', price: 139.90, image: 'images/tonik-hassas.jpeg' },
    
    // Güneş Kremi
    { id: 73, name: 'Güneş Kremi SPF 50', category: 'bakim', price: 179.90, image: 'images/gunes-kremi-spf50.png' },
    { id: 74, name: 'Güneş Kremi SPF 30', category: 'bakim', price: 169.90, image: 'images/gunes-kremi-spf30.png' },
    { id: 75, name: 'Güneş Kremi - Bronz', category: 'bakim', price: 189.90, image: 'images/gunes-kremi-bronz.png' },
    
    // Makyaj Bazı
    { id: 76, name: 'Makyaj Bazı - Işıltı Veren', category: 'bakim', price: 149.90, image: 'images/makyaj-bazi-isilti.jpeg' },
    { id: 77, name: 'Makyaj Bazı - Matlık Veren', category: 'bakim', price: 149.90, image: 'images/makyaj-bazi-mat.jpeg' }
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
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Ürün bulunamadı</p>';
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
        
        productCard.innerHTML = `
            <div class="product-info">
                <span class="product-category-badge">${categoryName}</span>
                <h3>${product.name}</h3>
                <span class="product-price">₺${product.price.toFixed(2).replace('.', ',')}</span>
                <button class="add-to-cart-btn" onclick="addProductToCart(${product.id})">Sepete Ekle</button>
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
            filteredProducts.sort((a, b) => a.name.localeCompare('tr', b.name));
            break;
        case 'name-desc':
            filteredProducts.sort((a, b) => b.name.localeCompare('tr', a.name));
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
            addToCart({
                id: product.id,
                name: product.name,
                price: `₺${product.price.toFixed(2).replace('.', ',')}`,
                image: product.image
            });
        }
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
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

