document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-list > li");
    const buttons = document.querySelectorAll(".btn-filter");

    // FAQ 아코디언
    faqItems.forEach((item) => {
        const btn = item.querySelector(".btn-down");

        if (!btn) return;

        btn.addEventListener("click", () => {
            item.classList.toggle("on");

            if (item.classList.contains("on")) {
                btn.style.transform = "rotate(-180deg)";
            } else {
                btn.style.transform = "rotate(0deg)";
            }
        });
    });

    // 카테고리 필터
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const filter = btn.dataset.filter;

            // 버튼 active 처리
            buttons.forEach((b) => b.classList.remove("clicked"));
            btn.classList.add("clicked");

            // FAQ 필터링
            faqItems.forEach((item) => {
                const category = item.dataset.category;

                // 필터 바뀌면 열려있던 항목 닫기
                item.classList.remove("on");

                const arrow = item.querySelector(".btn-down");
                if (arrow) {
                    arrow.style.transform = "rotate(0deg)";
                }

                if (filter === "all" || category === filter) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});