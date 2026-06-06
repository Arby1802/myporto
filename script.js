// JAUH AMAT

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
        
        if (navbar.classList.contains('active')) {
            menuIcon.classList.remove('bx-menu');
            menuIcon.classList.add('bx-x');
        } else {
            menuIcon.classList.remove('bx-x');
            menuIcon.classList.add('bx-menu');
        }
    });
    
    const navLinks = navbar.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
            menuIcon.classList.add('bx-menu');
        });
    });

    document.addEventListener('click', (event) => {
        if (!navbar.contains(event.target) && !menuIcon.contains(event.target) && navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
            menuIcon.classList.add('bx-menu');
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === "#" || targetId === "") return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

const projectData = {
    1: {
        title: "Windows Server 2022 Hardening Using HardeningKitty & CIS Benchmark v5.0.0",
        category: "Defensive",
        year: "2025",
        stack: "Oracle, HardeningKitty, CIS Benchmark v5.0.0",
        role: "Blue Team",
        desc: "Conducted a comprehensive security hardening assessment on a Windows Server environment using HardeningKitty. Implemented security configurations including PowerShell logging, Windows Firewall policies, network security controls, exploit protection, and system service hardening, achieving a security compliance score of 78.9% with zero critical vulnerabilities detected.",
        features: [
            "Security Hardening Implementation",
            "Firewall & Network Protection",
            "Security Assessment & Compliance",
            "Exploit Mitigation & System Protection"
        ],
        reportUrl: "reports/Hardening_Report.pdf",
        githubUrl: "#",
        img: "Hardening.png"
    },
    2: {
        title: "Project Two",
        category: "UI/UX Design",
        year: "2024",
        stack: "Figma, HTML, CSS, JavaScript",
        role: "UI/UX Designer & Frontend Dev",
        desc: "Desain antarmuka pengguna yang bersih dan modern. Proyek ini fokus pada user experience yang intuitif dan aksesibilitas tinggi.",
        features: [
            "Design system yang konsisten",
            "Prototype interaktif di Figma",
            "Animasi CSS yang smooth",
            "Accessibility score 95+"
        ],
        reportUrl: null,
        githubUrl: "#",
        img: "img.png"
    },
    3: {
        title: "Project Three",
        category: "Cyber Security",
        year: "2025",
        stack: "Python, Bash, Wireshark",
        role: "Security Researcher",
        desc: "Proyek riset keamanan jaringan yang mencakup vulnerability assessment dan penetration testing pada infrastruktur jaringan internal.",
        features: [
            "Vulnerability scanning otomatis",
            "Network traffic analysis",
            "Security report generation",
            "Mitigation recommendations"
        ],
        reportUrl: null,
        githubUrl: "#",
        img: "img.png"
    },
    4: {
        title: "Project Four",
        category: "Fullstack Development",
        year: "2025",
        stack: "Vue.js, Laravel, MySQL",
        role: "Fullstack Developer",
        desc: "Aplikasi manajemen inventaris berbasis web yang dilengkapi fitur laporan otomatis, notifikasi stok menipis, dan ekspor data ke Excel.",
        features: [
            "Manajemen stok real-time",
            "Laporan otomatis PDF & Excel",
            "Notifikasi stok menipis",
            "Multi-user dengan role management"
        ],
        reportUrl: null,
        githubUrl: "#",
        img: "img.png"
    }
};

const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');

function openProjectModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalCategory').textContent = data.category;
    document.getElementById('modalDesc').textContent = data.desc;
    document.getElementById('modalYear').textContent = data.year;
    document.getElementById('modalStack').textContent = data.stack;
    document.getElementById('modalRole').textContent = data.role;
    document.getElementById('modalImg').src = data.img;
    document.getElementById('modalImg').alt = data.title;

    const downloadBtn = document.getElementById('modalDownloadBtn');
    if (data.reportUrl) {
        downloadBtn.href = data.reportUrl;
        downloadBtn.classList.remove('no-report');
    } else {
        downloadBtn.href = '#';
        downloadBtn.classList.add('no-report');
    }

    document.getElementById('modalGithubBtn').href = data.githubUrl || '#';

    document.getElementById('modalFeaturesList').innerHTML = data.features
        .map(f => `<div class="modal-feature-item"><i class='bx bx-check-circle'></i><span>${f}</span></div>`)
        .join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

document.querySelectorAll('.review-btn').forEach(btn => {
    btn.addEventListener('click', () => openProjectModal(btn.getAttribute('data-project')));
});

if (modalClose) modalClose.addEventListener('click', closeProjectModal);

if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeProjectModal(); });

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) closeProjectModal();
});
