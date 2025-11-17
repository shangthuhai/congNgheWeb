document.addEventListener('DOMContentLoaded', () => {
    // 1. Hiệu ứng Navbar cố định khi cuộn
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Hiệu ứng Gõ chữ (Typewriter Effect)
    const taglineElement = document.querySelector('.tagline');
    const fullText = taglineElement.getAttribute('data-text');
    let i = 0;

    function typeWriter() {
        if (i < fullText.length) {
            // Thay thế textContent bằng text và thêm dấu gạch dưới nhấp nháy
            taglineElement.textContent = fullText.substring(0, i + 1) + ' |';
            i++;
            setTimeout(typeWriter, 100); // Tốc độ gõ chữ
        } else {
            // Loại bỏ dấu gạch dưới sau khi gõ xong
            taglineElement.textContent = fullText;
        }
    }

    // Bắt đầu hiệu ứng sau một khoảng trễ
    setTimeout(typeWriter, 500);


    // 3. Hiệu ứng Cuộn lộ diện (Scroll Reveal) cho các Section
    const revealElements = document.querySelectorAll('.reveal-content');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Thêm class 'visible' để kích hoạt CSS transition
                entry.target.classList.add('visible');
                // Ngừng theo dõi sau khi đã lộ diện
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Root Margin: Bắt đầu lộ diện khi phần tử chỉ còn cách viewport 100px
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1 // Lộ diện khi 10% phần tử hiển thị
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });
    
    // 4. Xử lý Form Liên hệ
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Thay thế bằng logic gửi form thực tế (ví dụ: AJAX hoặc Formspree)
        alert('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.');
        contactForm.reset();
    });

});
document.addEventListener('DOMContentLoaded', () => {
    // ... Phần code Navbar và Scroll Reveal (1, 3) giữ nguyên ...
    // ... Phần code Typewriter Effect (2) giữ nguyên ...

    // 4. Hiệu ứng Vòng lặp cho Tiêu đề Liên hệ
    const dynamicTextElement = document.getElementById('contact-dynamic-text');
    const phrases = ["tạo dự án mới", "bắt đầu một thử thách", "nói về công nghệ", "tìm cơ hội việc làm"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeContactText() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            // Xóa chữ
            charIndex--;
        } else {
            // Gõ chữ
            charIndex++;
        }

        dynamicTextElement.textContent = currentPhrase.substring(0, charIndex) + '|';

        if (!isDeleting && charIndex === currentPhrase.length) {
            // Đã gõ xong, bắt đầu xóa sau 1.5s
            isDeleting = true;
            setTimeout(typeContactText, 1500);
        } else if (isDeleting && charIndex === 0) {
            // Đã xóa xong, chuyển sang cụm từ tiếp theo
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeContactText, 500);
        } else {
            // Tiếp tục gõ hoặc xóa
            const typingSpeed = isDeleting ? 50 : 100; // Tốc độ xóa nhanh hơn
            setTimeout(typeContactText, typingSpeed);
        }
    }

    // Bắt đầu hiệu ứng vòng lặp
    setTimeout(typeContactText, 3000);
    
    // 5. Xử lý Form Liên hệ (Giữ nguyên)
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.');
        contactForm.reset();
    });
});