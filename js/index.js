document.addEventListener("DOMContentLoaded", () => {
    // 스크롤 감지
    const elements = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('active');
        }
    });
    });

    elements.forEach(el => observer.observe(el));

});