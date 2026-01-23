/* =====================================================
   RUBYLA STUDIOS - ANNOUNCEMENTS PAGE JAVASCRIPT
   ===================================================== */

// ============ ANNOUNCEMENTS DATA ============
// Duyurular dizisi
const announcements = [
    {
        id: 1,
        title: "RubyLa Studios Resmî Web Sayfası Açıldı!",
        date: "23 Ocak 2025",
        excerpt: "Resmî web sitemiz açıldı. Minecraft build projeleri ve oyun geliştirme çalışmalarımızı paylaşmaya başladık.",
        content: `RubyLa Studios Resmî Sitesi Açıldı

RubyLa Studios olarak yeni bir döneme girdiğimizi duyurmaktan memnuniyet duyuyoruz. Minecraft build projeleri ve oyun geliştirme alanındaki çalışmalarımızı artık resmî web sitemiz üzerinden daha düzenli, şeffaf ve erişilebilir bir şekilde paylaşmaya başlıyoruz.

Resmî sitemiz; stüdyomuzun vizyonunu, üretim anlayışını ve devam eden projelerini tek bir çatı altında toplamak amacıyla hazırlanmıştır. Bu platform üzerinden RubyLa Studios'un geliştirdiği Minecraft yapıları, oyun projeleri ve gelecekte duyurulacak çalışmalar hakkında güncel bilgilere ulaşılabilecektir.

Minecraft build tarafında; sunucular, haritalar ve özel projeler için ürettiğimiz özgün yapılar detaylarıyla sergilenecek, oyun geliştirme tarafında ise fikir aşamasından oynanabilir ürünlere kadar uzanan süreçler paylaşılacaktır. Böylece RubyLa Studios'un yalnızca sonuç odaklı değil, üretim sürecine değer veren yaklaşımı da yakından takip edilebilecektir.

Resmî web sitemiz aynı zamanda duyurular, proje güncellemeleri ve ilerleyen süreçte toplulukla etkileşim kurulacak içerikler için ana merkez olarak kullanılacaktır.

RubyLa Studios olarak hedefimiz; kaliteli, özgün ve uzun ömürlü dijital projeler üretmek ve bu süreci herkes için daha görünür hâle getirmektir. Açılan bu site, bu vizyonun önemli bir parçasıdır.

Gelişmeler için bizi takip etmeye devam edin.`
    }
];

// ============ DOM ELEMENTS ============
const announcementsList = document.getElementById('announcementsList');

// ============ RENDER ANNOUNCEMENTS ============
// Duyuruları ekrana render et
function renderAnnouncements() {
    if (announcements.length === 0) {
        announcementsList.innerHTML = `
            <div class="empty-announcements">
                <i class="fas fa-bell" style="font-size: 3rem; margin-bottom: 15px; display: block;"></i>
                Henüz duyuru yok.
            </div>
        `;
        return;
    }

    announcementsList.innerHTML = announcements.map(announcement => `
        <div class="announcement-card" onclick="goToAnnouncement(${announcement.id})">
            <img src="../logo.png" alt="Rubyla Studios Logo" class="announcement-logo">
            <div class="announcement-info">
                <h3>${announcement.title}</h3>
                <p class="announcement-date">
                    <i class="fas fa-calendar"></i> ${announcement.date}
                </p>
            </div>
            <div class="announcement-arrow">
                <i class="fas fa-chevron-right"></i>
            </div>
        </div>
    `).join('');
}

// ============ NAVIGATE TO ANNOUNCEMENT ============
// Duyuru detay sayfasına git
function goToAnnouncement(announcementId) {
    window.location.href = `announcement-detail.html?id=${announcementId}`;
}

// ============ ADD ANNOUNCEMENT ============
// Yeni duyuru ekle (dinamik olarak)
function addAnnouncement(announcementData) {
    announcementData.id = announcements.length + 1;
    announcements.unshift(announcementData);
    renderAnnouncements();
    
    // Bildirim gönder
    notifyNewAnnouncement(announcementData.title);
}

// ============ NOTIFICATION FOR NEW ANNOUNCEMENT ============
// Yeni duyuru bildirimi
function notifyNewAnnouncement(title) {
    if ('Notification' in window) {
        if (Notification.permission === 'granted') {
            new Notification('Yeni Duyuru! 🎉', {
                body: title,
                icon: '../logo.png',
                badge: '../logo.png',
                tag: 'announcement-notification'
            });
        }
    }
}

// ============ INITIALIZE ============
// Sayfayı başlat
document.addEventListener('DOMContentLoaded', () => {
    renderAnnouncements();

    // Smooth scroll animasyonu
    const announcementCards = document.querySelectorAll('.announcement-card');
    announcementCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateX(0)';
        }, 50);
    });

    // Sayfa yüklendiğinde bildirim izni iste
    if ('Notification' in window && Notification.permission === 'default') {
        // Bildirim izni isteme (opsiyonel - notifications.js tarafından işlenir)
    }
});

// ============ DYNAMIC ANNOUNCEMENT ADDITION EXAMPLE ============
/*
// Örnek: Yeni duyuru eklemek
addAnnouncement({
    title: "Yeni Proje Duyurusu",
    date: "25 Ocak 2025",
    excerpt: "Yeni bir Minecraft projesi başladı...",
    content: "Detaylı içerik..."
});
*/
