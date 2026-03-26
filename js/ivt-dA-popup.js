document.addEventListener("DOMContentLoaded",()=>{
    const modal = document.querySelector(".modal")
    const popup = document.querySelector(".popup")
    const btnOk = document.querySelector(".btn-ok")

    btnOk.addEventListener("click",()=>{
        modal.classList.add("on")
        popup.classList.add("on")
    })
})