document.addEventListener("DOMContentLoaded",()=>{
    // 신청양식 드롭다운
    const btnDown = document.querySelector(".btn-down")
    const btnUp = document.querySelector(".btn-up")
    const formWrap = document.querySelector(".form-wrap")

    btnDown.addEventListener("click",()=>{
        formWrap.classList.add("clicked")
        btnUp.style.display = "block"
        btnDown.style.display = "none"
    })
    btnUp.addEventListener("click",()=>{
        formWrap.classList.remove("clicked")
        btnDown.style.display = "block"
        btnUp.style.display = "none"
    })


    // 버튼 클릭 시 스타일 변경
    const btnGroups = document.querySelectorAll(".btn-group");

    btnGroups.forEach(group => {
        const buttons = group.querySelectorAll("button");

        buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("clicked"));
            button.classList.add("clicked");
        });
        });
    });

})