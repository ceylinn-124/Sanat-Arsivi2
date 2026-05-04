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