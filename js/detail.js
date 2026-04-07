document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       탭 메뉴
    ========================= */
    // const tabs = document.querySelectorAll(".dt-tab li");
    // const contents = document.querySelectorAll(".dt-contents .dt-content");
    // const tabMenu = document.querySelector(".dt-tab");

    // if (tabs.length && contents.length && tabMenu) {
    //     tabs.forEach((tab, index) => {
    //         tab.addEventListener("click", () => {
    //             tabs.forEach((item) => item.classList.remove("active"));
    //             contents.forEach((content) => content.classList.remove("active"));

    //             tab.classList.add("active");
    //             contents[index].classList.add("active");

    //             const headerOffset = 180;
    //             const tabTop = tabMenu.getBoundingClientRect().top + window.pageYOffset - headerOffset;

    //             window.scrollTo({
    //                 top: tabTop,
    //                 behavior: "smooth"
    //             });
    //         });
    //     });
    // }


    /* =========================
       Q&A 팝업
    ========================= */
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

    modal.addEventListener("click", () => {
        modal.classList.remove("on");
        popup.classList.remove("on");
    });

    if (btnHome) {
        btnHome.addEventListener("click", () => {
            modal.classList.remove("on");
            popup.classList.remove("on");
        });
    }


    /* =========================
       미니 구매 박스 (핵심)
    ========================= */
    // const infoBox = document.querySelector(".info-box");
    // const proMinibox = document.querySelector(".pro-minibox");
    // const footer = document.querySelector(".recomend-item");

    // if (!infoBox || !proMinibox || !footer) return;

    // function handleMiniBox() {
    //     const infoBoxBottom = infoBox.offsetTop + infoBox.offsetHeight;
    //     const footerTop = footer.offsetTop;
    //     const miniboxHeight = proMinibox.offsetHeight;
    //     const windowHeight = window.innerHeight;
    //     const scrollY = window.scrollY;

    //     // info-box 지난 여부
    //     const passedInfoBox = scrollY + 200 > infoBoxBottom;

    //     // fixed 상태 위치 계산
    //     const fixedTop = scrollY + windowHeight - miniboxHeight - 40;

    //     // footer 멈춤 위치
    //     const stopTop = footerTop - miniboxHeight - 40;


    //     /* 🔴 1. info-box 이전 → 숨김 */
    //     if (!passedInfoBox) {
    //         proMinibox.style.opacity = "0";
    //         proMinibox.style.visibility = "hidden";
    //         proMinibox.style.pointerEvents = "none";

    //         proMinibox.style.position = "relative";
    //         proMinibox.style.right = "auto";
    //         proMinibox.style.bottom = "auto";
    //         proMinibox.style.top = "auto";
    //         proMinibox.style.marginLeft = "auto";

    //         return;
    //     }


    //     /* 🟢 2. 나타남 */
    //     proMinibox.style.opacity = "1";
    //     proMinibox.style.visibility = "visible";
    //     proMinibox.style.pointerEvents = "auto";


    //     /* 🟡 3. footer 닿으면 멈춤 */
    //     if (fixedTop >= stopTop) {
    //         proMinibox.style.position = "absolute";
    //         proMinibox.style.right = "150px";
    //         proMinibox.style.top = stopTop + "px";
    //         proMinibox.style.bottom = "auto";
    //         proMinibox.style.marginLeft = "0";
    //     } else {
    //         /* 🔵 4. 평소 → 우하단 fixed */
    //         proMinibox.style.position = "fixed";
    //         proMinibox.style.right = "150px";
    //         proMinibox.style.bottom = "40px";
    //         proMinibox.style.top = "auto";
    //         proMinibox.style.marginLeft = "0";
    //     }
    // }

    // window.addEventListener("scroll", handleMiniBox);
    // window.addEventListener("resize", handleMiniBox);
    // handleMiniBox();


    /* =========================
    하트 버튼 클릭
    ========================= */
    const heartBtn = document.querySelector(".btn-heart");

    if (heartBtn) {
        heartBtn.addEventListener("click", () => {
            heartBtn.classList.toggle("clicked");
        });
    }

    

});



// 상세설명 탭 영역을 벗어나면 옵션박스가 사라는 코드 
document.addEventListener("DOMContentLoaded", () => {
    const minibox = document.querySelector(".pro-minibox");
    const sections = document.querySelectorAll(".dt-content");
    const tabItems = document.querySelectorAll(".dt-tab li");
    const tabLinks = document.querySelectorAll(".dt-tab a");

    if (!minibox || sections.length === 0) return;

    function updateMiniboxAndTab() {
        const scrollPoint = window.scrollY + 150; 
        // 숫자는 현재 헤더 높이에 맞춰 조금 여유 준 값

        let currentId = "";

        sections.forEach((section) => {
            if (scrollPoint >= section.offsetTop) {
                currentId = section.id;
            }
        });

        // 상품설명(dt1)일 때만 보이기
        if (currentId === "dt1") {
            minibox.classList.remove("hide");
        } else {
            minibox.classList.add("hide");
        }

        // 탭 active 표시
        tabItems.forEach((item) => item.classList.remove("active"));

        tabLinks.forEach((link) => {
            const href = link.getAttribute("href");
            if (href === `#${currentId}`) {
                link.parentElement.classList.add("active");
            }
        });
    }

    // 탭 클릭 시 부드럽게 이동
    tabLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = link.getAttribute("href");
            const target = document.querySelector(targetId);

            if (!target) return;

            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: "smooth"
            });
        });
    });

    window.addEventListener("scroll", updateMiniboxAndTab);
    window.addEventListener("load", updateMiniboxAndTab);

    updateMiniboxAndTab();
});