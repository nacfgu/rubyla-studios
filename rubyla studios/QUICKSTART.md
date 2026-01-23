# 🚀 Rubyla Studios Web Sitesi - Hızlı Başlangıç

## 📋 Proje Özeti

Rubyla Studios için oluşturulan **modern, profesyonel ve tamamen responsive** web sitesi.

**Teknoloji:** HTML5 + CSS3 + Vanilla JavaScript  
**Tasarım:** Dark theme + Gold accents  
**Cihazlar:** Mobile-first (tüm cihazlar destekleniyor)

---

## 📁 Dosya Yapısı

```
rubyla studios/
├── index.html                    # ANA SAYFA
├── logo.png                      # Kurumsal Logo
├── css/
│   └── main.css                 # Tüm sayfalar için CSS
├── js/
│   ├── main.js                  # Genel işlevler
│   ├── projects.js              # Projeler sayfası
│   ├── contact.js               # İletişim sayfası
│   └── projects-example.js      # Örnek proje verileri
├── pages/
│   ├── projects.html            # PROJELER SAYFASI
│   └── contact.html             # İLETİŞİM SAYFASI
├── README.md                     # Detaylı dokümantasyon
├── INSTALLATION.md              # Teknik özet
└── assets/                       # Ek dosyalar (opsiyonel)
```

---

## ⚡ İlk Adımlar

### 1. **Lokal Sunucuda Açmak**

**Windows PowerShell:**
```powershell
cd "c:\Users\black\rubyla studios"
python -m http.server 8000
```

**macOS/Linux Terminal:**
```bash
cd ~/rubyla\ studios
python3 -m http.server 8000
```

**Browser'de:**
```
http://localhost:8000
```

### 2. **Dosya Yapısını Korumak**
Tüm dosyaları ve klasörleri aynen tutun. Yol yapısı önemlidir!

### 3. **Logo Güncelleme**
Kendi logonuzu `logo.png` olarak kaydedin ve mevcut dosyayı değiştirin.

---

## 🎨 Sayfa İçerikleri

### 📄 **Ana Sayfa (index.html)**
- Hero bölümü (başlık + logo)
- Çalışan sayacı (8 total)
- Hakkımızda bölümü
- Footer

### 📁 **Projeler Sayfası (pages/projects.html)**
- Proje kartları
- Detay modal (galeri + bilgiler)
- Boş durumda: "Henüz bir şey yok"

### 💬 **İletişim Sayfası (pages/contact.html)**
- Sosyal medya bağlantıları (5 platform)
- E-posta formu
- Mailto entegrasyonu

---

## 🔧 Hızlı Düzenlemeler

### 1. **Ana Sayfa Metnini Değiştirmek**

`index.html` dosyasını açın ve aşağıdaki bölümleri düzenleyin:

```html
<!-- Başlık -->
<h1 class="hero-title">Rubyla Studios</h1>
<p class="hero-subtitle">Dijital Dünyalar İnşa Ediyoruz</p>

<!-- Çalışan Sayıları (satır ~60)
- "Builder: 3"
- "Yazılımcı: 2"
- "Tester: 3"

<!-- Hakkımızda Metinleri (satır ~100-130)
```

### 2. **Projeler Eklemek**

`js/projects.js` dosyasını açın:

```javascript
const projects = [
    {
        id: 1,
        title: "Proje Adı",
        description: "Proje açıklaması...",
        type: "Minecraft Build",
        status: "Tamamlandı",
        image: "image.jpg",
        gallery: ["img1.jpg", "img2.jpg"],
        downloadUrl: "download.zip"
    }
];
```

### 3. **İletişim Bilgilerini Değiştirmek**

`pages/contact.html` dosyasında bağlantıları güncelleyin:

```html
<a href="https://discord.gg/8w8aKXFEkQ" target="_blank">
<a href="https://www.youtube.com/@rubyla.studios" target="_blank">
<!-- Diğer sosyal medya linkleri... -->
```

### 4. **Renkleri Değiştirmek**

`css/main.css` dosyasının başında:

```css
:root {
    --primary-color: #FFD700;      /* Sarı (değiştir) */
    --dark-bg: #0d0d0d;            /* Siyah (değiştir) */
    --text-light: #f0f0f0;         /* Açık metin */
    /* ... */
}
```

---

## 🎯 Temel Özellikler

✅ **Responsive Design** - Mobil, tablet, desktop  
✅ **Hover Efektleri** - Tüm butonlarda  
✅ **Smooth Animations** - Sayfa geçişleri, counter  
✅ **Dark Theme** - Premium görünüm  
✅ **Form Validasyonu** - Email kontrol  
✅ **Modal Galeri** - Proje detayları  
✅ **Mobil Menü** - Hamburger menu  
✅ **Optimized** - Hızlı yükleme  

---

## 📱 Mobil Testi

