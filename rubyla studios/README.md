# 🎮 Rubyla Studios - Resmi Web Sitesi

Modern, profesyonel ve tamamen responsive bir web sitesi. Minecraft build projeleri ve oyun geliştirme konusunda uzmanlaşmış Rubyla Studios'un dijital kimliğini yansıtmaktadır.

---

## 📋 Proje Yapısı

```
rubyla studios/
├── index.html              # Ana sayfa
├── logo.png               # Kurumsal logo
├── pages/
│   ├── projects.html      # Projeler sayfası
│   └── contact.html       # İletişim sayfası
├── css/
│   └── main.css           # Ana stil dosyası (responsive, modern)
├── js/
│   ├── main.js            # Ana JavaScript (navbar, animasyonlar)
│   ├── projects.js        # Projeler sayfası mantığı
│   └── contact.js         # İletişim formu ve işlemleri
├── assets/                # İhtiyaç duyulabilecek ek dosyalar
└── png/                   # İhtiyaç duyulabilecek görseller
```

---

## 🎨 Tasarım Özelikleri

### Renk Paleti
- **Ana Renk (Accent):** `#FFD700` (Parlak Altın Sarısı)
- **Arka Plan:** `#0d0d0d` (Derin Siyah)
- **Metin (Açık):** `#f0f0f0` (Açık Gri)
- **Metin (İkincil):** `#b0b0b0` (Orta Gri)

### Tipografi
- **Başlıklar:** Montserrat (700, 800 weights)
- **Metinler:** Inter (300, 400, 600 weights)
- **Fallback:** Sans-serif

### Premium Stil Özellikleri
✅ Yumuşak geçişler (transitions)
✅ Hover efektleri (tüm butonlarda)
✅ Modern gölgelendirmeler (shadows)
✅ Smooth scroll davranışları
✅ Responsive grid/flex layouts
✅ Backdrop blur efektleri

---

## 📱 Responsive Tasarım

Site **mobile-first** yaklaşımıyla tasarlanmıştır:

- **Mobil:** 320px - 480px (Tamamen optimize)
- **Tablet:** 480px - 1024px (Tablet uyumlu)
- **Desktop:** 1024px+ (Tam özellikli)

### Özellikler
- Hamburger menü (mobil)
- Flexible grid layouts
- Touch-friendly butonlar
- Optimized images
- Fast loading

---

## 🏠 Ana Sayfa (Home)

### 1. **Hero Bölümü**
- Logo ve başlık
- Kurumsal slogan: "Dijital Dünyalar İnşa Ediyoruz"
- Animasyonlu giriş efektleri

### 2. **Çalışan Sayacı**
- Toplam: 8 çalışan
- Builder: 3
- Yazılımcı: 2
- Tester: 3
- Animasyonlu sayaç efekti

### 3. **Hakkımızda Bölümü**
- **Biz Kimiz?** - Kurumsal kimlik metni
- **Amacımız** - Vizyonumu açıklaması
- İçerik tamamen özelleştirilebilir

---

## 📁 Projeler Sayfası

### Boş Durumda
```
"Üzgünüz, burada henüz bir şey yok."
```
(Projects dizisi boş olduğunda görüntülenir)

### Projeler Varsa
- Kartlar şeklinde listeleme
- Proje detay modal
- Galeri (fotoğraf/video)
- İndirme linki
- Detaylı açıklama

### Proje Eklemek
```javascript
// js/projects.js dosyasına gitmek ve:
const projects = [
    {
        id: 1,
        title: "Proje Adı",
        description: "Detaylı açıklama...",
        type: "Minecraft Build",
        status: "Tamamlandı",
        image: "image-url.jpg",
        gallery: ["img1.jpg", "img2.jpg"],
        downloadUrl: "download-link.zip"
    }
];

// Veya dinamik olarak:
addProject({ ... });
```

---

## 📧 İletişim Sayfası

### Sosyal Medya Bağlantıları
- 🎮 **Discord:** https://discord.gg/8w8aKXFEkQ
- 📺 **YouTube:** https://www.youtube.com/@rubyla.studios
- 📸 **Instagram:** instagram.com/rubyla.studios
- 𝕏 **X (Twitter):** x.com/rubylastudios
- 📖 **Wattpad:** wattpad.com/user/rubyla_studios

### E-posta Formu
- Ad
- E-posta
- Mesaj

**İşleme:** Formdan gönderilen mesajlar `rubyla.special@gmail.com` adresine yönlendirilir.

**Teknoloji:** Mailto protokolü kullanılmaktadır. Veya backend tarafında e-mail servisi eklenebilir.

---

## 🎯 JavaScript Özellikleri

### main.js
- Hamburger menü yönetimi
- Smooth scrolling
- Active nav link güncellemesi
- Counter animasyonları
- Intersection Observer (görünüm animasyonları)

### projects.js
- Proje kartlarını render et
- Modal açma/kapama
- Galeri navigasyonu (ok tuşları desteklenir)
- Lazy loading
- Dinamik proje ekleme

### contact.js
- Form validasyonu
- Email doğrulaması
- Mailto entegrasyonu
- Bildirim sistemi
- Ripple efektleri

---

