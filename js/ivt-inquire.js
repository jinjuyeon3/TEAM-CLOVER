document.addEventListener("DOMContentLoaded", () => {

    // 1. 탭 메뉴 기능
    const tabWrap = document.querySelector(".ivt-list");

    if (tabWrap) {
        const tabs = tabWrap.querySelectorAll(".list-head li");
        const tabContents = tabWrap.querySelectorAll(".tab-content");

        tabs.forEach((tab, index) => {
            tab.addEventListener("click", () => {
                // 모든 탭 active 제거
                tabs.forEach(item => item.classList.remove("active"));

                // 모든 콘텐츠 active 제거
                tabContents.forEach(content => content.classList.remove("active"));

                // 클릭한 탭 활성화
                tab.classList.add("active");

                // 해당 콘텐츠 활성화
                if (tabContents[index]) {
                    tabContents[index].classList.add("active");
                }
            });
        });
    }


    // 2. 문의내역 아코디언 기능
    const inquireLists = document.querySelectorAll(".list-body > li");

    inquireLists.forEach((list) => {
        const btn = list.querySelector(".btn-group > img");

        if (!btn) return;

        btn.addEventListener("click", () => {
            list.classList.toggle("on");

            if (list.classList.contains("on")) {
                btn.style.transform = "rotate(-180deg)";
            } else {
                btn.style.transform = "rotate(0deg)";
            }
        });
    });
});