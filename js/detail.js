document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".dt-tab li");
    const contents = document.querySelectorAll(".dt-content");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {

            // 1. 모든 탭 active 제거
            tabs.forEach(item => item.classList.remove("active"));

            // 2. 모든 콘텐츠 숨김
            contents.forEach(content => content.classList.remove("active"));

            // 3. 클릭한 탭 active
            tab.classList.add("active");

            // 4. 해당 콘텐츠 active
            contents[index].classList.add("active");
        });
    });

    // Q&A 문의 버튼 클릭 시 로그인 안내 팝업 열기
    const askBtns = document.querySelectorAll(".btn-ask li a");
    const modal = document.querySelector(".modal");
    const popup = document.querySelector(".popup");
    const btnHome = document.querySelector(".btn-home");

    askBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            modal.classList.add("on");
            popup.classList.add("on");
        });
    });

    // 배경 클릭 시 팝업 닫기
    modal.addEventListener("click", () => {
        modal.classList.remove("on");
        popup.classList.remove("on");
    });

    // 확인 버튼 클릭 전에 팝업 닫기
    btnHome.addEventListener("click", () => {
        modal.classList.remove("on");
        popup.classList.remove("on");
    });
});