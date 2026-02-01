/* =====================================================
   RUBYLA STUDIOS - PROJECTS PAGE JAVASCRIPT
   4 KATEGORİ SİSTEMİ
   ===================================================== */

// ============ CATEGORIES DATA ============
// 4 Ana Kategori
const categories = [
    {
        id: 'games',
        title: 'Oyunlar',
        titleEN: 'Games',
        icon: 'fa-gamepad',
        description: 'Eğlenceli oyunlar ve interaktif deneyimler',
        color: '#FF6B6B',
        projects: []
    },
    {
        id: 'apps',
        title: 'Uygulamalar',
        titleEN: 'Apps',
        icon: 'fa-mobile-alt',
        description: 'Faydalı araçlar ve uygulamalar',
        color: '#4ECDC4',
        projects: [
            {
                id: 'rubitga',
                title: 'RUbitga Launcher',
                status: 'Kapalı Alpha',
                statusEN: 'Closed Alpha',
                image: '../png/rubitga logo.png',
                shortDescription: 'Tüm Rubyla oyunlarını ve araçlarını tek merkezden yönetin',
                fullDescription: 'Tüm Rubyla oyunlarını ve araçlarını tek bir merkezden yöneten, düşük sistem dostu, entegre kütüphane desteği sunan bir ekosistem kapısı.',
                type: 'Launcher',
                downloadUrl: '#',
                isDeveloping: true
            },
            {
                id: 'ruto',
                title: 'RUto',
                status: 'Kapalı Alpha',
                statusEN: 'Closed Alpha',
                image: '../png/RUto logo.png',
                shortDescription: 'Minimalist felsefeyle tasarlanmış modern not alma asistanı',
                fullDescription: 'Minimalist felsefeyle tasarlanmış, açık kaynak kodlu, yüksek kişiselleştirme imkanı sunan ve verimliliği odak noktasına alan yeni nesil bir not alma asistanı.',
                type: 'Productivity App',
                downloadUrl: '#',
                isDeveloping: true
            }
        ]
    },
    {
        id: 'animations',
        title: 'Animasyonlar',
        titleEN: 'Animations',
        icon: 'fa-film',
        description: 'Yaratıcı animasyon ve görsel içerikleri',
        color: '#FFD700',
        projects: []
    },
    {
        id: 'extra',
        title: 'Ekstra',
        titleEN: 'Extra',
        icon: 'fa-star',
        description: 'Özel projeler ve geliştirimler',
        color: '#9B59B6',
        projects: [
            {
                id: 'ru-admin',
                title: 'RU Adminlik Sistemi',
                status: 'Kapalı Alpha',
                statusEN: 'Closed Alpha',
                image: '../png/ruas.png',
                shortDescription: 'İşletmeler ve topluluk yönetimi çözümleri',
                fullDescription: 'İşletmeler ve topluluk yönetimi için optimize edilmiş, maliyet etkin ve hızlı yönetim çözümleri sunan dijital bir asistan sistemidir. Şu an Kapalı Alpha (Closed Alpha) aşamasında olup, performans testleri titizlikle sürdürülmektedir.',
                type: 'Admin System',
                downloadUrl: '#',
                isDeveloping: true
            },
            {
                id: 'ru-kayit',
                title: 'RU Kayıt Sistemi (Talent Hub)',
                status: 'Kapalı Alpha',
                statusEN: 'Closed Alpha',
                image: '../png/ruks.png',
                shortDescription: 'Yetenekli kişileri seçme ve değerlendirme platformu',
                fullDescription: 'Geleneksel başvuru formlarını bir kenara bırakıyoruz. Build ekibimize katılmak isteyen yetenekleri, kendi geliştirdiğimiz özel bir Minecraft sunucusunda ağırlıyoruz. Adayların; mimari estetik (build), teknik yazılım, kriz yönetimi (adminlik) ve test yeteneklerini interaktif bir ortamda, oyunlaştırılmış (gamified) bir değerlendirme süreciyle ölçümlüyoruz. Geleceğin üreticilerini samimi ama profesyonel bir ortamda seçiyoruz.',
                type: 'Talent Platform',
                downloadUrl: '#',
                isDeveloping: true
            }
        ]
    }
];

// ============ DOM ELEMENTS ============
const categoryView = document.getElementById('categoryView');
const projectsListView = document.getElementById('projectsListView');
const projectsList = document.getElementById('projectsList');
const projectModal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');
const backBtn = document.getElementById('backBtn');

