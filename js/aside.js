document.addEventListener("DOMContentLoaded", () => {
    
    ////// aside 메뉴 특정 위치에서 absolute로 전환

    const asideMenu = document.querySelector(".aside-menu");
    const stopSection = document.querySelector("footer");
    const wrap = document.querySelector(".wrap");

    function handleAsideStop() {
        const stopSectionTop = stopSection.offsetTop;
        const asideHeight = asideMenu.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        // aside의 bottom:20px 상태를 top값으로 환산
        const fixedTop = scrollY + windowHeight - asideHeight - 20;

        // footer의 윗부분에 닿기 직전 멈춤
        const stopTop = stopSectionTop - asideHeight - 20;

        if (fixedTop >= stopTop) {
            asideMenu.style.position = "absolute";
            asideMenu.style.right = "20px";
            asideMenu.style.top = stopTop + "px";
            asideMenu.style.bottom = "auto";
        } else {
            asideMenu.style.position = "fixed";
            asideMenu.style.right = "20px";
            asideMenu.style.bottom = "20px";
            asideMenu.style.top = "auto";
        }
    }

    window.addEventListener("scroll", handleAsideStop);
    window.addEventListener("resize", handleAsideStop);
    handleAsideStop();




    ////// 챗봇 상담창 열고 닫기
    const btnChat = document.querySelector(".btn-chat")
    const chatPanel = document.querySelector(".chat-panel")
    const btnChatClose = document.querySelector(".btn-chat-close")

    btnChat.addEventListener("click",()=>{
        chatPanel.classList.add("on")
    })
    btnChatClose.addEventListener("click",()=>{
        chatPanel.classList.remove("on")
    })

});