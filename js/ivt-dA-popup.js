document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".modal");
    const popup = document.querySelector(".popup");
    const form = document.querySelector(".pwForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // 기본 제출 막기

        if (form.checkValidity()) {
            modal.classList.add("on");
            popup.classList.add("on");
        } else {
            form.reportValidity(); // required 메시지 표시
        }
    });
});