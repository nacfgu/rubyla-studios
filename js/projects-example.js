/* =====================================================
   RUBYLA STUDIOS - PROJECTS EXAMPLE DATA
   Bu dosya örnek projeler için şablondur.
   Kullanmak için js/projects.js dosyasında 'projects' dizisini güncelleyin.
   ===================================================== */

// ============ ÖRNEK PROJE VERİSİ ============

/*
// Örnek 1: Minecraft Build Projesi
{
    id: 1,
    title: "Kraliçe Kalesı",
    description: "Ortaçağ dönemine ait, detaylı mimari unsurları içeren büyük ölçekli kale projesi. İçerisinde taht odası, armorium ve yaşam alanları bulunmaktadır.",
    type: "Minecraft Build",
    status: "Tamamlandı",
    image: "assets/project-1-main.jpg",
    gallery: [
        "assets/project-1-main.jpg",
        "assets/project-1-detail1.jpg",
        "assets/project-1-detail2.jpg",
        "assets/project-1-night.jpg"
    ],
    downloadUrl: "downloads/kraliçe-kalesı.zip"
}

// Örnek 2: Oyun Geliştirme Projesi
{
    id: 2,
    title: "Mystic Shadows - 2D Macera Oyunu",
    description: "Pixel art stilde, atmosferik bir 2D macera oyunu. Oyuncu gizem dolu bir ormanı keşfederek eski saçlı yaratıklardan kaçmaya çalışıyor.",
    type: "Oyun Geliştirme",
    status: "Tamamlandı",
    image: "assets/game-project-1.jpg",
    gallery: [
        "assets/game-project-1.jpg",
        "assets/game-project-1-gameplay.jpg",
        "assets/game-project-1-boss.jpg"
    ],
    downloadUrl: "downloads/mystic-shadows.exe"
}

// Örnek 3: Sunucu Haritası
{
    id: 3,
    title: "SkyBlock Haritası",
    description: "Multiplayer SkyBlock oyununu desteklemek üzere tasarlanmış harita. Oyuncular kendi adalarını geliştirerek diğer oyuncularla rekabet edebilirler.",
    type: "Minecraft Map",
    status: "Beta Aşamasında",
    image: "assets/skyblock-map.jpg",
    gallery: [
        "assets/skyblock-map.jpg",
        "assets/skyblock-spawn.jpg",
        "assets/skyblock-islands.jpg"
    ],
    downloadUrl: "downloads/skyblock-map.zip"
}

// Örnek 4: Yapı Paketi
{
    id: 4,
    title: "Orta Çağ Yapı Seti",
    description: "Minecraft'ta orta çağ temalı yapıları inşa etmek için kullanılabilir yapı blokları ve dekorasyon öğelerini içeren kütüphane.",
    type: "Resource Pack",
    status: "Tamamlandı",
    image: "assets/resourcepack-medieval.jpg",
    gallery: [
        "assets/resourcepack-medieval.jpg",
        "assets/resourcepack-blocks.jpg"
    ],
    downloadUrl: "downloads/medieval-resourcepack.zip"
}
*/

// ============ KULLANMA TALIMATLARI ============

/*
1. Yukarıdaki örnek objeleri kopyalayın
2. js/projects.js dosyasını açın
3. Başlangıcında şu satırı bulun:
   const projects = [];

4. Aşağıdaki gibi doldurun:
   const projects = [
       { id: 1, title: "...", ... },
       { id: 2, title: "...", ... },
       ...
   ];

5. Veya dinamik olarak:
   projects.push({
       id: 1,
       title: "Proje Adı",
       ...
   });

GEREKLI ALANLAR:
- id: Benzersiz numara
- title: Proje adı
- description: Detaylı açıklama
- type: Proje türü (Minecraft Build, Oyun Geliştirme, vb.)
- status: Durumu (Tamamlandı, Beta, Devam Ediyor, vb.)
- image: Ana resim URL (jpg, png)
- gallery: Resim array'i (başında 'image' kullanılır)
- downloadUrl: İndirme linki veya dosya yolu
*/

// ============ ÖRNEK KOD ENTEGRASYON ============

/*
// Doğrudan HTML'den çağırmak (opsiyonel):
// <script>
//     const projects = [
//         {
//             id: 1,
//             title: "Örnek Proje",
//             description: "...",
//             type: "Minecraft Build",
//             status: "Tamamlandı",
//             image: "image.jpg",
//             gallery: ["img1.jpg"],
//             downloadUrl: "#"
//         }
//     ];
// </script>
// <script src="js/projects.js"></script>
*/

// ============ API BAĞLANTISI (İleri Seviye) ============

/*
Eğer bir backend API'niz varsa, projects.js'te:

fetch('https://your-api.com/projects')
    .then(res => res.json())
    .then(data => {
        projects = data;
        renderProjects();
    })
    .catch(err => {
        console.error('Projeler yüklenirken hata:', err);
        renderProjects(); // Boş projeleri göster
    });
*/

console.log(
    '%c📦 Projeler Örnek Veri Dosyası',
    'color: #FFD700; font-size: 12px;'
);
console.log(
    'Örnek veri dosyası yüklendi. Talimatlar için README.md dosyasını kontrol edin.',
    'color: #b0b0b0;'
);
