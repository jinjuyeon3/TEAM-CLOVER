// document.addEventListener("DOMContentLoaded",()=>{
//     // 신청양식 드롭다운
//     const btnDown = document.querySelector(".btn-down")
//     const btnUp = document.querySelector(".btn-up")
//     const formWrap = document.querySelector(".form-wrap")

//     btnDown.addEventListener("click",()=>{
//         formWrap.classList.add("clicked")
//         btnUp.style.display = "block"
//         btnDown.style.display = "none"
//     })
//     btnUp.addEventListener("click",()=>{
//         formWrap.classList.remove("clicked")
//         btnDown.style.display = "block"
//         btnUp.style.display = "none"
//     })


//     // 버튼 클릭 시 스타일 변경
//     const btnGroups = document.querySelectorAll(".btn-group");

//     btnGroups.forEach(group => {
//         const buttons = group.querySelectorAll("button");

//         buttons.forEach(button => {
//         button.addEventListener("click", () => {
//             buttons.forEach(btn => btn.classList.remove("clicked"));
//             button.classList.add("clicked");
//         });
//         });
//     });

// })


document.addEventListener("DOMContentLoaded", () => {

    const openBtn = document.querySelector(".btn-personal-apply button");
    const modal = document.querySelector(".modal");
    const popup = document.querySelector(".popup");

    const form = document.querySelector(".form-box");
    const cancelBtn = document.querySelector(".btn-cancel");

    // 모달 열기
    openBtn.addEventListener("click", (e) => {
        e.preventDefault(); // 혹시 모를 submit 방지
        modal.classList.add("on");
        popup.classList.add("on");
    });

    // 신청하기 (submit 막기)
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // ⭐ 페이지 이동 막기

        // 여기서 유효성 검사 넣어도 됨
        // if(form.checkValidity()) { ... }

        alert("신청이 완료되었습니다."); // 테스트용
    });

    // 취소 버튼 → 모달 닫기
    cancelBtn.addEventListener("click", (e) => {
        e.preventDefault(); // ⭐ submit 방지
        modal.classList.remove("on");
        popup.classList.remove("on");
    });

    // 배경 클릭 시 닫기
    modal.addEventListener("click", () => {
        modal.classList.remove("on");
        popup.classList.remove("on");
    });


    // 옵션 버튼 클릭 시 선택
    const buttonGroups = document.querySelectorAll(".popup .btn-group");

    buttonGroups.forEach((group) => {
        const buttons = group.querySelectorAll("button");

        buttons.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();

                // 같은 그룹 안의 다른 버튼 clicked 제거
                buttons.forEach((item) => item.classList.remove("clicked"));

                // 현재 버튼 clicked 추가
                btn.classList.add("clicked");
            });
        });
    });

});