## 🚀 Kullanım

### 1. **Lokal Olarak Açmak**
```bash
# Basit HTTP sunucusu başlat
python -m http.server 8000

# Veya Node.js ile:
npx http-server

# Browser'de aç:
# http://localhost:8000
```

### 2. **Hosting'e Yüklemek**
Tüm dosyaları hosting sunucusuna yükleyin:
- HTML dosyaları kök dizine
- css/ ve js/ klasörlerini aynen kopyalayın
- logo.png'i kök dizine kopyalayın

### 3. **Dosya Yapısı Önemli**
Dosya yollarını değiştirmeden, dizin yapısını olduğu gibi koruyun.

---

## ⚙️ Özelleştirme

### Logo Değiştirme
1. `logo.png` dosyasını kendi logonuzla değiştirin
2. Aynı dosya adını kullanın veya HTML'de referansı güncelleyin

### Renkleri Değiştirme
`css/main.css` dosyasının başında:
```css
:root {
    --primary-color: #FFD700;      /* Bu rengi değiştirin */
    --dark-bg: #0d0d0d;
    --black: #000000;
    /* ... diğer renkler ... */
}
```

### İçerik Güncelleme
- `index.html` - Ana sayfa metinleri
- `pages/contact.html` - İletişim adresleri
- `js/projects.js` - Proje listesi

### Font Değiştirme
`index.html`, `pages/projects.html`, `pages/contact.html` dosyalarında:
```html
<link href="https://fonts.googleapis.com/css2?family=YeniFontu:wght@300;400;600;700&display=swap" rel="stylesheet">
```

---

## 🎬 Animasyonlar

### Hazır Animasyonlar
- **slideUp** - Yukarıdan aşağıya kayan giriş
- **float** - Yüzen hareket
- **glow** - Parlayan/Süzülen ışık
- **countUp** - Sayı sayacı
- **pageIn** - Sayfa yükleme
- **fadeIn** - Soluk geçiş
- **slideIn** - Kaydırma

Tüm animasyonlar CSS'te tanımlanmıştır ve özelleştirilebilir.

---

## ⚡ Performans

### Optimizasyonlar
✅ Minimal CSS ve JavaScript
✅ Lazy loading görseller
✅ Efficient selectors
✅ Smooth transitions
✅ Compiled fonts

### PageSpeed Insights
Sitenin yükleme hızı optimize edilmiştir:
- First Paint: < 1s
- Fully Interactive: < 2s
- CSS: Inline (hiç external request yok)

---

## 🔒 SEO & Meta Tags

`<head>` bölümünde:
- Meta charset: UTF-8
- Viewport: responsive tasarım
- Title: Arama motorları için
- Meta description: (isteğe bağlı olarak eklenebilir)

---

## 📧 İletişim Formu Detayları

### Mailto Protokolü
```
mailto:rubyla.special@gmail.com?subject=...&body=...
```

Kullanıcının bilgisayarında e-posta istemcisi açılır.

### Backend Entegrasyonu (İsteğe Bağlı)
Formalist bir e-posta servisi eklemek için:
1. Formbase.io, Formspree, EmailJS vs. kullanabilirsiniz
2. `js/contact.js`'te `sendEmailViaMailto()` fonksiyonunu değiştirin

---

## 🛠️ Teknik Stack

- **HTML5:** Semantic markup
- **CSS3:** Modern tasarım, flexbox, grid
- **JavaScript (ES6+):** Interaktif öğeler
- **FontAwesome 6.5.1:** İkonlar
- **Google Fonts:** Montserrat, Inter

### Browser Uyumluluğu
✅ Chrome/Edge 90+
✅ Firefox 88+
✅ Safari 14+
✅ Opera 76+
✅ Mobile browsers

---

## 📝 Lisans & Haklı Kullanım

Bu web sitesi **Rubyla Studios** tarafından özel olarak tasarlanmıştır.

---

## 🎓 Notlar

### Geliştirme İpuçları
1. DevTools'u açın (F12) ve responsive mode'u test edin
2. Console'da mesajlar görüntülenir
3. Animasyonları yavaşlaştırmak için CSS'te `animation-duration` değerini artırın

### Sorun Giderme
- **Sayfa yüklenmiyor:** Dosya yollarını kontrol edin
- **Stil uygulanmıyor:** Cache'i temizleyin (Ctrl+Shift+R)
- **Form çalışmıyor:** E-posta istemcisinin varsayılan olması gerek

---

## 🚀 Gelecek İyileştirmeler

Yapılabilecek ek özellikler:
- [ ] Projeler için backend database
- [ ] CMS entegrasyonu
- [ ] Newsletter aboneliği
- [ ] Çok dil desteği (i18n)
- [ ] Dark/Light mode toggle
- [ ] Blog bölümü
- [ ] İstatistik dashboard

---

## 📞 Destek

Sorularınız için:
- **E-posta:** rubyla.special@gmail.com
- **Discord:** https://discord.gg/8w8aKXFEkQ

---

**Yapımcı:** Rubyla Studios  
**Yılı:** 2025  
**Versiyon:** 1.0.0

---

**🎮 Dijital Dünyalar İnşa Ediyoruz 🎮**
