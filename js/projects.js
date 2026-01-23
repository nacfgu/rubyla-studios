/* =====================================================
   RUBYLA STUDIOS - PROJECTS PAGE JAVASCRIPT
   ===================================================== */

// ============ PROJECTS DATA ============
// Projeler dizisi (boş başlar, dinamik olarak doldurulabilir)
const projects = [
    // Örnek: Projeler buraya eklenecek
    // {
    //     id: 1,
    //     title: "Proje Adı",
    //     description: "Proje açıklaması...",
    //     type: "Minecraft Build",
    //     status: "Tamamlandı",
    //     image: "image-url",
    //     gallery: ["img1", "img2"],
    //     downloadUrl: "#"
    // }
];

// ============ DOM ELEMENTS ============
const projectsList = document.getElementById('projectsList');
const projectModal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');

// ============ RENDER PROJECTS ============
// Projeleri ekrana render et
function renderProjects() {
    if (projects.length === 0) {
        projectsList.innerHTML = `
            <div class="empty-projects">
                <i class="fas fa-inbox" style="font-size: 3rem; margin-bottom: 15px; display: block;"></i>
                Üzgünüz, burada henüz bir şey yok.
            </div>
        `;
        return;
    }

    projectsList.innerHTML = projects.map(project => `
        <div class="project-card" onclick="openProjectDetail(${project.id})">
            <div class="project-image">
                ${project.image ? `<img src="${project.image}" alt="${project.title}">` : '<i class="fas fa-image"></i>'}
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description.substring(0, 100)}${project.description.length > 100 ? '...' : ''}</p>
                <small style="color: #FFD700;">Tıkla Detaylar İçin →</small>
            </div>
        </div>
    `).join('');
}

// ============ PROJECT DETAIL ============
// Proje detay modalını aç
function openProjectDetail(projectId) {
    const project = projects.find(p => p.id === projectId);
    
    if (!project) return;

    // Başlık ve açıklama
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectDescription').textContent = project.description;
    document.getElementById('projectType').textContent = project.type;
    document.getElementById('projectStatus').textContent = project.status;

    // Galeri
    const gallery = document.getElementById('projectGallery');
    const images = project.gallery || [project.image];
    
    gallery.innerHTML = `
        <div class="gallery-main" id="galleryMain">
            ${images[0] ? `<img src="${images[0]}" alt="${project.title}">` : '<i class="fas fa-image" style="font-size: 3rem;"></i>'}
        </div>
        <div class="gallery-thumbnails">
            ${images.map((img, index) => `
                <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeGalleryImage('${img}', this)">
                    ${img ? `<img src="${img}" alt="Thumbnail ${index + 1}">` : '<i class="fas fa-image"></i>'}
                </div>
            `).join('')}
        </div>
    `;

    // İndirme butonu
    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.href = project.downloadUrl;
    downloadBtn.download = true;

    // Modalı aç
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ============ CHANGE GALLERY IMAGE ============
// Galeri resmini değiştir
function changeGalleryImage(imageUrl, thumbnailElement) {
    const galleryMain = document.getElementById('galleryMain');
    
    if (imageUrl) {
        galleryMain.innerHTML = `<img src="${imageUrl}" alt="Gallery Image">`;
    } else {
        galleryMain.innerHTML = '<i class="fas fa-image" style="font-size: 3rem;"></i>';
    }

    // Aktif thumbnail'i güncelle
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    thumbnailElement.classList.add('active');
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

// ============ KEYBOARD NAVIGATION ============
// Galeri için ok tuşları ile navigasyon
document.addEventListener('keydown', (e) => {
    if (!projectModal.classList.contains('active')) return;

    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const thumbnails = document.querySelectorAll('.thumbnail');
        const activeIndex = Array.from(thumbnails).findIndex(t => t.classList.contains('active'));
        
        let nextIndex;
        if (e.key === 'ArrowRight') {
            nextIndex = (activeIndex + 1) % thumbnails.length;
        } else {
            nextIndex = (activeIndex - 1 + thumbnails.length) % thumbnails.length;
        }

        thumbnails[nextIndex].click();
    }
});

// ============ LAZY LOADING ============
// Projeleri lazy load et
function setupLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ============ INITIALIZE ============
// Sayfayı başlat
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    setupLazyLoading();

    // Smooth scroll animasyonu
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 50);
    });
});

// ============ DYNAMIC PROJECT ADDITION ============
// (Gelecek kullanımlar için) Dinamik proje ekleme fonksiyonu
function addProject(projectData) {
    projects.push(projectData);
    renderProjects();
}

// Örnek:
// addProject({
//     id: projects.length + 1,
//     title: "Yeni Proje",
//     description: "Açıklama",
//     type: "Tür",
//     status: "Durumu",
//     image: "resim-url",
//     gallery: ["img1", "img2"],
//     downloadUrl: "#"
// });
