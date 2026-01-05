// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItems) return;
    
    // Reload cart from localStorage to ensure it's up to date
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Update cart count
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        cartCount.textContent = totalItems;
    }
    
    // Clear cart items
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        const emptyCart = document.createElement('div');
        emptyCart.className = 'empty-cart';
        emptyCart.setAttribute('data-tr', 'Sepetiniz boş');
        emptyCart.setAttribute('data-en', 'Your cart is empty');
        emptyCart.textContent = 'Sepetiniz boş';
        cartItems.appendChild(emptyCart);
        
        if (cartTotal) {
            cartTotal.textContent = '₺0,00';
        }
        return;
    }
    
    // Calculate total
    let total = 0;
    
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.setAttribute('data-item-id', item.id);
        
        // Parse price - handle different formats
        let price = 0;
        if (typeof item.price === 'string') {
            price = parseFloat(item.price.replace('₺', '').replace(',', '.').replace(/\s/g, ''));
        } else {
            price = parseFloat(item.price) || 0;
        }
        
        const quantity = item.quantity || 1;
        total += price * quantity;
        
        const priceDisplay = typeof item.price === 'string' ? item.price : `₺${item.price.toFixed(2).replace('.', ',')}`;
        
        cartItem.innerHTML = `
            <div class="cart-item-image" style="background-image: url('${item.image || ''}'); background-size: cover; background-position: center;"></div>
            <div class="cart-item-info">
                <h4>${item.name || 'Ürün'}</h4>
                <p>${priceDisplay} x ${quantity}</p>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${index})" aria-label="Ürünü kaldır">&times;</button>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    if (cartTotal) {
        cartTotal.textContent = `₺${total.toFixed(2).replace('.', ',')}`;
    }
}

// Add to cart
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    
    // Show notification
    showCartNotification(product.name);
}

// Show cart notification
function showCartNotification(productName) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.cart-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
        <div class="cart-notification-content">
            <span>✓</span>
            <span>${productName} sepete eklendi!</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Remove from cart (global function)
window.removeFromCart = function(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }
};

// Initialize cart display on page load
function initCart() {
    // Reload cart from localStorage
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartDisplay();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCart);
} else {
    initCart();
}

// Checkout button handler - use event delegation for dynamic buttons
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('checkout-btn') || e.target.closest('.checkout-btn')) {
        e.preventDefault();
        const btn = e.target.classList.contains('checkout-btn') ? e.target : e.target.closest('.checkout-btn');
        
        // Check if user is logged in
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            alert('Ödeme yapmak için lütfen giriş yapın!');
            window.location.href = 'uyelik.html';
            return;
        }
        
        // Reload cart from localStorage
        cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Check if cart is empty
        if (cart.length === 0) {
            alert('Sepetiniz boş!');
            return;
        }
        
        // Show payment modal
        showPaymentModal();
    }
});

// Payment Modal Functions
function showPaymentModal() {
    let modal = document.getElementById('paymentModal');
    
    // Calculate total
    let total = 0;
    cart.forEach(item => {
        let price = 0;
        if (typeof item.price === 'string') {
            price = parseFloat(item.price.replace('₺', '').replace(',', '.').replace(/\s/g, ''));
        } else {
            price = parseFloat(item.price) || 0;
        }
        const quantity = item.quantity || 1;
        total += price * quantity;
    });
    
    // Create modal if it doesn't exist
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'paymentModal';
        modal.className = 'payment-modal';
        document.body.appendChild(modal);
        
        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closePaymentModal();
            }
        });
    }
    
    // Update modal content
    modal.innerHTML = `
        <div class="payment-modal-content">
            <div class="payment-modal-header">
                <h2>Ödeme</h2>
                <button class="payment-modal-close" onclick="closePaymentModal()">&times;</button>
            </div>
            
            <div class="payment-summary">
                <div class="payment-summary-item">
                    <span>Ara Toplam:</span>
                    <span>₺${total.toFixed(2).replace('.', ',')}</span>
                </div>
                <div class="payment-summary-item">
                    <span>Kargo:</span>
                    <span>Ücretsiz</span>
                </div>
                <div class="payment-summary-item">
                    <span>Toplam:</span>
                    <span>₺${total.toFixed(2).replace('.', ',')}</span>
                </div>
            </div>
            
            <form id="paymentForm">
                <div class="payment-methods">
                    <h3>Ödeme Yöntemi</h3>
                    <div class="payment-method-option">
                        <input type="radio" id="paymentCard" name="paymentMethod" value="card" checked>
                        <label for="paymentCard">Kredi/Banka Kartı</label>
                    </div>
                    <div class="payment-method-option">
                        <input type="radio" id="paymentCash" name="paymentMethod" value="cash">
                        <label for="paymentCash">Kapıda Ödeme</label>
                    </div>
                </div>
                
                <div id="cardPaymentFields">
                    <div class="payment-form-group">
                        <label>Kart Numarası</label>
                        <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" maxlength="19" required>
                    </div>
                    <div class="payment-form-row">
                        <div class="payment-form-group">
                            <label>Son Kullanma Tarihi</label>
                            <input type="text" id="cardExpiry" placeholder="MM/YY" maxlength="5" required>
                        </div>
                        <div class="payment-form-group">
                            <label>CVV</label>
                            <input type="text" id="cardCVV" placeholder="123" maxlength="3" required>
                        </div>
                    </div>
                    <div class="payment-form-group">
                        <label>Kart Sahibi Adı</label>
                        <input type="text" id="cardName" placeholder="Ad Soyad" required>
                    </div>
                </div>
                
                <button type="submit" class="payment-submit-btn">Ödemeyi Tamamla</button>
            </form>
        </div>
    `;
    
    // Handle payment method change
    const paymentMethods = modal.querySelectorAll('input[name="paymentMethod"]');
    const cardFields = modal.querySelector('#cardPaymentFields');
    
    paymentMethods.forEach(method => {
        method.addEventListener('change', () => {
            if (method.value === 'card') {
                cardFields.style.display = 'block';
                cardFields.querySelectorAll('input').forEach(input => input.required = true);
            } else {
                cardFields.style.display = 'none';
                cardFields.querySelectorAll('input').forEach(input => input.required = false);
            }
        });
    });
    
    // Handle form submission
    const paymentForm = modal.querySelector('#paymentForm');
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        processPayment();
    });
    
    // Format card number input
    const cardNumberInput = modal.querySelector('#cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });
    }
    
    // Format expiry input
    const cardExpiryInput = modal.querySelector('#cardExpiry');
    if (cardExpiryInput) {
        cardExpiryInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }
    
    // Format CVV input
    const cardCVVInput = modal.querySelector('#cardCVV');
    if (cardCVVInput) {
        cardCVVInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    }
    
    // Show modal
    modal.classList.add('active');
}

// Close payment modal
window.closePaymentModal = function() {
    const modal = document.getElementById('paymentModal');
    if (modal) {
        modal.classList.remove('active');
    }
};

// Process payment
function processPayment() {
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    
    if (paymentMethod === 'card') {
        const cardNumber = document.getElementById('cardNumber').value;
        const cardExpiry = document.getElementById('cardExpiry').value;
        const cardCVV = document.getElementById('cardCVV').value;
        const cardName = document.getElementById('cardName').value;
        
        if (!cardNumber || !cardExpiry || !cardCVV || !cardName) {
            alert('Lütfen tüm kart bilgilerini doldurun!');
            return;
        }
    }
    
    // Create order
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        alert('Giriş yapmanız gerekiyor!');
        return;
    }
    
    // Calculate total
    let total = 0;
    const orderItems = cart.map(item => {
        let price = 0;
        if (typeof item.price === 'string') {
            price = parseFloat(item.price.replace('₺', '').replace(',', '.').replace(/\s/g, ''));
        } else {
            price = parseFloat(item.price) || 0;
        }
        const quantity = item.quantity || 1;
        total += price * quantity;
        return {
            name: item.name,
            price: item.price,
            quantity: quantity
        };
    });
    
    // Create order object
    const order = {
        id: Date.now(),
        orderId: 'ORD-' + Date.now(),
        userId: currentUser.username || currentUser.email,
        items: orderItems,
        total: `₺${total.toFixed(2).replace('.', ',')}`,
        status: 'processing', // processing, shipping, delivered, returned
        date: new Date().toISOString(),
        paymentMethod: paymentMethod,
        trackingNumber: 'TRK' + Math.random().toString(36).substr(2, 9).toUpperCase()
    };
    
    // Save order to localStorage
    const orders = JSON.parse(localStorage.getItem('userOrders')) || [];
    orders.push(order);
    localStorage.setItem('userOrders', JSON.stringify(orders));
    
    // Simulate payment processing
    alert('Ödeme işlemi başarıyla tamamlandı! Siparişiniz alındı. Sipariş No: ' + order.orderId);
    
    // Clear cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    
    // Close modal
    closePaymentModal();
    
    // Close cart sidebar
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.remove('active');
    }
}

