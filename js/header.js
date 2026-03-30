// document.addEventListener("DOMContentLoaded",()=>{
//     const searchIn = document.querySelector(".search-in")
//     const searchClose = document.querySelector(".search-close")
//     const searchContainer = document.querySelector(".search-container")

//     searchIn.addEventListener("click",()=>{
//         searchContainer.classList.add("on")
//         searchIn.style.display = "none"
//         searchClose.style.display = "block"
//     })

//     searchClose.addEventListener("click",()=>{
//         searchContainer.classList.remove("on")
//         searchIn.style.display = "block"
//         searchClose.style.display = "none"
//     })
// })



document.addEventListener("DOMContentLoaded", () => {
    /* =========================
       1. PC 헤더 검색
    ========================= */
    const pcSearchIn = document.querySelector("header .search-in");
    const pcSearchClose = document.querySelector("header .search-close");
    const pcSearchContainer = document.querySelector("header .search-container");

    if (pcSearchIn && pcSearchClose && pcSearchContainer) {
        pcSearchIn.addEventListener("click", () => {
            pcSearchContainer.classList.add("on");
            pcSearchIn.style.display = "none";
            pcSearchClose.style.display = "block";
        });

        pcSearchClose.addEventListener("click", () => {
            pcSearchContainer.classList.remove("on");
            pcSearchIn.style.display = "block";
            pcSearchClose.style.display = "none";
        });
    }

    /* =========================
       2. 탭 헤더
    ========================= */
    const headerSmart = document.querySelector(".header-smart");

    if (!headerSmart) return;

    const closedHeader = headerSmart.querySelector(".tab-header-closed");
    const menuHeader = headerSmart.querySelector(".tab-header-menu");
    const searchHeader = headerSmart.querySelector(".tab-header-search");

    const openMenuBtn = headerSmart.querySelector(".tab-header-closed .menu-btn");
    const openSearchBtn = headerSmart.querySelector(".tab-header-closed .search-btn");
    const closeMenuBtn = headerSmart.querySelector(".tab-menu-close");
    const closeSearchBtn = headerSmart.querySelector(".tab-search-close");

    const depth1Items = headerSmart.querySelectorAll(".depth1-item");
    const depth1ArrowBtns = headerSmart.querySelectorAll(".depth1-item .depth1-arrow");
    const panels = headerSmart.querySelectorAll(".tab-panel");

    function hideAllStates() {
        if (closedHeader) closedHeader.style.display = "none";
        if (menuHeader) menuHeader.style.display = "none";
        if (searchHeader) searchHeader.style.display = "none";
    }

    function showClosed() {
        hideAllStates();
        if (closedHeader) closedHeader.style.display = "block";
    }

    function showMenu() {
        hideAllStates();
        if (menuHeader) menuHeader.style.display = "block";
    }

    function showSearch() {
        hideAllStates();
        if (searchHeader) searchHeader.style.display = "block";
    }

    function activatePanel(menuName) {
        depth1Items.forEach((item) => {
            item.classList.remove("is-active");
            if (item.dataset.menu === menuName) {
                item.classList.add("is-active");
            }
        });

        panels.forEach((panel) => {
            panel.classList.remove("is-active");
            if (panel.dataset.panel === menuName) {
                panel.classList.add("is-active");
            }
        });
    }

    if (openMenuBtn) {
        openMenuBtn.addEventListener("click", () => {
            showMenu();
            activatePanel("skin");
        });
    }

    if (openSearchBtn) {
        openSearchBtn.addEventListener("click", () => {
            showSearch();
        });
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener("click", () => {
            showClosed();
        });
    }

    if (closeSearchBtn) {
        closeSearchBtn.addEventListener("click", () => {
            showClosed();
        });
    }

    depth1ArrowBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const parentItem = btn.closest(".depth1-item");
            if (!parentItem) return;

            const menuName = parentItem.dataset.menu;
            showMenu();
            activatePanel(menuName);
        });
    });

    /* =========================
       3. 아코디언
    ========================= */
    const accordionItems = headerSmart.querySelectorAll(".accordion-item");

    accordionItems.forEach((item) => {
        const titleBtn = item.querySelector(".accordion-title");
        const icon = item.querySelector(".accordion-icon");

        if (!titleBtn) return;

        titleBtn.addEventListener("click", () => {
            const isOpen = item.classList.contains("is-open");

            item.classList.toggle("is-open");

            if (icon) {
                icon.textContent = isOpen ? "⌄" : "⌃";
            }
        });
    });

    /* =========================
       4. 초기 상태
    ========================= */
    showClosed();
    activatePanel("skin");



    /* =========================
    3. 모바일 헤더
    ========================= */
    const mobileHeader = document.querySelector(".header-mobile");

    if (mobileHeader) {

        const menuBtn = mobileHeader.querySelector(".mobile-menu-btn");
        const menuClose = mobileHeader.querySelector(".mobile-menu-close");
        const menuWrap = mobileHeader.querySelector(".mobile-header-menu");
        const dim = mobileHeader.querySelector(".mobile-header-dim");

        const depth1Items = mobileHeader.querySelectorAll(".mobile-depth1-item");
        const depth2Items = mobileHeader.querySelectorAll(".mobile-depth2-item");

        /* =========================
        메뉴 열기 / 닫기
        ========================= */
        function openMobileMenu() {
            if (menuWrap) menuWrap.classList.add("on");
            if (dim) dim.classList.add("on");

            // 스크롤 막기 (UX 좋음)
            document.body.style.overflow = "hidden";
        }

        function closeMobileMenu() {
            if (menuWrap) menuWrap.classList.remove("on");
            if (dim) dim.classList.remove("on");

            // 아코디언 초기화
            mobileHeader.querySelectorAll(".is-open").forEach(el => {
                el.classList.remove("is-open");
            });

            // 스크롤 복구
            document.body.style.overflow = "";
        }

        if (menuBtn) {
            menuBtn.addEventListener("click", openMobileMenu);
        }

        if (menuClose) {
            menuClose.addEventListener("click", closeMobileMenu);
        }

        if (dim) {
            dim.addEventListener("click", closeMobileMenu);
        }


        /* =========================
        1뎁스 아코디언
        ========================= */
        depth1Items.forEach(item => {
            const btn = item.querySelector(".mobile-depth1-arrow");

            if (!btn) return; // 서브 없는 메뉴

            btn.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();

                // 다른 1뎁스 닫기
                depth1Items.forEach(i => {
                    if (i !== item) i.classList.remove("is-open");
                });

                item.classList.toggle("is-open");
            });
        });


        /* =========================
        2뎁스 아코디언
        ========================= */
        depth2Items.forEach(item => {
            const btn = item.querySelector(".mobile-depth2-arrow");

            if (!btn) return;

            btn.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();

                const parent = item.closest(".mobile-depth2-list");

                if (!parent) return;

                // 같은 depth 안에서 하나만 열기
                parent.querySelectorAll(".mobile-depth2-item").forEach(i => {
                    if (i !== item) i.classList.remove("is-open");
                });

                item.classList.toggle("is-open");
            });
        });
    }

});