let currentCategory = null;

// ============ RENDER CATEGORIES ============
// Ana kategori kartlarını render et
function renderCategories() {
    const categoriesGrid = document.querySelector('.categories-grid');
    
    categoriesGrid.innerHTML = categories.map(category => `
        <div class="category-card" onclick="selectCategory('${category.id}')">
            <div class="category-icon">
                <i class="fas ${category.icon}"></i>
            </div>
            <div class="category-content">
                <h3>${category.title}</h3>
                <p>${category.description}</p>
                <small class="category-count">${category.projects.length} Proje</small>
            </div>
            <div class="category-arrow">
                <i class="fas fa-arrow-right"></i>
            </div>
        </div>
    `).join('');
}

// ============ SELECT CATEGORY ============
// Bir kategoriye tıklandığında
function selectCategory(categoryId) {
    currentCategory = categories.find(c => c.id === categoryId);
    
    if (!currentCategory) return;

    // Kategori başlığını güncelle
    document.getElementById('categoryTitle').textContent = currentCategory.title;
    
    // Projeleri render et
    renderProjects();
    
    // Görünümü değiştir
    categoryView.style.display = 'none';
    projectsListView.style.display = 'block';
    
    // Smooth scroll
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============ RENDER PROJECTS ============
// Seçilen kategorideki projeleri render et
function renderProjects() {
    if (!currentCategory) return;

    const projects = currentCategory.projects;
    
    if (projects.length === 0) {
        projectsList.innerHTML = `
            <div class="empty-projects">
                <div class="empty-illustration">
                    <i class="fas fa-inbox"></i>
                </div>
                <h3>Üzgünüz, burada henüz görülebilecek bir şey yok.</h3>
                <p>Çok yakında!</p>
            </div>
        `;
        return;
    }

    projectsList.innerHTML = projects.map(project => `
        <div class="project-card" onclick="openProjectDetail('${project.id}')">
            <div class="project-image">
                ${project.image ? `<img src="${project.image}" alt="${project.title}">` : '<i class="fas fa-image"></i>'}
                ${project.status === 'Geliştirme Aşamasında' || project.status === 'In Development' ? 
                    `<div class="dev-badge">${project.status}</div>` : 
                    `<div class="status-badge">${project.status}</div>`}
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.shortDescription}</p>
                <small style="color: #FFD700;">Tıkla Detaylar İçin →</small>
            </div>
        </div>
    `).join('');
}

// ============ PROJECT DETAIL ============
// Proje detay modalını aç
function openProjectDetail(projectId) {
    if (!currentCategory) return;
    
    const project = currentCategory.projects.find(p => p.id === projectId);
    
    if (!project) return;

    // Başlık ve açıklama
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectDescription').textContent = project.fullDescription;
    document.getElementById('projectType').textContent = project.type;
    document.getElementById('projectStatus').textContent = project.status;

    // Galeri
    const gallery = document.getElementById('projectGallery');
    gallery.innerHTML = `
        <div class="gallery-main" id="galleryMain">
            ${project.image ? `<img src="${project.image}" alt="${project.title}">` : '<i class="fas fa-image" style="font-size: 3rem;"></i>'}
        </div>
    `;

    // İndirme butonu
    const downloadBtn = document.getElementById('downloadBtn');
    if (project.isDeveloping) {
        // Geliştirme aşamasındaki projelerin indirme butonunu gizle
        downloadBtn.style.display = 'none';
    } else {
        downloadBtn.style.display = 'inline-flex';
        downloadBtn.href = project.downloadUrl;
    }

    // Modalı aç
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ============ CLOSE MODAL ============
// Modalı kapat
function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Modal kapatma olayları
modalClose.addEventListener('click', closeProjectModal);

// Modal dışına tıklanıldığında kapat
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeProjectModal();
    }
});

// ESC tuşuna basıldığında kapat
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// ============ BACK BUTTON ============
// Kategorilere geri dön
backBtn.addEventListener('click', () => {
    currentCategory = null;
    categoryView.style.display = 'block';
    projectsListView.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============ INITIALIZE ============
// Sayfayı başlat
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();

    // Kategori kartlarına smooth animation
    setTimeout(() => {
        const categoryCards = document.querySelectorAll('.category-card');
        categoryCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.9)';
            card.style.transition = `all 0.5s ease ${index * 0.1}s`;
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, 50);
        });
    }, 100);
});
