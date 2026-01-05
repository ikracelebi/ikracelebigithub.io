// Profile functionality
let profileDropdown = null;
let profileIcon = null;

// Initialize profile menu
function initProfileMenu() {
    profileIcon = document.getElementById('profileIcon');
    profileDropdown = document.getElementById('profileDropdown');
    
    if (!profileIcon || !profileDropdown) return;
    
    // Check if user is logged in
    updateProfileMenu();
    
    // Toggle dropdown on click
    profileIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
        if (!currentUser) {
            // Not logged in, go to login page
            window.location.href = 'uyelik.html';
            return;
        }
        
        profileDropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (profileDropdown && profileDropdown.classList.contains('active')) {
            if (!profileDropdown.contains(e.target) && !profileIcon.contains(e.target)) {
                profileDropdown.classList.remove('active');
            }
        }
    });
}

// Update profile menu based on login status
function updateProfileMenu() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const loggedInMenu = document.getElementById('profileMenuLoggedIn');
    const notLoggedInMenu = document.getElementById('profileMenuNotLoggedIn');
    
    if (currentUser) {
        if (loggedInMenu) loggedInMenu.style.display = 'block';
        if (notLoggedInMenu) notLoggedInMenu.style.display = 'none';
    } else {
        if (loggedInMenu) loggedInMenu.style.display = 'none';
        if (notLoggedInMenu) notLoggedInMenu.style.display = 'block';
    }
}

// Show profile modal
window.showProfileModal = function(section) {
    const modal = document.getElementById('profileModal');
    const modalTitle = document.getElementById('profileModalTitle');
    const modalBody = document.getElementById('profileModalBody');
    
    if (!modal || !modalTitle || !modalBody) return;
    
    // Close dropdown
    if (profileDropdown) {
        profileDropdown.classList.remove('active');
    }
    
    // Get current language
    const currentLang = document.documentElement.lang || 'tr';
    
    // Set title and content based on section
    let title = 'Profil';
    let titleEn = 'Profile';
    let content = '';
    
    switch(section) {
        case 'settings':
            title = 'Profil Ayarları';
            titleEn = 'Profile Settings';
            content = getProfileSettingsContent();
            break;
        case 'contact':
            title = 'İletişim Bilgileri';
            titleEn = 'Contact Information';
            content = getContactContent();
            break;
        case 'preferences':
            title = 'Tercihler';
            titleEn = 'Preferences';
            content = getPreferencesContent();
            break;
        case 'shipping':
            title = 'Kargodaki Ürünler';
            titleEn = 'Shipping Products';
            content = getShippingContent();
            break;
        case 'returns':
            title = 'İade Ürünler';
            titleEn = 'Returned Products';
            content = getReturnsContent();
            break;
        default:
            content = getDefaultProfileContent();
    }
    
    modalTitle.setAttribute('data-tr', title);
    modalTitle.setAttribute('data-en', titleEn);
    modalTitle.textContent = currentLang === 'tr' ? title : titleEn;
    modalBody.innerHTML = content;
    modal.classList.add('active');
    
    // Update language for modal content
    if (typeof updateLanguage === 'function') {
        updateLanguage(currentLang);
    }
    
    // Attach event listeners for forms
    attachProfileFormListeners(section);
};

// Get profile settings content
function getProfileSettingsContent() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    const currentLang = document.documentElement.lang || 'tr';
    return `
        <form id="profileSettingsForm">
            <div class="profile-form-group">
                <label data-tr="Kullanıcı Adı" data-en="Username">Kullanıcı Adı</label>
                <input type="text" id="profileUsername" value="${currentUser.username || ''}" readonly>
            </div>
            <div class="profile-form-group">
                <label data-tr="Ad Soyad" data-en="Full Name">Ad Soyad</label>
                <input type="text" id="profileName" value="${currentUser.name || ''}">
            </div>
            <div class="profile-form-group">
                <label data-tr="E-posta" data-en="Email">E-posta</label>
                <input type="email" id="profileEmail" value="${currentUser.email || ''}">
            </div>
            <div class="profile-form-group">
                <label data-tr="Telefon" data-en="Phone">Telefon</label>
                <input type="tel" id="profilePhone" value="${currentUser.phone || ''}" placeholder="05XX XXX XX XX">
            </div>
            <div class="profile-form-group">
                <label data-tr="Doğum Tarihi" data-en="Birth Date">Doğum Tarihi</label>
                <input type="date" id="profileBirthdate" value="${currentUser.birthdate || ''}">
            </div>
            <button type="submit" class="profile-save-btn" data-tr="Kaydet" data-en="Save">Kaydet</button>
        </form>
    `;
}

