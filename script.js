document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('.auth-btn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const emailInput = document.querySelector('input[type="email"]');
            const email = emailInput ? emailInput.value : "";
            
            if (email === "") {
                showNotification("Lütfen e-posta adresinizi girin!", "error");
            } else if (email.includes("admin")) {
                showNotification("Şifreniz hatalı, lütfen tekrar deneyin.", "error");
            } else {
                showNotification("Böyle bir hesap bulunamadı. Lütfen kayıt olun!", "error");
            }
        });
    }
});

function showNotification(message, type) {
    const container = document.getElementById('notification-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}
// Fonksiyonları pencereye (global) bağlayalım
window.openModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
};

window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
};

// Dışarı tıklayınca kapatma
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
};
// Sayfa hazır olduğunda çalış
window.onload = function() {
    console.log("Sanat Arşivi JS Sistemi Aktif!");
};

// Fonksiyonları doğrudan pencereye (window) bağlıyoruz
window.openModal = function(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Arka plan kaymasın
    } else {
        console.error("Hata: " + id + " id'li modal bulunamadı!");
    }
};

window.closeModal = function(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};

// Siyah alana tıklayınca kapat
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
};
function showNotification(message, type = 'error') {
    const container = document.getElementById('notification-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;

    container.appendChild(toast);

    // 4 saniye sonra bildirimi kaldır
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

// Örnek: Giriş butonuna basıldığında test edelim
document.querySelector('.auth-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Sayfanın yenilenmesini engelle
    
    const email = document.querySelector('input[type="email"]').value;
    
    if (email === "") {
        showNotification("Lütfen e-posta adresinizi girin!");
    } else if (email === "test@mail.com") {
        showNotification("Şifreniz hatalı, lütfen tekrar deneyin.");
    } else {
        showNotification("Böyle bir hesap bulunamadı. Lütfen kayıt olun!", "error");
    }
});