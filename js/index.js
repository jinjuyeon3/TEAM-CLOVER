
document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       1. 스크롤 애니메이션
    ========================= */
    const elements = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .fade-show');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    });

    elements.forEach(el => observer.observe(el));


    /* =========================
       2. sub-category swiper (모바일 전용)
    ========================= */
    let subCateSwiper = null;

    function initSubCateSwiper() {
        const isMobile = window.innerWidth <= 768;

        if (isMobile && !subCateSwiper) {
            subCateSwiper = new Swiper(".sub-cate-swiper", {
                slidesPerView: "auto",
                spaceBetween: 12,
                freeMode: true
            });
        } else if (!isMobile && subCateSwiper) {
            subCateSwiper.destroy(true, true);
            subCateSwiper = null;
        }
    }

    initSubCateSwiper();
    window.addEventListener("resize", initSubCateSwiper);

});