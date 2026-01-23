/* =====================================================
   RUBYLA STUDIOS - NOTIFICATION SYSTEM (NOTIFICATIONS API)
   Web Push Notifications entegrasyonu
   ===================================================== */

// ============ NOTIFICATION SYSTEM ============
// Bildirim sistemi sınıfı
class RubylaNotificationSystem {
    constructor() {
        this.permission = 'default';
        this.enabled = false;
        this.init();
    }

    // ============ INITIALIZE ============
    // Sistemi başlat
    init() {
        // Tarayıcı uyumluluğu kontrolü
        if (!('Notification' in window)) {
            console.log('❌ Bu tarayıcı Web Notifications API\'ı desteklemiyor');
            return;
        }

        // Mevcut izin durumunu kontrol et
        this.permission = Notification.permission;
        this.enabled = this.permission === 'granted';

        // Sayfayı yüklendiğinde bildirim izni iste (hafif yöntemle)
        this.requestPermission();

        // Varsayılan bildirimi göster
        this.showWelcomeNotification();

        // Console mesajı
        console.log(
            '%c🔔 Rubyla Studios Bildirim Sistemi Aktif',
            'color: #FFD700; font-size: 12px; font-weight: bold;'
        );
    }

    // ============ REQUEST PERMISSION ============
    // Bildirim izni iste
    requestPermission() {
        if (!('Notification' in window)) return;

        // Eğer izin zaten veya reddedilmişse
        if (this.permission !== 'default') {
            this.enabled = this.permission === 'granted';
            return;
        }

        // İzin iste (hafif yöntemle - sadece etkileşim sonrasında)
        document.addEventListener('click', () => {
            if (this.permission === 'default') {
                Notification.requestPermission().then(permission => {
                    this.permission = permission;
                    this.enabled = permission === 'granted';

                    if (permission === 'granted') {
                        console.log('✅ Bildirim izni verildi');
                        this.showPermissionGrantedNotification();
                    } else if (permission === 'denied') {
                        console.log('❌ Bildirim izni reddedildi');
                    }
                });
            }
        }, { once: true });
    }

    // ============ SHOW WELCOME NOTIFICATION ============
    // Hoşgeldiniz bildirimi
    showWelcomeNotification() {
        // Sadece grantlara göster
        if (this.permission !== 'granted') return;

        // Biraz gecikme ekle
        setTimeout(() => {
            this.sendNotification('Rubyla Studios\'a Hoşgeldiniz! 🎮', {
                body: 'Dijital dünyalar inşa ediyoruz...',
                icon: this.getLogoUrl(),
                badge: this.getLogoUrl(),
                tag: 'welcome-notification',
                requireInteraction: false
            });
        }, 1500);
    }

    // ============ PERMISSION GRANTED NOTIFICATION ============
    // İzin verildi bildirimi
    showPermissionGrantedNotification() {
        this.sendNotification('Bildirimler Etkinleştirildi! 📢', {
            body: 'Yeni duyuruları ilk olarak siz öğreneceksiniz.',
            icon: this.getLogoUrl(),
            badge: this.getLogoUrl(),
            tag: 'permission-notification'
        });
    }

    // ============ SEND NOTIFICATION ============
    // Bildirim gönder
    sendNotification(title, options = {}) {
        if (!this.enabled) {
            console.log('⚠️ Bildirimler devre dışı. İzin verin.');
            return;
        }

        try {
            const notification = new Notification(title, {
                icon: options.icon || this.getLogoUrl(),
                badge: options.badge || this.getLogoUrl(),
                tag: options.tag || 'rubyla-notification',
                requireInteraction: options.requireInteraction || false,
                ...options
            });

            // Bildirimi tıklandığında
            notification.onclick = () => {
                window.focus();
                notification.close();

                // URL'ye yönlendir (varsa)
                if (options.url) {
                    window.location.href = options.url;
                } else if (options.tag === 'announcement-notification') {
                    window.location.href = '/pages/announcements.html';
                }
            };

            // Bildirim kapatıldığında
            notification.onclose = () => {
                console.log('📭 Bildirim kapatıldı:', title);
            };

            return notification;
        } catch (error) {
            console.error('❌ Bildirim gönderilirken hata:', error);
        }
    }

    // ============ GET LOGO URL ============
    // Logo URL'sini al
    getLogoUrl() {
        // Mevcut sayfa konumuna göre logo yolunu döndür
        const path = window.location.pathname;
        if (path.includes('/pages/')) {
            return '../logo.png';
        }
        return '/logo.png';
    }