// Get contact content
function getContactContent() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    const addresses = JSON.parse(localStorage.getItem('userAddresses')) || [];
    const currentLang = document.documentElement.lang || 'tr';
    
    let addressesHtml = '';
    if (addresses.length === 0) {
        addressesHtml = '<p class="profile-empty" data-tr="Henüz adres eklenmemiş." data-en="No addresses added yet.">Henüz adres eklenmemiş.</p>';
    } else {
        addressesHtml = addresses.map((addr, index) => {
            const addressTitle = addr.title || (currentLang === 'tr' ? 'Adres ' + (index + 1) : 'Address ' + (index + 1));
            return `
            <div class="address-item">
                <h4>${addressTitle}</h4>
                <p>${addr.address}</p>
                <p>${addr.city}, ${addr.district}</p>
                <p>${addr.postalCode}</p>
                <button onclick="deleteAddress(${index})" class="address-delete-btn" data-tr="Sil" data-en="Delete">Sil</button>
            </div>
        `;
        }).join('');
    }
    
    return `
        <div class="contact-section">
            <h3 data-tr="Adreslerim" data-en="My Addresses">Adreslerim</h3>
            <div class="addresses-list">
                ${addressesHtml}
            </div>
            <button onclick="showAddAddressForm()" class="profile-add-btn" data-tr="Yeni Adres Ekle" data-en="Add New Address">Yeni Adres Ekle</button>
            
            <div id="addAddressForm" style="display: none; margin-top: 1.5rem;">
                <h3 data-tr="Yeni Adres Ekle" data-en="Add New Address">Yeni Adres Ekle</h3>
                <form id="newAddressForm">
                    <div class="profile-form-group">
                        <label data-tr="Adres Başlığı" data-en="Address Title">Adres Başlığı</label>
                        <input type="text" id="addressTitle" placeholder="${currentLang === 'tr' ? 'Ev, İş, vb.' : 'Home, Work, etc.'}" required>
                    </div>
                    <div class="profile-form-group">
                        <label data-tr="Adres" data-en="Address">Adres</label>
                        <textarea id="addressText" rows="3" required></textarea>
                    </div>
                    <div class="profile-form-group">
                        <label data-tr="İl" data-en="City">İl</label>
                        <input type="text" id="addressCity" required>
                    </div>
                    <div class="profile-form-group">
                        <label data-tr="İlçe" data-en="District">İlçe</label>
                        <input type="text" id="addressDistrict" required>
                    </div>
                    <div class="profile-form-group">
                        <label data-tr="Posta Kodu" data-en="Postal Code">Posta Kodu</label>
                        <input type="text" id="addressPostalCode" required>
                    </div>
                    <button type="submit" class="profile-save-btn" data-tr="Adresi Kaydet" data-en="Save Address">Adresi Kaydet</button>
                    <button type="button" onclick="hideAddAddressForm()" class="profile-cancel-btn" data-tr="İptal" data-en="Cancel">İptal</button>
                </form>
            </div>
        </div>
    `;
}

// Get preferences content
function getPreferencesContent() {
    const preferences = JSON.parse(localStorage.getItem('userPreferences')) || {
        newsletter: false,
        smsNotifications: false,
        emailNotifications: true,
        language: 'tr'
    };
    
    return `
        <form id="preferencesForm">
            <div class="preference-item">
                <label class="preference-label">
                    <input type="checkbox" id="prefNewsletter" ${preferences.newsletter ? 'checked' : ''}>
                    <span>E-bülten aboneliği</span>
                </label>
            </div>
            <div class="preference-item">
                <label class="preference-label">
                    <input type="checkbox" id="prefSMS" ${preferences.smsNotifications ? 'checked' : ''}>
                    <span>SMS bildirimleri</span>
                </label>
            </div>
            <div class="preference-item">
                <label class="preference-label">
                    <input type="checkbox" id="prefEmail" ${preferences.emailNotifications ? 'checked' : ''}>
                    <span>E-posta bildirimleri</span>
                </label>
            </div>
            <div class="profile-form-group">
                <label>Dil Tercihi</label>
                <select id="prefLanguage">
                    <option value="tr" ${preferences.language === 'tr' ? 'selected' : ''}>Türkçe</option>
                    <option value="en" ${preferences.language === 'en' ? 'selected' : ''}>English</option>
                </select>
            </div>
            <button type="submit" class="profile-save-btn">Tercihleri Kaydet</button>
        </form>
    `;
}

