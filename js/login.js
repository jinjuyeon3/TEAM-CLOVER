document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".tab-menu>button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab, i) => {
        tab.addEventListener("click", () => {

            // 탭 active 초기화
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            // 콘텐츠 active 초기화
            tabContents.forEach(form => form.classList.remove("active"));
            tabContents[i].classList.add("active");

        });
    });

});