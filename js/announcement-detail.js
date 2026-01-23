/* =====================================================
   RUBYLA STUDIOS - ANNOUNCEMENT DETAIL PAGE JAVASCRIPT
   ===================================================== */

// ============ ANNOUNCEMENTS DATA (Dari announcements.js) ============
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

// ============ GET ANNOUNCEMENT ID FROM URL ============
// URL'den duyuru ID'sini al
function getAnnouncementId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id')) || 1;
}

// ============ GET ANNOUNCEMENT CONTENT ============
// Duyuru içeriğini al
function getAnnouncement(id) {
    return announcements.find(a => a.id === id);
}

// ============ RENDER ANNOUNCEMENT DETAIL ============
// Duyuru detayını render et
function renderAnnouncementDetail() {
    const announcementDetail = document.getElementById('announcementDetail');
    const announcementId = getAnnouncementId();
    const announcement = getAnnouncement(announcementId);

    if (!announcement) {
        announcementDetail.innerHTML = `
            <div style="text-align: center; padding: 50px 20px; color: var(--text-secondary);">
                <i class="fas fa-exclamation-circle" style="font-size: 3rem; margin-bottom: 15px; display: block;"></i>
                <h2>Duyuru Bulunamadı</h2>
                <p><a href="announcements.html" style="color: var(--primary-color); text-decoration: none;">Duyurular sayfasına dön</a></p>
            </div>
        `;
        return;
    }

    // Başlık ve meta bilgi
    const headerHTML = `
        <div class="announcement-detail-header" style="animation: slideUp 0.6s ease;">
            <h1>${announcement.title}</h1>
            <div class="announcement-detail-meta">
                <span><i class="fas fa-calendar"></i> ${announcement.date}</span>
                <span><i class="fas fa-clock"></i> Okunma Süresi: ~3 dakika</span>
            </div>
        </div>
    `;

    // İçerik
    const contentHTML = `
        <div class="announcement-detail-content" style="animation: slideUp 0.8s ease;">
            ${announcement.content.split('\n\n').map(paragraph => {
                const trimmed = paragraph.trim();
                if (trimmed.length === 0) return '';
                
                // Başlık kontrolü
                if (trimmed.length < 100 && !trimmed.includes(' ')) {
                    return `<h2 style="color: var(--primary-color); margin-top: 30px; margin-bottom: 20px; font-size: 1.5rem; font-weight: 700;">${trimmed}</h2>`;
                }
                
                return `<p>${trimmed}</p>`;
            }).join('')}
        </div>
    `;

    announcementDetail.innerHTML = headerHTML + contentHTML;

    // Bildirim gönder
    notifyAnnouncementViewed(announcement.title);
}

// ============ NOTIFICATION FOR ANNOUNCEMENT VIEWED ============
// Duyuru görüntülenince bildirim
function notifyAnnouncementViewed(title) {
    if ('Notification' in window && Notification.permission === 'granted') {
        // Zaten gösterildi, tekrar gösterme
        return;
    }
}

// ============ SCROLL TO TOP ============
// Sayfanın başına git
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ============ INITIALIZE ============
// Sayfayı başlat
document.addEventListener('DOMContentLoaded', () => {
    renderAnnouncementDetail();
    scrollToTop();

    // Back button animasyonu
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.style.opacity = '0';
        backButton.style.transform = 'translateX(-20px)';
        backButton.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            backButton.style.opacity = '1';
            backButton.style.transform = 'translateX(0)';
        }, 50);
    }
});

// ============ KEYBOARD NAVIGATION ============
// ESC tuşu geri dön
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        window.location.href = 'announcements.html';
    }
});

// ============ SHARE ANNOUNCEMENT ============
// Duyuruyu paylaş (gelecek özellik)
function shareAnnouncement() {
    const announcementId = getAnnouncementId();
    const announcement = getAnnouncement(announcementId);
    
    if (!announcement) return;

    const url = window.location.href;
    const text = announcement.title;

    if (navigator.share) {
        navigator.share({
            title: 'Rubyla Studios',
            text: text,
            url: url
        });
    } else {
        // Fallback: URL'yi kopyala
        navigator.clipboard.writeText(url);
        alert('Link kopyalandı!');
    }
}
