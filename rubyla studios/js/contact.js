/* =====================================================
   RUBYLA STUDIOS - CONTACT PAGE JAVASCRIPT
   ===================================================== */

// ============ DOM ELEMENTS ============
const contactForm = document.getElementById('contactForm');

// ============ FORM SUBMISSION ============
// Form gönderimi işlemi
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Form verilerini al
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validasyon
    if (!name || !email || !message) {
        showNotification('Lütfen tüm alanları doldurunuz!', 'error');
        return;
    }

    // E-posta doğrulaması
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Lütfen geçerli bir e-posta adresi giriniz!', 'error');
        return;
    }

    // Mailto gönderi
    sendEmailViaMailto(name, email, message);
});

// ============ MAILTO FUNCTION ============
// Mailto protokolü ile e-posta gönder
function sendEmailViaMailto(name, email, message) {
    const recipientEmail = 'rubyla.special@gmail.com';
    const subject = encodeURIComponent(`Rubyla Studios İletişim - ${name}`);
    const body = encodeURIComponent(
        `İsim: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`
    );

    // Mailto linki oluştur ve aç
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    // Başarı mesajı göster
    showNotification('E-posta uygulaması açılıyor... (veya manuel olarak gönderebilirsiniz)', 'success');

    // Formu temizle
    contactForm.reset();

    // Gecikmeli temizlik (opsiyonel)
    setTimeout(() => {
        contactForm.reset();
    }, 1000);
}

// ============ NOTIFICATION SYSTEM ============
// Bildirim göster
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 30px;
        right: 20px;
        background-color: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        font-weight: 500;
        z-index: 3000;
        animation: slideIn 0.4s ease forwards;
        max-width: 300px;
    `;

    notification.textContent = message;
    document.body.appendChild(notification);

    // 5 saniye sonra kaldır
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.4s ease forwards';
        setTimeout(() => notification.remove(), 400);
    }, 5000);
}

// ============ FORM INPUT EFFECTS ============
// Form girdileri için focus efektleri
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    // Focus olayı
    input.addEventListener('focus', (e) => {
        e.target.parentElement.style.transform = 'translateY(-5px)';
    });

    // Blur olayı
    input.addEventListener('blur', (e) => {
        e.target.parentElement.style.transform = 'translateY(0)';
    });

    // Input stil hazırlanması
    const formGroup = input.parentElement;
    formGroup.style.transition = 'all 0.3s ease';
});

// ============ SOCIAL ICONS ANIMATION ============
// Sosyal medya ikonları animasyonu
const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach((icon, index) => {
    // Yükleme animasyonu
    icon.style.opacity = '0';
    icon.style.transform = 'translateY(20px)';
    icon.style.transition = `all 0.5s ease ${index * 0.1}s`;

    setTimeout(() => {
        icon.style.opacity = '1';
        icon.style.transform = 'translateY(0)';
    }, 50);

    // Ripple efekti
    icon.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        const rect = icon.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            animation: ripple 0.6s ease-out;
        `;

        icon.style.position = 'relative';
        icon.style.overflow = 'hidden';
        icon.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// ============ EMAIL VALIDATION ============
// Gerçek zamanlı e-posta doğrulaması
const emailInput = document.getElementById('email');

emailInput.addEventListener('input', (e) => {
    const email = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email && !emailRegex.test(email)) {
        e.target.style.borderColor = '#EF4444';
        e.target.style.background = 'rgba(239, 68, 68, 0.1)';
    } else {
        e.target.style.borderColor = 'rgba(255, 215, 0, 0.3)';
        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
    }
});

// ============ FORM ANIMATION ============
// Form yükleme animasyonu
document.addEventListener('DOMContentLoaded', () => {
    const contactFormSection = document.querySelector('.contact-form-section');
    if (contactFormSection) {
        contactFormSection.style.opacity = '0';
        contactFormSection.style.transform = 'translateY(20px)';
        contactFormSection.style.transition = 'all 0.6s ease';

        setTimeout(() => {
            contactFormSection.style.opacity = '1';
            contactFormSection.style.transform = 'translateY(0)';
        }, 100);
    }
});

// ============ CHARACTER COUNT ============
// Mesaj karakter sayısı göster (opsiyonel)
const messageInput = document.getElementById('message');
const charLimit = 1000;

messageInput.addEventListener('input', (e) => {
    const charCount = e.target.value.length;
    if (charCount > charLimit) {
        e.target.value = e.target.value.substring(0, charLimit);
        showNotification(`Maksimum ${charLimit} karakter yazabilirsiniz!`, 'warning');
    }
});

// ============ ANIMATION KEYFRAMES (CSS-in-JS) ============
// Animasyon tanımlamaları
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(20px);
        }
    }

    @keyframes ripple {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(1);
            opacity: 0;
        }
    }

    .notification-success {
        background-color: #10B981 !important;
    }

    .notification-error {
        background-color: #EF4444 !important;
    }

    .notification-info {
        background-color: #3B82F6 !important;
    }

    .notification-warning {
        background-color: #F59E0B !important;
    }
`;
document.head.appendChild(style);

// ============ CONSOLE LOG ============
console.log(
    '%c📧 İletişim Sayfası Başarıyla Yüklendi!',
    'color: #FFD700; font-size: 14px; font-weight: bold;'
);
