document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript Portofolio Siap!"); // Untuk cek apakah file JS sudah terbaca

    // Tambahkan di dalam document.addEventListener('DOMContentLoaded', () => { ... })

    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Ubah ikon dari ☰ ke ✕ (tanda silang) saat terbuka
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        });
    }

    // Tutup menu otomatis saat salah satu link diklik
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-xmark');
        });
    });
    // --- 1. GMAIL HANDLER ---
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Ambil data dari input
            const nama = document.getElementById('senderName').value;
            const email = document.getElementById('senderEmail').value;
            const pesan = document.getElementById('senderMessage').value;

            // Alamat tujuan
            const emailTujuan = "innaputrimeida@gmail.com";

            // Format isi email
            const subjek = encodeURIComponent(`Pesan dari Portfolio: ${nama}`);
            const isiBody = encodeURIComponent(`Nama: ${nama}\nEmail: ${email}\n\nPesan:\n${pesan}`);

            // Link Gmail Web
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTujuan}&su=${subjek}&body=${isiBody}`;

            // Buka di tab baru
            window.open(gmailUrl, '_blank');

            // Reset form
            this.reset();
        });
    } else {
        console.error("Error: ID 'contactForm' tidak ditemukan di HTML!");
    }

    // --- 2. SMOOTH SCROLL ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- 3. SCROLL ANIMATION ---
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-card, .project-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});