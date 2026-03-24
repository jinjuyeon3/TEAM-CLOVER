document.addEventListener("DOMContentLoaded",()=>{
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
})