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

});