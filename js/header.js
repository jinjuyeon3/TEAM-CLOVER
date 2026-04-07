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

    if (headerSmart) {
        const closedHeader = headerSmart.querySelector(".tab-header-closed");
        const menuHeader = headerSmart.querySelector(".tab-header-menu");
        const searchHeader = headerSmart.querySelector(".tab-header-search");
        const tabDim = headerSmart.querySelector(".tab-header-dim");

        const openMenuBtn = headerSmart.querySelector(".menu-btn");
        const openSearchBtn = headerSmart.querySelector(".search-btn");
        const closeMenuBtn = headerSmart.querySelector(".tab-menu-close");
        const closeSearchBtn = headerSmart.querySelector(".tab-search-close");

        const tabMenuWrap = headerSmart.querySelector(".tab-menu-wrap");

        const depth1Items = headerSmart.querySelectorAll(".depth1-item");
        const depth1ArrowBtns = headerSmart.querySelectorAll(".depth1-arrow");
        const panels = headerSmart.querySelectorAll(".tab-panel");

        function hideAllStates() {
            if (closedHeader) closedHeader.style.display = "none";
            if (menuHeader) menuHeader.style.display = "none";
            if (searchHeader) searchHeader.style.display = "none";
        }

        function showClosed() {
            hideAllStates();
            if (closedHeader) closedHeader.style.display = "block";
            tabDim?.classList.remove("on");
            document.body.style.overflow = "";
        }

        function showMenu() {
            hideAllStates();
            if (menuHeader) menuHeader.style.display = "block";
            tabDim?.classList.add("on");
            document.body.style.overflow = "hidden";
        }

        function showSearch() {
            hideAllStates();
            if (searchHeader) searchHeader.style.display = "block";
            tabDim?.classList.add("on");
            document.body.style.overflow = "hidden";
        }

        function resetTabMenu() {
            tabMenuWrap?.classList.remove("is-sub-open");

            depth1Items.forEach((item) => item.classList.remove("is-active"));
            panels.forEach((panel) => panel.classList.remove("is-active"));

            headerSmart.querySelectorAll(".accordion-item").forEach((item) => {
                item.classList.remove("is-open");
            });
        }

        function activatePanel(menuName) {
            let hasSub = false;

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

                    if (panel.innerHTML.trim() !== "") {
                        hasSub = true;
                    }
                }
            });

            if (hasSub) {
                tabMenuWrap?.classList.add("is-sub-open");
            } else {
                tabMenuWrap?.classList.remove("is-sub-open");
            }
        }

        openMenuBtn?.addEventListener("click", () => {
            showMenu();
            resetTabMenu();
        });

        openSearchBtn?.addEventListener("click", () => {
            showSearch();
        });

        closeMenuBtn?.addEventListener("click", () => {
            resetTabMenu();
            showClosed();
        });

        closeSearchBtn?.addEventListener("click", () => {
            showClosed();
        });

        tabDim?.addEventListener("click", () => {
            resetTabMenu();
            showClosed();
        });

        depth1ArrowBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();

                const parent = btn.closest(".depth1-item");
                if (!parent) return;

                const menuName = parent.dataset.menu;
                showMenu();
                activatePanel(menuName);
            });
        });

        const accordionItems = headerSmart.querySelectorAll(".accordion-item");

        accordionItems.forEach((item) => {
            const titleBtn = item.querySelector(".accordion-title");
            if (!titleBtn) return;

            titleBtn.addEventListener("click", () => {
                item.classList.toggle("is-open");
            });
        });

        showClosed();
        resetTabMenu();
    }

    /* =========================
    3. 모바일 헤더
    ========================= */
    const mobileHeader = document.querySelector(".header-mobile");

    if (mobileHeader) {
        const menuBtn = mobileHeader.querySelector(".mobile-menu-btn");
        const searchBtn = mobileHeader.querySelector(".mobile-header .search-btn");
        const searchBtnImg = searchBtn ? searchBtn.querySelector("img") : null;

        const menuClose = mobileHeader.querySelector(".mobile-menu-close");

        const menuWrap = mobileHeader.querySelector(".mobile-header-menu");
        const searchWrap = mobileHeader.querySelector(".mobile-header-search");
        const dim = mobileHeader.querySelector(".mobile-header-dim");

        const depth1Items = mobileHeader.querySelectorAll(".mobile-depth1-item");
        const depth2Items = mobileHeader.querySelectorAll(".mobile-depth2-item");

        let mobileSearchSwiper = null;

        function initMobileSearchSwiper() {
            const swiperEl = mobileHeader.querySelector(".recent-item-swiper");
            if (!swiperEl) return;

            if (mobileSearchSwiper) {
                mobileSearchSwiper.destroy(true, true);
                mobileSearchSwiper = null;
            }

            mobileSearchSwiper = new Swiper(".recent-item-swiper", {
                slidesPerView: 3,
                spaceBetween: 14,
                freeMode: true
            });
        }

        function resetMobileAccordion() {
            mobileHeader.querySelectorAll(".is-open").forEach((el) => {
                el.classList.remove("is-open");
            });
        }

        function setSearchButtonDefault() {
            if (searchBtnImg) {
                searchBtnImg.src = "./img/0-imgPublishing/icon/smart-search.svg";
                searchBtnImg.alt = "검색 버튼";
            }
            if (searchBtn) {
                searchBtn.setAttribute("aria-label", "검색 열기");
            }
        }

        function setSearchButtonClose() {
            if (searchBtnImg) {
                searchBtnImg.src = "./img/0-imgPublishing/icon/smart-search-close.svg";
                searchBtnImg.alt = "검색 닫기 버튼";
            }
            if (searchBtn) {
                searchBtn.setAttribute("aria-label", "검색 닫기");
            }
        }

        function openMobileMenu() {
            closeMobileSearch(false);
            menuWrap?.classList.add("on");
            dim?.classList.add("on");
            document.body.style.overflow = "hidden";
        }

        function closeMobileMenu(restoreScroll = true) {
            menuWrap?.classList.remove("on");
            resetMobileAccordion();

            if (restoreScroll) {
                dim?.classList.remove("on");
                document.body.style.overflow = "";
            }
        }

        function openMobileSearch() {
            closeMobileMenu(false);
            searchWrap?.classList.add("on");
            setSearchButtonClose();
            document.body.style.overflow = "hidden";

            setTimeout(() => {
                initMobileSearchSwiper();
            }, 50);
        }

        function closeMobileSearch(restoreScroll = true) {
            searchWrap?.classList.remove("on");
            setSearchButtonDefault();

            if (restoreScroll) {
                document.body.style.overflow = "";
            }
        }

        function closeMobileAll() {
            menuWrap?.classList.remove("on");
            searchWrap?.classList.remove("on");
            dim?.classList.remove("on");
            resetMobileAccordion();
            setSearchButtonDefault();
            document.body.style.overflow = "";
        }

        menuBtn?.addEventListener("click", openMobileMenu);

        searchBtn?.addEventListener("click", () => {
            if (searchWrap?.classList.contains("on")) {
                closeMobileSearch(true);
            } else {
                openMobileSearch();
            }
        });

        menuClose?.addEventListener("click", () => {
            closeMobileMenu(true);
        });

        dim?.addEventListener("click", closeMobileAll);

        depth1Items.forEach((item) => {
            const btn = item.querySelector(".mobile-depth1-arrow");
            if (!btn) return;

            btn.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();

                depth1Items.forEach((i) => {
                    if (i !== item) i.classList.remove("is-open");
                });

                item.classList.toggle("is-open");
            });
        });

        depth2Items.forEach((item) => {
            const btn = item.querySelector(".mobile-depth2-arrow");
            if (!btn) return;

            btn.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();

                const parent = item.closest(".mobile-depth2-list");
                if (!parent) return;

                parent.querySelectorAll(".mobile-depth2-item").forEach((i) => {
                    if (i !== item) i.classList.remove("is-open");
                });

                item.classList.toggle("is-open");
            });
        });

        setSearchButtonDefault();
    }




    ////// 토스트 기능
    const loginLink = document.querySelector(".need-login");
    const toast = document.querySelector(".toast-message");

    let toastTimer;

    loginLink.addEventListener("click", (e) => {
        e.preventDefault();

        toast.classList.add("show");

        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            toast.classList.remove("show");
        }, 1500);
    });


});


document.addEventListener("DOMContentLoaded",()=>{

    const headeryjj = document.querySelector("header")

    let lastScrollTop = 0
    window.addEventListener("scroll",()=>{
        // 스크롤바가 움직일 때 실행되는 소스코드
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        // 호환성을 우해서 만들어 놓은 소스코드

        if(scrollTop < lastScrollTop){
            console.log("마우스 휠 위로 올림")
            headeryjj.classList.remove("up")
        }else{
            console.log("마우스 휠 아래로 내림")
            headeryjj.classList.add("up")
        }

        lastScrollTop = scrollTop
    })

})