**Windows:** DevTools (F12) → Toggle Device Toolbar (Ctrl+Shift+M)  
**Mac:** DevTools (Cmd+Option+I) → Toggle Device Toolbar  

Şu cihazları test et:
- iPhone 12 (390x844)
- iPad Pro (1024x1366)
- Samsung Galaxy (412x915)

---

## 🐛 Sorun Giderme

| Problem | Çözüm |
|---------|-------|
| Sayfa yüklenmiyor | Dosya yollarını kontrol et, `http://` protokolü kullan |
| CSS yok | Cache temizle (Ctrl+Shift+Delete), DevTools Network kontrol |
| JavaScript hata | DevTools Console'u aç (F12), hataları oku |
| Form çalışmıyor | E-posta istemcisini kontrol et, mailto: protokolü gerekli |
| Mobil menü kapanmıyor | Refresh yap, cache temizle |

---

## 📊 Browser Uyumluluğu

| Browser | Destek | Not |
|---------|--------|-----|
| Chrome 90+ | ✅ Full | Recommended |
| Firefox 88+ | ✅ Full | Full support |
| Safari 14+ | ✅ Full | macOS/iOS |
| Edge 90+ | ✅ Full | Chromium based |
| Mobile | ✅ Full | iOS/Android |

---

## 🚀 Hosting'e Yükleme

### Adım 1: Tüm dosyaları hazırla
```
rubyla studios/
├── index.html
├── css/
├── js/
├── pages/
├── logo.png
└── README.md
```

### Adım 2: FTP/SFTP ile yükle
- Hosting sunucusuna bağlan
- Kök dizine (`public_html/`) tüm dosyaları yükle
- **Dizin yapısını koru**

### Adım 3: Domain ayarla
- Hosting kontrol panelinde domain ayarla
- DNS kayıtlarını güncelle (gerekirse)

### Adım 4: Test et
- `https://rubyla-studios.com` ziyaret et
- Tüm sayfaları kontrol et
- Mobile test yap

---

## 💾 Yedekleme

Düzenlemeleri yaptıktan sonra:
1. Tüm dosyaları zip olarak sıkıştır
2. Buluta yükle (Google Drive, Dropbox, GitHub)
3. Düzenlemeleri nota al

```bash
# ZIP oluştur (Windows)
Compact-Archive -Path "rubyla studios" -DestinationPath "rubyla-backup.zip"

# ZIP oluştur (Mac/Linux)
zip -r rubyla-backup.zip "rubyla studios"
```

---

## 📞 Sosyal Medya Bağlantıları

- **Discord:** https://discord.gg/8w8aKXFEkQ
- **YouTube:** @rubyla.studios
- **Instagram:** @rubyla.studios
- **X:** @rubylastudios
- **Wattpad:** rubyla_studios
- **E-posta:** rubyla.special@gmail.com

---

## 📚 Detaylı Dokümantasyon

- **README.md** - Tam proje dokümantasyonu
- **INSTALLATION.md** - Teknik detaylar
- **projects-example.js** - Proje veri örnekleri

---

## ⚙️ Gelişmiş Özelleştirmeler

### Animasyon Hızını Değiştirmek
`css/main.css` dosyasında:
```css
@keyframes slideUp {
    /* duration değerini değiştir */
}
```

### Font Değiştirmek
`index.html` (satır ~9):
```html
<link href="https://fonts.googleapis.com/css2?family=YeniFontu:wght@300;400;600;700&display=swap">
```

### Backend E-posta Entegrasyonu
`js/contact.js` dosyasında `sendEmailViaMailto()` fonksiyonunu değiştir ve bir API servisi ekle:
- Formspree.io
- Emailjs.com
- Sendgrid

---

## 🎓 Öğrenme Kaynakları

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [JavaScript Info](https://javascript.info/)
- [FontAwesome Icons](https://fontawesome.com/icons)

---

## ✅ Kontrol Listesi

Sitesini yayınlamadan önce kontrol et:

- [ ] Logo doğru yüklenmişti
- [ ] Tüm linkler çalışıyor
- [ ] Form test edildi
- [ ] Mobil tasarım test edildi
- [ ] Tüm sosyal medya linkleri doğru
- [ ] İletişim e-posta adresi doğru
- [ ] Favicon ayarlandı (opsiyonel)
- [ ] Meta description eklendi (opsiyonel)
- [ ] Tüm sayfalar yüklenip açılıyor

---

## 📞 Destek

Sorularınız için:
- 📧 E-posta: rubyla.special@gmail.com
- 🎮 Discord: https://discord.gg/8w8aKXFEkQ

---

**Hızlı Başlangıç Tamamlandı! 🚀**

Daha fazla bilgi için **README.md** dosyasını oku.

**🎨 Rubyla Studios - Dijital Dünyalar İnşa Ediyoruz 🎨**