// Get shipping content (kargodaki ürünler)
function getShippingContent() {
    const orders = JSON.parse(localStorage.getItem('userOrders')) || [];
    const shippingOrders = orders.filter(order => order.status === 'shipping' || order.status === 'processing');
    
    if (shippingOrders.length === 0) {
        return '<p class="profile-empty" data-tr="Kargodaki ürün bulunmamaktadır." data-en="No products in shipping.">Kargodaki ürün bulunmamaktadır.</p>';
    }
    
    return `
        <div class="orders-list">
            ${shippingOrders.map(order => `
                <div class="order-item">
                    <div class="order-header">
                        <h4 data-tr="Sipariş #" data-en="Order #">Sipariş #${order.orderId || order.id}</h4>
                        <span class="order-status ${order.status}">${getOrderStatusText(order.status)}</span>
                    </div>
                    <div class="order-date" data-tr="Sipariş Tarihi: " data-en="Order Date: ">Sipariş Tarihi: ${formatDate(order.date)}</div>
                    <div class="order-items">
                        ${order.items.map(item => `
                            <div class="order-item-product">
                                <span>${item.name} x ${item.quantity}</span>
                                <span>${item.price}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="order-total" data-tr="Toplam: " data-en="Total: ">Toplam: ${order.total}</div>
                    ${order.trackingNumber ? `<div class="order-tracking" data-tr="Kargo Takip No: " data-en="Tracking Number: ">Kargo Takip No: ${order.trackingNumber}</div>` : ''}
                </div>
            `).join('')}
        </div>
    `;
}

// Get returns content
function getReturnsContent() {
    const orders = JSON.parse(localStorage.getItem('userOrders')) || [];
    const returnOrders = orders.filter(order => order.status === 'returned' || order.returnRequested);
    
    if (returnOrders.length === 0) {
        return '<p class="profile-empty" data-tr="İade ürün bulunmamaktadır." data-en="No returned products.">İade ürün bulunmamaktadır.</p>';
    }
    
    return `
        <div class="orders-list">
            ${returnOrders.map(order => `
                <div class="order-item">
                    <div class="order-header">
                        <h4 data-tr="Sipariş #" data-en="Order #">Sipariş #${order.orderId || order.id}</h4>
                        <span class="order-status returned" data-tr="İade" data-en="Returned">İade</span>
                    </div>
                    <div class="order-date" data-tr="İade Tarihi: " data-en="Return Date: ">İade Tarihi: ${formatDate(order.returnDate || order.date)}</div>
                    <div class="order-items">
                        ${order.items.map(item => `
                            <div class="order-item-product">
                                <span>${item.name} x ${item.quantity}</span>
                                <span>${item.price}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="order-total" data-tr="İade Tutarı: " data-en="Return Amount: ">İade Tutarı: ${order.total}</div>
                </div>
            `).join('')}
        </div>
    `;
}

// Get default profile content
function getDefaultProfileContent() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    return `
        <div class="profile-default">
            <h3>Hoş geldiniz, ${currentUser.name || currentUser.username || 'Kullanıcı'}!</h3>
            <p>Profil menüsünden istediğiniz bölüme erişebilirsiniz.</p>
        </div>
    `;
}

// Attach form listeners
function attachProfileFormListeners(section) {
    if (section === 'settings') {
        const form = document.getElementById('profileSettingsForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                saveProfileSettings();
            });
        }
    } else if (section === 'contact') {
        const form = document.getElementById('newAddressForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                saveNewAddress();
            });
        }
    } else if (section === 'preferences') {
        const form = document.getElementById('preferencesForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                savePreferences();
            });
        }
    }
}

