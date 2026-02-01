/* Team renderer for Rubyla Studios */
const teamMembers = [
    { name: 'nacfgu', title: 'Kurucu', insta: 'https://www.instagram.com/nacfguisback/' },
    { name: 'obonizec', title: 'Kurucu Admin', insta: 'https://www.instagram.com/obonizec/' },
    { name: 'wurtes', title: 'Kadim Admin', insta: 'https://www.instagram.com/m.ali.kaya/' },
    { name: 'fluffyduck', title: 'Normal Admin', insta: 'https://www.instagram.com/real.kilic/' },
    { name: 'cnr.gns', title: 'Normal Admin', insta: 'https://www.instagram.com/cnr.genis' },
    { name: 'neah', title: 'Normal Admin', insta: 'https://www.instagram.com/neahs565/' },
    { name: 'darkhunter', title: 'Normal Admin', insta: 'https://www.instagram.com/baran_eray_/' },
    { name: 'titan', title: 'Normal Admin', insta: 'https://www.instagram.com/bqocuemirhan/' }
];

function initials(name) {
    // produce initials from name-like string
    const parts = name.replace(/\./g, ' ').split(/\s+/).filter(Boolean);
    if (parts.length === 1) return parts[0].slice(0,2).toUpperCase();
    return (parts[0][0] + parts[parts.length-1][0]).toUpperCase();
}

function renderTeam() {
    const grid = document.getElementById('teamGrid');
    grid.innerHTML = teamMembers.map(member => `
        <a class="staff-card" href="${member.insta}" target="_blank" rel="noopener noreferrer" title="Profili Görüntüle: ${member.name}">
            <div class="avatar" aria-hidden="true"><i class="fas fa-user"></i></div>
            <div class="staff-info">
                <h3 class="staff-name">${member.name}</h3>
                <span class="staff-title">${member.title}</span>
            </div>
        </a>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderTeam();
});