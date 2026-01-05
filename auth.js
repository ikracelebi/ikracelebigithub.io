// Auth functionality
const authTabs = document.querySelectorAll('.auth-tab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');

// Tab switching
authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabType = tab.getAttribute('data-tab');
        
        // Update active tab
        authTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Show/hide forms
        if (tabType === 'login') {
            loginForm.classList.add('active');
            registerForm.classList.remove('active');
        } else {
            loginForm.classList.remove('active');
            registerForm.classList.add('active');
        }
    });
});

// Switch to register
if (switchToRegister) {
    switchToRegister.addEventListener('click', (e) => {
        e.preventDefault();
        const registerTab = document.querySelector('.auth-tab[data-tab="register"]');
        if (registerTab) registerTab.click();
    });
}

// Switch to login
if (switchToLogin) {
    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        const loginTab = document.querySelector('.auth-tab[data-tab="login"]');
        if (loginTab) loginTab.click();
    });
}

// Register form
const registerFormElement = document.getElementById('registerFormElement');
if (registerFormElement) {
    registerFormElement.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        
        // Get existing users
        let users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Check if user already exists
        if (users.find(u => u.email === email)) {
            alert('Bu e-posta adresi zaten kayıtlı!');
            return;
        }
        
        // Add new user
        users.push({
            name,
            email,
            password // In production, this should be hashed
        });
        
        localStorage.setItem('users', JSON.stringify(users));
        alert('Kayıt başarılı! Giriş yapabilirsiniz.');
        
        // Switch to login
        const loginTab = document.querySelector('.auth-tab[data-tab="login"]');
        if (loginTab) loginTab.click();
        
        // Clear form
        registerFormElement.reset();
    });
}

// Login form
const loginFormElement = document.getElementById('loginFormElement');
if (loginFormElement) {
    loginFormElement.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Check hardcoded user
        if (username === 'ikra' && password === 'ikra123') {
            // Set current user
            localStorage.setItem('currentUser', JSON.stringify({
                username: 'ikra',
                name: 'Ikra'
            }));
            alert('Giriş başarılı!');
            window.location.href = 'index.html';
            return;
        }
        
        // Get users from localStorage (for other users)
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Find user by username or email
        const user = users.find(u => (u.username === username || u.email === username) && u.password === password);
        
        if (user) {
            // Set current user
            localStorage.setItem('currentUser', JSON.stringify(user));
            alert('Giriş başarılı!');
            window.location.href = 'index.html';
        } else {
            alert('Kullanıcı adı veya şifre hatalı!');
        }
    });
}