// Save profile settings
function saveProfileSettings() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    currentUser.name = document.getElementById('profileName').value;
    currentUser.email = document.getElementById('profileEmail').value;
    currentUser.phone = document.getElementById('profilePhone').value;
    currentUser.birthdate = document.getElementById('profileBirthdate').value;
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    const currentLang = document.documentElement.lang || 'tr';
    alert(currentLang === 'tr' ? 'Profil bilgileri kaydedildi!' : 'Profile information saved!');
}

// Save new address
window.saveNewAddress = function() {
    const addresses = JSON.parse(localStorage.getItem('userAddresses')) || [];
    const currentLang = document.documentElement.lang || 'tr';
    const newAddress = {
        title: document.getElementById('addressTitle').value,
        address: document.getElementById('addressText').value,
        city: document.getElementById('addressCity').value,
        district: document.getElementById('addressDistrict').value,
        postalCode: document.getElementById('addressPostalCode').value
    };
    
    addresses.push(newAddress);
    localStorage.setItem('userAddresses', JSON.stringify(addresses));
    alert(currentLang === 'tr' ? 'Adres eklendi!' : 'Address added!');
    showProfileModal('contact');
};

// Delete address
window.deleteAddress = function(index) {
    const currentLang = document.documentElement.lang || 'tr';
    const confirmMsg = currentLang === 'tr' 
        ? 'Bu adresi silmek istediğinize emin misiniz?'
        : 'Are you sure you want to delete this address?';
    if (confirm(confirmMsg)) {
        const addresses = JSON.parse(localStorage.getItem('userAddresses')) || [];
        addresses.splice(index, 1);
        localStorage.setItem('userAddresses', JSON.stringify(addresses));
        showProfileModal('contact');
    }
};

// Show add address form
window.showAddAddressForm = function() {
    const form = document.getElementById('addAddressForm');
    if (form) form.style.display = 'block';
};

// Hide add address form
window.hideAddAddressForm = function() {
    const form = document.getElementById('addAddressForm');
    if (form) form.style.display = 'none';
};

// Save preferences
function savePreferences() {
    const currentLang = document.documentElement.lang || 'tr';
    const preferences = {
        newsletter: document.getElementById('prefNewsletter').checked,
        smsNotifications: document.getElementById('prefSMS').checked,
        emailNotifications: document.getElementById('prefEmail').checked,
        language: document.getElementById('prefLanguage').value
    };
    
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
    alert(currentLang === 'tr' ? 'Tercihler kaydedildi!' : 'Preferences saved!');
}

// Close profile modal
window.closeProfileModal = function() {
    const modal = document.getElementById('profileModal');
    if (modal) {
        modal.classList.remove('active');
    }
};

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('profileModal');
    if (modal && modal.classList.contains('active')) {
        const modalContent = modal.querySelector('.profile-modal-content');
        if (modalContent && !modalContent.contains(e.target) && e.target === modal) {
            closeProfileModal();
        }
    }
});

// Logout
window.logout = function() {
    const currentLang = document.documentElement.lang || 'tr';
    const confirmMsg = currentLang === 'tr' 
        ? 'Çıkış yapmak istediğinize emin misiniz?'
        : 'Are you sure you want to logout?';
    const successMsg = currentLang === 'tr' ? 'Çıkış yapıldı!' : 'Logged out!';
    
    if (confirm(confirmMsg)) {
        localStorage.removeItem('currentUser');
        updateProfileMenu();
        if (profileDropdown) profileDropdown.classList.remove('active');
        alert(successMsg);
        window.location.reload();
    }
};

// Helper functions
function getOrderStatusText(status) {
    const statusMap = {
        'processing': 'Hazırlanıyor',
        'shipping': 'Kargoda',
        'delivered': 'Teslim Edildi',
        'returned': 'İade Edildi'
    };
    return statusMap[status] || status;
}

function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR');
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProfileMenu);
} else {
    initProfileMenu();
}

// Update menu when user logs in (listen for storage changes)
window.addEventListener('storage', () => {
    updateProfileMenu();
});

// Also update when current page changes (for same-tab updates)
setInterval(() => {
    updateProfileMenu();
}, 1000);