    // ============ ANNOUNCE NEW ANNOUNCEMENT ============
    // Yeni duyuru bildirimi
    announceNewAnnouncement(title) {
        this.sendNotification('Yeni Duyuru! 🎉', {
            body: title,
            tag: 'announcement-notification',
            url: '/pages/announcements.html',
            requireInteraction: true
        });
    }

    // ============ ANNOUNCE PROJECT UPDATE ============
    // Proje güncellemesi bildirimi
    announceProjectUpdate(projectName) {
        this.sendNotification('Proje Güncellemesi! 🚀', {
            body: `"${projectName}" güncellenmiştir.`,
            tag: 'project-notification',
            url: '/pages/projects.html'
        });
    }

    // ============ SEND CUSTOM NOTIFICATION ============
    // Özel bildirim gönder
    sendCustomNotification(title, body, options = {}) {
        this.sendNotification(title, {
            body: body,
            ...options
        });
    }

    // ============ CHECK PERMISSION ============
    // İzin durumunu kontrol et
    checkPermission() {
        return {
            permission: this.permission,
            enabled: this.enabled
        };
    }

    // ============ ENABLE NOTIFICATIONS ============
    // Bildirimleri etkinleştir
    enableNotifications() {
        if (this.permission === 'granted') {
            this.enabled = true;
            this.showPermissionGrantedNotification();
        } else if (this.permission === 'denied') {
            console.log('❌ Bildirim izni reddedildi. Tarayıcı ayarlarını kontrol edin.');
        } else {
            Notification.requestPermission().then(permission => {
                this.permission = permission;
                this.enabled = permission === 'granted';
            });
        }
    }

    // ============ DISABLE NOTIFICATIONS ============
    // Bildirimleri devre dışı bırak
    disableNotifications() {
        this.enabled = false;
        console.log('🔕 Bildirimler devre dışı bırakıldı');
    }
}

// ============ GLOBAL INSTANCE ============
// Global bildirim sistemi örneği
let rubylaNotifications;

// ============ INITIALIZE ON DOCUMENT READY ============
// Sayfayı yüklendiğinde sistemi başlat
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        rubylaNotifications = new RubylaNotificationSystem();
    });
} else {
    rubylaNotifications = new RubylaNotificationSystem();
}

// ============ HELPER FUNCTIONS ============

// Yeni duyuru bildirimi
function notifyNewAnnouncement(title) {
    if (rubylaNotifications) {
        rubylaNotifications.announceNewAnnouncement(title);
    }
}

// Proje güncellemesi bildirimi
function notifyProjectUpdate(projectName) {
    if (rubylaNotifications) {
        rubylaNotifications.announceProjectUpdate(projectName);
    }
}

// Özel bildirim
function notifyCustom(title, body, options = {}) {
    if (rubylaNotifications) {
        rubylaNotifications.sendCustomNotification(title, body, options);
    }
}

// İzin durumunu kontrol et
function checkNotificationPermission() {
    if (rubylaNotifications) {
        return rubylaNotifications.checkPermission();
    }
    return { permission: 'default', enabled: false };
}

// Bildirimleri etkinleştir
function enableNotifications() {
    if (rubylaNotifications) {
        rubylaNotifications.enableNotifications();
    }
}

// Bildirimleri devre dışı bırak
function disableNotifications() {
    if (rubylaNotifications) {
        rubylaNotifications.disableNotifications();
    }
}

// ============ SERVICE WORKER REGISTRATION (İLERİ ÖZELLIK) ============
// Service Worker kayıt (Push Notifications için)
if ('serviceWorker' in navigator) {
    // Push notifications için service worker kaydı (opsiyonel)
    // navigator.serviceWorker.register('/sw.js').then(reg => {
    //     console.log('Service Worker kayıtlı:', reg);
    // }).catch(err => {
    //     console.log('Service Worker kaydı başarısız:', err);
    // });
}

// ============ CONSOLE MESSAGES ============
console.log(
    '%c🔔 Rubyla Studios Bildirim Sistemi Yüklendi',
    'color: #FFD700; font-size: 12px; font-weight: bold;'
);
console.log(
    '%cFonksiyonlar: notifyNewAnnouncement(), notifyProjectUpdate(), notifyCustom()',
    'color: #b0b0b0; font-size: 10px;'
);
