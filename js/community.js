document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-list > li");

    faqItems.forEach((item) => {
        const btn = item.querySelector(".btn-down");

        btn.addEventListener("click", () => {
            item.classList.toggle("on");
            
            // 화살표 회전도 상태에 따라 변경
            if (item.classList.contains("on")) {
                btn.style.transform = "rotate(-180deg)";
            } else {
                btn.style.transform = "rotate(0deg)";
            }
        });
    });
});