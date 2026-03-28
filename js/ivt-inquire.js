document.addEventListener("DOMContentLoaded", () => {
    const inquireLists = document.querySelectorAll(".list-body > li");

    inquireLists.forEach((list) => {
        const btn = list.querySelector(".btn-group > img");

        btn.addEventListener("click", () => {
            list.classList.toggle("on");

            // 화살표 회전도 상태에 따라 변경
            if (list.classList.contains("on")) {
                btn.style.transform = "rotate(-180deg)";
            } else {
                btn.style.transform = "rotate(0deg)";
            }
        });
    });
});