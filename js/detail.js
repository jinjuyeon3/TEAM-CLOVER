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



    ////// 상품 선택/구매 박스 고정

        const infoBox = document.querySelector(".info-box");
        const proMinibox = document.querySelector(".pro-minibox");
        const detailBox = document.querySelector(".detail-box");
        const footer = document.querySelector("footer");

        if (!infoBox || !proMinibox || !detailBox || !footer) return;

        function handleMiniBox() {
            const infoBoxBottom = infoBox.offsetTop + infoBox.offsetHeight;
            const footerTop = footer.offsetTop;
            const miniboxHeight = proMinibox.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;

            // info-box를 지나야 우하단 고정 시작
            const passedInfoBox = scrollY > infoBoxBottom;

            // fixed 상태일 때 실제 박스의 top 위치
            const fixedTop = scrollY + windowHeight - miniboxHeight - 40;

            // footer 위에서 멈출 absolute top값
            const stopTop = footerTop - miniboxHeight - 40;

            if (!passedInfoBox) {
                // 아직 info-box 전이면 원래 자리
                proMinibox.style.position = "relative";
                proMinibox.style.right = "auto";
                proMinibox.style.bottom = "auto";
                proMinibox.style.top = "auto";
                proMinibox.style.marginLeft = "auto";
            } else if (fixedTop >= stopTop) {
                // footer 직전이면 absolute로 멈춤
                proMinibox.style.position = "absolute";
                proMinibox.style.right = "150px";
                proMinibox.style.top = stopTop + "px";
                proMinibox.style.bottom = "auto";
                proMinibox.style.marginLeft = "0";
            } else {
                // 평소에는 우하단 fixed
                proMinibox.style.position = "fixed";
                proMinibox.style.right = "150px";
                proMinibox.style.bottom = "40px";
                proMinibox.style.top = "auto";
                proMinibox.style.marginLeft = "0";
            }
        }

        window.addEventListener("scroll", handleMiniBox);
        window.addEventListener("resize", handleMiniBox);
        handleMiniBox();


});