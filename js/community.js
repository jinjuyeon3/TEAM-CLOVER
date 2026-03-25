document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-list > li");

    faqItems.forEach((item) => {
        const btnDown = item.querySelector(".btn-down");
        const btnUp = item.querySelector(".btn-up");

        btnDown.addEventListener("click", () => {
            item.classList.add("on");
        });

        btnUp.addEventListener("click", () => {
            item.classList.remove("on");
        });
    });
});