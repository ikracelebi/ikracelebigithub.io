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
    
    // Set title and content based on section
    let title = 'Profil';
    let content = '';
    
    switch(section) {
        case 'settings':
            title = 'Profil Ayarları';
            content = getProfileSettingsContent();
            break;
        case 'contact':
            title = 'İletişim Bilgileri';
            content = getContactContent();
            break;
        case 'preferences':
            title = 'Tercihler';
            content = getPreferencesContent();
            break;
        case 'shipping':
            title = 'Kargodaki Ürünler';
            content = getShippingContent();
            break;
        case 'returns':
            title = 'İade Ürünler';
            content = getReturnsContent();
            break;
        default:
            content = getDefaultProfileContent();
    }
    
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    modal.classList.add('active');
    
    // Attach event listeners for forms
    attachProfileFormListeners(section);
};

// Get profile settings content
function getProfileSettingsContent() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    return `
        <form id="profileSettingsForm">
            <div class="profile-form-group">
                <label>Kullanıcı Adı</label>
                <input type="text" id="profileUsername" value="${currentUser.username || ''}" readonly>
            </div>
            <div class="profile-form-group">
                <label>Ad Soyad</label>
                <input type="text" id="profileName" value="${currentUser.name || ''}">
            </div>
            <div class="profile-form-group">
                <label>E-posta</label>
                <input type="email" id="profileEmail" value="${currentUser.email || ''}">
            </div>
            <div class="profile-form-group">
                <label>Telefon</label>
                <input type="tel" id="profilePhone" value="${currentUser.phone || ''}" placeholder="05XX XXX XX XX">
            </div>
            <div class="profile-form-group">
                <label>Doğum Tarihi</label>
                <input type="date" id="profileBirthdate" value="${currentUser.birthdate || ''}">
            </div>
            <button type="submit" class="profile-save-btn">Kaydet</button>
        </form>
    `;
}

// Get contact content
function getContactContent() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    const addresses = JSON.parse(localStorage.getItem('userAddresses')) || [];
    
    let addressesHtml = '';
    if (addresses.length === 0) {
        addressesHtml = '<p class="profile-empty">Henüz adres eklenmemiş.</p>';
    } else {
        addressesHtml = addresses.map((addr, index) => `
            <div class="address-item">
                <h4>${addr.title || 'Adres ' + (index + 1)}</h4>
                <p>${addr.address}</p>
                <p>${addr.city}, ${addr.district}</p>
                <p>${addr.postalCode}</p>
                <button onclick="deleteAddress(${index})" class="address-delete-btn">Sil</button>
            </div>
        `).join('');
    }
    
    return `
        <div class="contact-section">
            <h3>Adreslerim</h3>
            <div class="addresses-list">
                ${addressesHtml}
            </div>
            <button onclick="showAddAddressForm()" class="profile-add-btn">Yeni Adres Ekle</button>
            
            <div id="addAddressForm" style="display: none; margin-top: 1.5rem;">
                <h3>Yeni Adres Ekle</h3>
                <form id="newAddressForm">
                    <div class="profile-form-group">
                        <label>Adres Başlığı</label>
                        <input type="text" id="addressTitle" placeholder="Ev, İş, vb." required>
                    </div>
                    <div class="profile-form-group">
                        <label>Adres</label>
                        <textarea id="addressText" rows="3" required></textarea>
                    </div>
                    <div class="profile-form-group">
                        <label>İl</label>
                        <input type="text" id="addressCity" required>
                    </div>
                    <div class="profile-form-group">
                        <label>İlçe</label>
                        <input type="text" id="addressDistrict" required>
                    </div>
                    <div class="profile-form-group">
                        <label>Posta Kodu</label>
                        <input type="text" id="addressPostalCode" required>
                    </div>
                    <button type="submit" class="profile-save-btn">Adresi Kaydet</button>
                    <button type="button" onclick="hideAddAddressForm()" class="profile-cancel-btn">İptal</button>
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
        return '<p class="profile-empty">Kargodaki ürün bulunmamaktadır.</p>';
    }
    
    return `
        <div class="orders-list">
            ${shippingOrders.map(order => `
                <div class="order-item">
                    <div class="order-header">
                        <h4>Sipariş #${order.orderId || order.id}</h4>
                        <span class="order-status ${order.status}">${getOrderStatusText(order.status)}</span>
                    </div>
                    <div class="order-date">Sipariş Tarihi: ${formatDate(order.date)}</div>
                    <div class="order-items">
                        ${order.items.map(item => `
                            <div class="order-item-product">
                                <span>${item.name} x ${item.quantity}</span>
                                <span>${item.price}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="order-total">Toplam: ${order.total}</div>
                    ${order.trackingNumber ? `<div class="order-tracking">Kargo Takip No: ${order.trackingNumber}</div>` : ''}
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
        return '<p class="profile-empty">İade ürün bulunmamaktadır.</p>';
    }
    
    return `
        <div class="orders-list">
            ${returnOrders.map(order => `
                <div class="order-item">
                    <div class="order-header">
                        <h4>Sipariş #${order.orderId || order.id}</h4>
                        <span class="order-status returned">İade</span>
                    </div>
                    <div class="order-date">İade Tarihi: ${formatDate(order.returnDate || order.date)}</div>
                    <div class="order-items">
                        ${order.items.map(item => `
                            <div class="order-item-product">
                                <span>${item.name} x ${item.quantity}</span>
                                <span>${item.price}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="order-total">İade Tutarı: ${order.total}</div>
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
    alert('Profil bilgileri kaydedildi!');
}

// Save new address
window.saveNewAddress = function() {
    const addresses = JSON.parse(localStorage.getItem('userAddresses')) || [];
    const newAddress = {
        title: document.getElementById('addressTitle').value,
        address: document.getElementById('addressText').value,
        city: document.getElementById('addressCity').value,
        district: document.getElementById('addressDistrict').value,
        postalCode: document.getElementById('addressPostalCode').value
    };
    
    addresses.push(newAddress);
    localStorage.setItem('userAddresses', JSON.stringify(addresses));
    alert('Adres eklendi!');
    showProfileModal('contact');
};

// Delete address
window.deleteAddress = function(index) {
    if (confirm('Bu adresi silmek istediğinize emin misiniz?')) {
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
    const preferences = {
        newsletter: document.getElementById('prefNewsletter').checked,
        smsNotifications: document.getElementById('prefSMS').checked,
        emailNotifications: document.getElementById('prefEmail').checked,
        language: document.getElementById('prefLanguage').value
    };
    
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
    alert('Tercihler kaydedildi!');
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
    if (confirm('Çıkış yapmak istediğinize emin misiniz?')) {
        localStorage.removeItem('currentUser');
        updateProfileMenu();
        if (profileDropdown) profileDropdown.classList.remove('active');
        alert('Çıkış yapıldı!');
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

